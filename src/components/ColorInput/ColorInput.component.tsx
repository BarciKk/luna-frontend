import { MuiColorInput } from 'mui-color-input';
import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from 'components/ErrorMessage';
import { getErrorMessage } from 'utils/getErrorMessage';

type ColorInputProps = {
  name: string;
  value: string;
  onColorChange: (color: string) => void;
};

export const ColorInput: FC<ColorInputProps> = ({
  name,
  value,
  onColorChange,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleChangeColor = (updatedColor: string) => {
    onColorChange(updatedColor);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiColorInput
            {...props}
            {...field}
            id={name}
            error={!!errors[name]}
            name={name}
            value={value}
            onChange={handleChangeColor}
            variant="outlined"
            format="hex"
            fullWidth
          />
        )}
      />
      <ErrorMessage message={getErrorMessage(errors[name])} />
    </>
  );
};
