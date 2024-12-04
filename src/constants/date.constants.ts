import { add } from 'date-fns';

export const currentDate = new Date();
export const maxDate = add(currentDate, { months: 1 });
