import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from '@mui/material';
import { ErrorMessage } from 'components/ErrorMessage';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { getErrorMessage } from 'utils/getErrorMessage';

type CustomCheckboxProps = CheckboxProps & {
  name: string;
  label: string;
};

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
                    color: errors[name] ? 'error.main' : 'none',
                  }}
                />
              }
              label={label}
            />
            <ErrorMessage message={getErrorMessage(errors[name])} />
          </>
        )}
      />
    </>
  );
};
// my man test your whole code because testing is dark magic for u
