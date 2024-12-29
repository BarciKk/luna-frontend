import { Box, Skeleton, Stack } from '@mui/material';
import { getAllTasks } from 'api/task';
import { CustomSnackbar } from 'components/Snackbar';
import { Typography } from 'components/Typography';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { useSnackbar, useUser } from 'hooks';
import { Task } from 'modules/Task';
import { useQuery } from 'react-query';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';

export const Tasks = () => {
  const { user } = useUser();
  const { showSnackbar, snackbarProps } = useSnackbar();
  const {
    data: taskContent,
    isLoading,
    error,
  } = useQuery([QueryKeys.tasks, 'task'], () => getAllTasks(user?.id), {
    staleTime: 0,
    enabled: !!user,
  });
  if (error) {
    showSnackbar({
      message: "Sorry we could't find any task",
      duration: 3000,
      severity: 'error',
    });
  }

  return (
    <Stack marginTop="2em" alignItems="center">
      <Box
        minWidth="300px"
        width={{ xs: '100%', sm: '600px', md: '800px' }}
        height="70vh"
        overflow="scroll"
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="primary.contrastText"
        borderRadius="12px"
      >
        {isLoading && (
          <Stack marginTop="2em" alignItems="center" spacing={3} p={3}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index} textAlign="center" width="100%">
                <Skeleton
                  animation="wave"
                  sx={{
                    padding: '4em',
                    borderRadius: (theme) => theme.shape.borderRadius,
                  }}
                  variant="rounded"
                />
              </Box>
            ))}
          </Stack>
        )}

        {(!taskContent || taskContent.length === 0) && (
          <Stack
            alignItems="center"
            gap={1}
            marginY="200px"
            sx={{ opacity: 0.7 }}
          >
            <EventBusyOutlinedIcon sx={{ fontSize: '40px' }} />
            <Typography
              width="400px"
              maxLength={84}
              textAlign="center"
              color="primary.contrastText"
              text="It looks like there are no tasks here. Feel free to add something to get started!"
            />
          </Stack>
        )}

        <Stack spacing={3} p={3}>
          {taskContent?.map((task) => <Task key={task.id} {...task} />)}
        </Stack>
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </Stack>
  );
};
