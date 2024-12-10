import { FC, useState } from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
  TextFieldProps,
  Box,
} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ErrorMessage } from 'components/ErrorMessage';
import { getErrorMessage } from 'utils/getErrorMessage';

type CustomTextFieldProps = TextFieldProps & {
  name: string;
};

export const Input: FC<CustomTextFieldProps> = ({ name, type, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              {...props}
              id={name}
              type={type === 'password' && showPassword ? 'text' : type}
              value={field.value || ''}
              error={!!errors[name]}
              variant="outlined"
              InputLabelProps={{
                color: 'primary',
              }}
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
