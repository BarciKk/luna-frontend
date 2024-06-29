import { Box } from '@mui/material';
import { Timeline } from 'components/Timeline/Timeline.component';

export const Today = () => {
  /* 
  -create custom button for creating new habbit or task ✅
  - you should create some kinda modal provider to handle adding new stuff
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
