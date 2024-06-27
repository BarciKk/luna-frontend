import { Box } from '@mui/material';
import { Timeline } from 'components/Timeline/Timeline.component';

export const Today = () => {
  // enum TaskPriority {
  //   Default = 1,
  //   Low = 2,
  //   Medium = 3,
  //   High = 4,
  //   Highest = 5,
  // }

  // const taskPriorityIcons: Record<TaskPriority, React.ReactNode> = {
  //   [TaskPriority.Highest]: '👹',
  //   [TaskPriority.High]: '🔥',
  //   [TaskPriority.Medium]: '⚡',
  //   [TaskPriority.Low]: '💡',
  //   [TaskPriority.Default]: '🔅',
  // };
  // type Task = {
  //   id: string;
  //   creatorId: Pick<User, '_id'>;
  //   title: string;
  //   description?: string;
  //   completed?: boolean;
  //   created: Date; //should be the same as selected date
  //   priority: TaskPriority;
  //   recurring?: boolean;
  // };

  /* 
  -create custom button for creating new habbit or task
  -create some kinda nice looking form for creating the task  base on the type 
  -go to the backend to handle the adding new task ,
  -backend should also return the tasks array based on the creatorId and date 
  -create own task component and design how he should look like
  -render the tasks list on the separe component based on the selectedDate prop
  */
  return (
    <Box>
      <Timeline />
    </Box>
  );
};
