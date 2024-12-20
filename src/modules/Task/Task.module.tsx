import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { CategoryIcon } from 'components/CategoryIcon';
import { Typography } from 'components/Typography';
import { useUser } from 'hooks';
import { FC } from 'react';
import { TaskProps } from 'types/Task.types';
import ReplayIcon from '@mui/icons-material/Replay';
import { format } from 'date-fns';
import { priorityIcons } from 'constants/task.constants';
import { BASE_CATEGORIES } from 'constants/category.constants';

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

  const formattedDate = format(date, 'dd MMM yyyy');
  const category = user?.categories.find((cat) => cat.icon === iconName)?.name;
  const baseCategory = BASE_CATEGORIES.find(
    (cat) => cat.name === iconName,
  )?.name;

  return (
    <Box
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
          icon={iconName}
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
            {(category || baseCategory) && (
              <Typography
                color="primary.main"
                fontSize={12}
                fontWeight="bold"
                sx={{ cursor: 'pointer' }}
                text={`#${category ?? baseCategory}`}
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
