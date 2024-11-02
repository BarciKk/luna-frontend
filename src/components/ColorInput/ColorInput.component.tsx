import { MuiColorInput } from 'mui-color-input';
import { FC, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from 'components/ErrorMessage';
import { getErrorMessage } from 'utils/getErrorMessage';

type ColorInputProps = {
  name: string;
  hex?: string;
  onColorChange: (color: string) => void;
};

export const ColorInput: FC<ColorInputProps> = ({
  name,
  onColorChange,
  hex = '#1b75de',
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [color, setColor] = useState<string>(hex);

  const handleChangeColor = (updatedColor: string) => {
    setColor(updatedColor);
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
            value={color}
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
