import { FC } from "react";
import { Box, Paper, Stack } from '@mantine/core';
import classes from './Layout.module.css';
import { AuthLayoutProps } from "./layoutComponent.types";

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
    <Box className={classes.box}>
      <Stack h="100%" className={classes.stack} justify="center" align="center">
        <Paper
          w="100%"
          mih={600}
          mah={650}
          shadow="xl"
          withBorder
          className={classes.paper}
        >
          {children}
        </Paper>
      </Stack>
    </Box>
);
