export function formatDate(date: Date) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayName = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const fullDate = `${dayName}, ${dayOfMonth}, ${year}`;

  return { fullDate, dayName };
}
