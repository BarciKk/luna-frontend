import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { currentDate, maxDate } from 'constants/date.constants';

export const DatePicker = ({
  value,
  onDateChange,
}: {
  value: Date;
  onDateChange: (newDate: Date | null) => void;
}) => {
  return (
    <MuiDatePicker
      value={value}
      onChange={onDateChange}
      sx={{ width: '100%' }}
      defaultValue={currentDate}
      maxDate={maxDate}
    />
  );
};
//idea for now is that user canoot add task futher than 1month from now
