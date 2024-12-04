import { Box, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'components/Button';
import { DatePicker } from 'components/DatePicker/DatePicker.component';
import { IconPicker } from 'components/IconPicker';
import { Input } from 'components/Input';
import { TextArea } from 'components/TextArea';
import { Typography } from 'components/Typography';
import { CONCATED_CATEGORIES } from 'constants/category.constants';
import { currentDate } from 'constants/date.constants';
import { Priority } from 'components/Priority/Priority.component';
import { useModal } from 'providers/ModalProvider';
import { useState } from 'react';

export const CreateTaskModal = () => {
  const { handleCloseModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((prevValue) => Math.min(prevValue + 1, 5));
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 1));
  };

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
  };

  return (
    <Box p={1}>
      <DialogTitle
        id="create-task-dialog-title"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={0}
        padding={0}
      >
        <Typography
          text="New task"
          fontSize="22px"
          fontWeight="bolder"
          maxLength={12}
        />
      </DialogTitle>
      <DialogContent dividers sx={{ p: 3 }}>
        <Input name="name" label="Task" />
        <IconPicker
          name="create-task-icons"
          iconData={CONCATED_CATEGORIES}
          onIconSelect={(iconId) => iconId}
        />
        <DatePicker value={selectedDate} onDateChange={handleDateChange} />
        <Priority
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <TextArea name="description" label="Description" rows={4} />
        <Box display="flex" gap="2em">
          <Button
            text="CANCEL"
            onClick={handleCloseModal}
            color="inherit"
            fullWidth
          />
          <Button text="ADD" fullWidth />
        </Box>
      </DialogContent>
    </Box>
  );
};
