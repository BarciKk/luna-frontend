import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  Fab,
  Box,
  Divider,
  ClickAwayListener,
  IconButton,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

import CloseIcon from '@mui/icons-material/Close';
import { taskOptions } from 'constants/user.constants';
import { useModal } from 'providers/ModalProvider';
import { Typography } from 'components/Typography';

export const AddActivity = () => {
  const [showBox, setShowBox] = useState(false);
  const { handleOpenModal } = useModal();
  const handleFabClick = () => {
    setShowBox((prevShowBox) => !prevShowBox);
  };

  //Also  this is solution for now later one of them will open Recuring task or im gonna modify current createTask
  const openModalHandler = (index: number) => {
    switch (index) {
      case 0:
        return handleOpenModal('createActivity');
      case 1:
        return handleOpenModal('createTask');
      case 2:
        return handleOpenModal('createTask');
      default:
        return;
    }
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
            borderRadius: (theme) => theme.shape.borderRadius,
            padding: '14px',
          }}
        >
          {taskOptions.map((task, index) => (
            <Box
              key={index}
              color="white"
              onClick={() => openModalHandler(index)}
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
                      borderRadius: (theme) => theme.shape.borderRadius,
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <IconButton>{task.icon}</IconButton>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      fontWeight="bolder"
                      color="primary.contrastText"
                      text={task.title}
                    />
                    <Typography
                      fontSize={12}
                      color="primary.contrastText"
                      maxLength={64}
                      text={task.description}
                    />
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
