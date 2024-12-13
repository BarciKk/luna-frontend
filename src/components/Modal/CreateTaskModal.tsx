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
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from 'validation/auth/Task.validation';
import { createTask } from 'api/task';
import { useMutation } from 'react-query';
import { useSnackbar, useUser } from 'hooks';
import { CreateTaskType, Task } from 'types/Task.types';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';

export const CreateTaskModal = () => {
  const { handleCloseModal } = useModal();
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [priority, setPriority] = useState(1);
  const { showSnackbar, snackbarProps } = useSnackbar();

  const methods = useForm<Task>({
    resolver: zodResolver(createTaskSchema),
    mode: 'onBlur',
  });

  const { handleSubmit, setValue, watch, reset } = methods;

  const handleIconSelect = (iconId: string) => {
    setValue('icon', iconId);
  };
  const selectedIcon = watch('icon');
  const { mutate, isLoading } = useMutation(
    (values: CreateTaskType) =>
      createTask({
        name: values.name,
        icon: selectedIcon ?? 'star',
        date: selectedDate.toISOString(),
        priority: priority,
        userId: user?.id ?? '',
        description: values.description ?? '',
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: 'Single task created successfully!',
          duration: 3000,
          severity: 'success',
        });
        reset();
      },
      onError: (error: ErrorInfo) => {
        if (error.response) {
          showSnackbar({
            message: error.response.data.message,
            duration: 3000,
            severity: 'error',
          });
        }
      },
    },
  );

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      setSelectedDate(newDate);
    }
  };
  const onSubmit: SubmitHandler<CreateTaskType> = async (data) => {
    try {
      mutate(data);
    } catch (err) {
      console.error('Something went wrong!');
    }
  };

  const handleIncrement = () => {
    setPriority((prevValue) => Math.min(prevValue + 1, 5));
  };

  const handleDecrement = () => {
    setPriority((prevValue) => Math.max(prevValue - 1, 1));
  };
  return (
    <FormProvider {...methods}>
      <Box p={3} component="form" onSubmit={handleSubmit(onSubmit)}>
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
            onIconSelect={handleIconSelect}
          />
          <DatePicker value={selectedDate} onDateChange={handleDateChange} />
          <Priority
            value={priority}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <TextArea name="description" label="Description" rows={4} />
          <Box display="flex" gap="2em">
            <Button
              text="CANCEL"
              onClick={handleCloseModal}
              color="info"
              fullWidth
            />
            <Button text="ADD" isLoading={isLoading} fullWidth />
          </Box>
        </DialogContent>
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </FormProvider>
  );
};
