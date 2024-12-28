import { Box, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Button } from 'components/Button';
import { DatePicker } from 'components/DatePicker/DatePicker.component';
import { IconPicker } from 'components/IconPicker';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Input } from 'components/Input';
import { TextArea } from 'components/TextArea';
import { Typography } from 'components/Typography';
import { BASE_CATEGORIES, CUSTOM_ICON_MAP } from 'constants/category.constants';
import { currentDate } from 'constants/date.constants';
import { Priority } from 'components/Priority/Priority.component';
import { useModal } from 'providers/ModalProvider';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from 'validation/auth/Task.validation';
import { createTask } from 'api/task';
import { useMutation, useQueryClient } from 'react-query';
import { useQueryString, useSnackbar, useUser } from 'hooks';
import { CreateTaskType, Task } from 'types/Task.types';
import { CustomSnackbar } from 'components/Snackbar';
import { ErrorInfo } from 'types/Shared.types';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'components/Checkbox';
import { QueryKeys } from 'enums/QueryKeys.enums';
import { Star } from '@mui/icons-material';

export const CreateTaskModal = () => {
  const { user } = useUser();
  const { t } = useTranslation();
  const { handleCloseModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [priority, setPriority] = useState(1);
  const [recurringTask, setRecurringTask] = useState(false);
  const { showSnackbar, snackbarProps } = useSnackbar();
  const queryClient = useQueryClient();
  const { getQueryString } = useQueryString();

  const tasksData = queryClient.getQueryData<Task[]>(['tasks', 'task']);
  const taskId = getQueryString('id');

  const task = tasksData?.find((task) => task.id === taskId);

  const handleRecurringTask = () => {
    setRecurringTask(!recurringTask);
  };

  const methods = useForm<Task>({
    resolver: zodResolver(createTaskSchema),
    mode: 'onBlur',
    defaultValues: {
      name: taskId ? task?.name : '',
      priority: taskId ? task?.priority : 1,
      description: taskId ? task?.description : '',
    },
  });

  const { handleSubmit, setValue, watch, reset } = methods;

  const handleIconSelect = (iconId: string) => {
    setValue('iconName', iconId);
  };
  const selectedIcon = watch('iconName');

  const { mutate, isLoading } = useMutation(
    (values: CreateTaskType) =>
      createTask({
        name: values.name,
        iconName: selectedIcon ?? 'Highlights',
        date: selectedDate.toISOString(),
        priority: priority,
        userId: user?.id ?? '',
        description: values.description,
        recurringTask: recurringTask,
      }),
    {
      onSuccess: () => {
        showSnackbar({
          message: t('dashboard.createTaskMessage'),
          duration: 3000,
          severity: 'success',
        });

        reset();
        queryClient.invalidateQueries(QueryKeys.tasks);
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

  const processedCategories =
    user?.categories?.map((category) => ({
      ...category,
      icon: CUSTOM_ICON_MAP[category.icon as keyof typeof CUSTOM_ICON_MAP] || (
        <Star />
      ),
    })) ?? [];

  const CATEGORIES_CONTENT = [...processedCategories, ...BASE_CATEGORIES];
  return (
    <FormProvider {...methods}>
      <Box
        p={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ overflow: 'hidden' }}
      >
        <DialogTitle
          id="create-task-dialog-title"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={0}
          padding={0}
        >
          <Typography
            text={t('dashboard.newTask')}
            fontSize="22px"
            fontWeight="bolder"
            maxLength={12}
          />
        </DialogTitle>
        <DialogContent dividers sx={{ p: 3 }}>
          <Input name="name" label={t('dashboard.task')} />
          <IconPicker
            name={selectedIcon ?? 'Highlights'}
            iconData={CATEGORIES_CONTENT}
            onIconSelect={handleIconSelect}
          />
          <DatePicker value={selectedDate} onDateChange={handleDateChange} />
          <Priority
            value={taskId ? task?.priority ?? 1 : priority}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Box
            p={1}
            display="flex"
            margin="dense"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="6px"
            sx={{
              cursor: 'pointer',
              border: '1px solid #c9c7c7',
              backgroundColor: 'primary.contrastText',
              ':hover': { border: '1px solid #c9c7c7' },
            }}
          >
            <Box display="flex" alignItems="center" color="red">
              <IconButton color="primary">
                <EventNoteIcon />
              </IconButton>
              <Box>
                <Typography text={t('dashboard.pending')} />
                <Typography
                  color="text.secondary"
                  fontSize={12}
                  text={t('dashboard.pendingTaskMessage')}
                  maxLength={42}
                  display="block"
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                name={'recurringTask'}
                checked={recurringTask}
                onClick={handleRecurringTask}
                label={''}
              />
            </Box>
          </Box>
          <TextArea
            name="description"
            label={t('shared.description')}
            rows={3}
          />

          <Box display="flex" gap="2em">
            <Button
              text={t('shared.cancel')}
              onClick={handleCloseModal}
              color="info"
              fullWidth
            />
            <Button text={t('shared.add')} isLoading={isLoading} fullWidth />
          </Box>
        </DialogContent>
      </Box>
      <CustomSnackbar {...snackbarProps} />
    </FormProvider>
  );
};
