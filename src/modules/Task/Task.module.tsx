import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { CategoryIcon } from 'components/CategoryIcon';
import { Typography } from 'components/Typography';
import { useQueryString, useUser } from 'hooks';
import { FC, useEffect } from 'react';
import { TaskProps } from 'types/Task.types';
import ReplayIcon from '@mui/icons-material/Replay';
import { format } from 'date-fns';
import { priorityIcons } from 'constants/task.constants';
import { BASE_CATEGORIES } from 'constants/category.constants';
import { useModal } from 'providers/ModalProvider';

export const Task: FC<TaskProps> = ({
  id,
  name,
  date,
  iconName,
  description,
  priority,
  recurringTask,
}) => {
  const { user } = useUser();
  const { createQueryString, removeQueryString } = useQueryString();
  const { handleOpenModal, open } = useModal();

  const formattedDate = format(date, 'dd MMM yyyy');
  const customCategoryName = user?.categories.find(
    (cat) => cat.name === iconName,
  )?.name;
  const baseCategoryName = BASE_CATEGORIES.find(
    (cat) => cat.name === iconName,
  )?.name;
  const categoryIcon = user?.categories.find(
    (category) => category.name === iconName,
  )?.icon;

  const handleOpenTaskInfo = () => {
    handleOpenModal('createTask');
    if (!open) createQueryString('id', `${id}`);
  };

  useEffect(() => {
    if (!open) {
      removeQueryString('id');
    }
  }, [open, removeQueryString]);

  return (
    <Box
      onClick={handleOpenTaskInfo}
      id={id}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <CategoryIcon
          name={iconName}
          icon={categoryIcon}
          color="primary.main"
          withoutLabel
        />
        <Box
          alignSelf="flex-start"
          display="flex"
          justifyContent="space-between"
          width="100%"
        >
          <Box marginTop="10px">
            {(customCategoryName || baseCategoryName) && (
              <Typography
                color="primary.main"
                fontSize={12}
                fontWeight="bold"
                maxLength={42}
                sx={{ cursor: 'pointer' }}
                text={`#${customCategoryName ?? baseCategoryName}`}
              />
            )}
            <Typography
              fontWeight="bolder"
              text={name}
              fontSize={18}
              marginBottom="2px"
              display="block"
            />

            <Box
              sx={{
                minWidth: '100px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {description && (
                <Box
                  bgcolor="gray"
                  p="10px 8px"
                  borderRadius="8px"
                  maxHeight="8px"
                  width="100%"
                  maxWidth="90px"
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    display="block"
                    fontSize={10}
                    maxLength={10}
                    color="primary.contrastText"
                    text={`💬 ${description}`}
                  />
                </Box>
              )}
              {recurringTask && (
                <Tooltip title="Pending task">
                  <IconButton>
                    <ReplayIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography color="text.secondary" text={formattedDate} />
            <Tooltip title={`Priority: ${priority}`}>
              <Box fontSize="2rem" marginTop="8px" sx={{ cursor: 'pointer' }}>
                {priorityIcons[priority]}
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
