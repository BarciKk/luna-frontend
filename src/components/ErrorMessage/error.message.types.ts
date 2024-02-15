import { TextProps } from "@mantine/core";

export interface CustomErrorMessageProps extends TextProps {
  message: string | undefined | null;
}
