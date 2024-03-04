import { Box, Stack } from '@mantine/core';
import { Link } from '../../components/Link';
import { Outlet } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { useMediaQuery } from '@mantine/hooks';
import { MdClose } from 'react-icons/md';

export const ResetPasswordWrapper = () => {
  const matches = useMediaQuery('(max-width:660px)');

  return (
    <Stack
      mt="sm"
      gap="lg"
      align="center"
      ta="center"
      fz={matches ? 'sm' : 'md'}
    >
      <Link
        ml="auto"
        p="0px"
        text={''}
        c="black"
        size="xl"
        h="10%"
        variant="white"
        leftSection={<MdClose />}
        to={UnauthorizedRoutes.login}
      />
      <Box w="80%" mih="20rem">
        <Outlet />
      </Box>
    </Stack>
  );
};
