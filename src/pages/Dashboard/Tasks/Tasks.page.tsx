import { Box, Stack } from '@mui/material';
import { getAllTasks } from 'api/task';
import { CategoryIcon } from 'components/CategoryIcon';
import { Typography } from 'components/Typography';
import { priorityColors } from 'constants/task.constants';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { useUser } from 'hooks';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { TaskProps } from 'types/Task.types';

const Task: FC<TaskProps> = ({
  id,
  name,
  date,
  iconName,
  priority,
  description,
}) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <Box
      id={id}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <CategoryIcon
          name={iconName}
          icon={iconName}
          color={priorityColors[priority]}
          withoutLabel
        />
        <Box flex={1}>
          <Typography
            fontWeight="bolder"
            text={name}
            fontSize={18}
            display="block"
          />
          <Typography color="text.primary" text={formattedDate} />

          {description && (
            <Box
              bgcolor="gray"
              width="fit-content"
              p="4px"
              borderRadius="8px"
              display="flex"
              alignItems="center"
            >
              <Typography
                display="block"
                fontSize={10}
                color="primary.contrastText"
                text={description ?? ''}
              />
            </Box>
          )}
        </Box>

        <Stack
          direction="column"
          spacing={1}
          alignItems="flex-end"
          bgcolor="red"
        ></Stack>
      </Stack>
    </Box>
  );
};

export const Tasks = () => {
  const { user } = useUser();

  const { data, isLoading } = useQuery(
    [QueryKeys.tasks, 'dupa'],
    () => getAllTasks(user?.id),
    {
      staleTime: 0,
      enabled: !!user,
    },
  );
  if (isLoading) {
    return <Typography text="Loading tasks..." />;
  }
  console.log(data);
  return (
    <Stack marginTop="2em" alignItems="center">
      <Box
        minWidth="300px"
        width={{ xs: '100%', sm: '800px', md: '1000px' }}
        height="70vh"
        overflow="scroll"
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="white"
        borderRadius="12px"
      >
        {!data ||
          (data.length === 0 && (
            <Typography textAlign="center" text="No tasks found." />
          ))}
        <Stack spacing={3} p={3}>
          {data?.map((task) => <Task key={task.id} {...task} />)}
        </Stack>
      </Box>
    </Stack>
  );
};
