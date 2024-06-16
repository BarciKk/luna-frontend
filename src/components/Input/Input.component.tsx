import { FC, useState } from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
  TextFieldProps,
  Box,
} from '@mui/material';
import {
  useFormContext,
  Controller,
  FieldErrorsImpl,
  FieldError,
  Merge,
} from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ErrorMessage } from 'components/ErrorMessage';

type CustomTextFieldProps = TextFieldProps & {
  name: string;
};

const getErrorMessage = (
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
): string => {
  if (error && typeof error.message === 'string') {
    return error.message || '';
  }
  return '';
};
export const Input: FC<CustomTextFieldProps> = ({
  name,
  type,
  onChange,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ mb: 2 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              {...props}
              type={type === 'password' && showPassword ? 'text' : type}
              value={field.value || ''}
              error={!!errors[name]}
              variant="outlined"
              fullWidth
              InputProps={{
                ...(type === 'password' && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((visible) => !visible)}
                        edge="end"
                        size="large"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }),
              }}
            />
            <ErrorMessage message={getErrorMessage(errors[name])} />
          </>
        )}
      />
    </Box>
  );
};
