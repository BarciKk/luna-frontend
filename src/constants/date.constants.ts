import { add, format } from 'date-fns';

export const currentDate = new Date();
export const maxDate = add(currentDate, { months: 1 });
export const currentDayNumber = format(currentDate, 'dd');
