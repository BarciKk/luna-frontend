import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Box, Typography, Divider } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import CloseIcon from '@mui/icons-material/Close';
import { taskOptions } from 'constants/user.constants';
import { useModal } from 'providers/ModalProvider';

export const AddActivity = () => {
  const [showBox, setShowBox] = useState(false);
  const { handleOpenModal } = useModal();

  const handleFabClick = () => {
    setShowBox((prevShowBox) => !prevShowBox);
  };

  return (
    <Box>
      <Fab color="primary" aria-label="add" onClick={handleFabClick}>
        {showBox ? <CloseIcon /> : <AddIcon />}
      </Fab>

      {showBox && (
        <Box
          sx={{
            bgcolor: 'rgba(43, 43, 43, .65)',
            position: 'absolute',
            maxWidth: '400px',
            bottom: '8em',
            right: '1em',
            borderRadius: '8px',
            padding: '14px',
          }}
        >
          {taskOptions.map((task, index) => (
            <Box
              key={index}
              color="white"
              onClick={() => handleOpenModal('createActivity')}
            >
              <ClickAwayListener onClickAway={handleFabClick}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="12px"
                  p="12px"
                  sx={{
                    minHeight: '50px',
                    transition: 'box-shadow 0.6s ease',
                    ':hover': {
                      cursor: 'pointer',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {task.icon}
                  <Box flex={1}>
                    <Typography fontSize={14} fontWeight="bolder">
                      {task.title}
                    </Typography>
                    <Typography fontSize={12}>{task.description}</Typography>
                  </Box>
                  <ArrowForwardIos fontSize="small" />
                </Box>
              </ClickAwayListener>
              {index < taskOptions.length - 1 && (
                <Divider sx={{ marginY: '10px' }} />
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
