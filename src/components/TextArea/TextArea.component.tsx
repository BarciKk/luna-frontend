import { FC } from 'react';
import { TextField, Box, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from 'components/ErrorMessage';
import { getErrorMessage } from 'utils/getErrorMessage';

type CustomTextAreaProps = TextFieldProps & {
  name: string;
};

export const TextArea: FC<CustomTextAreaProps> = ({ name, rows, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ mb: 1 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              {...props}
              id={name}
              value={field.value || ''}
              error={!!errors[name]}
              variant="outlined"
              multiline
              rows={rows}
              fullWidth
            />
            <ErrorMessage message={getErrorMessage(errors[name])} />
          </>
        )}
      />
    </Box>
  );
};
