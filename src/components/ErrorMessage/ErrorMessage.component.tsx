export const CustomErrorMessage = ({
  message,
}: {
  message: string | undefined | null;
}) => {
  return message ? <text>{message}</text> : null;
};
