import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from '@mui/material';
import { ErrorMessage } from 'components/ErrorMessage';
import { Typography } from 'components/Typography';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { getErrorMessage } from 'utils/getErrorMessage';

// Define prop types for the custom checkbox
type CustomCheckboxProps = CheckboxProps & {
  name: string;
  label: string;
};

// Main Checkbox component definition
export const Checkbox: FC<CustomCheckboxProps> = ({
  name,
  label,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <FormControlLabel
              control={
                <MuiCheckBox
                  {...field}
                  {...props}
                  checked={field.value || false}
                  sx={{
                    color: errors[name] ? 'error.main' : 'inherit',
                    alignItems: 'center',
                  }}
                />
              }
              label={<Typography text={label} fontSize="14px" maxLength={32} />}
            />
            <ErrorMessage
              message={getErrorMessage(errors[name])}
              style={{ fontSize: 14, marginLeft: '8px' }}
            />
          </>
        )}
      />
    </>
  );
};
