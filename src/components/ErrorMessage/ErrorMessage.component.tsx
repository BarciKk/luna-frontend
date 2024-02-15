import { FC } from "react";
import { Text } from "@mantine/core";
import { errorColor } from "../../styles/colors";
import { CustomErrorMessageProps } from "./error.message.types";

export const CustomErrorMessage: FC<CustomErrorMessageProps> = ({
  message,
  ...props
}) => {
  return message ? (
    <Text h="50%" fz="sm" c={errorColor} {...props}>
      {message}
    </Text>
  ) : null;
};
