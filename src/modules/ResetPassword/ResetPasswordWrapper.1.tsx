import { Box, Group, Stack, Stepper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from '../../components/Link';
import { Outlet } from 'react-router-dom';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';
import { useMediaQuery } from '@mantine/hooks';
import { MdClose } from 'react-icons/md';

export const ResetPasswordWrapper = () => {
  const isInLocalStorage =
    Number(localStorage.getItem('resetPasswordStep')) || 1;
  const [active, setActive] = useState(isInLocalStorage);
  const matches = useMediaQuery('(max-width:660px)');

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const previousStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    localStorage.setItem('resetPasswordStep', String(active));
  }, [active]);
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
      <Box w="80%" mih="20rem" bg="red">
        <Outlet />
      </Box>
      <Stack mx="auto">
        <Stepper
          allowNextStepsSelect={false}
          active={active - 1}
          onStepClick={setActive}
          size={matches ? 'sm' : 'md'}
        >
          <Stepper.Step label="First step" description="Enter the email">
            Step 1 content: Enter the email
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Enter the pin from the email"
          >
            Step 2 content: Enter the pin from the email
          </Stepper.Step>
          <Stepper.Step label="Last Step" description="Create new Password">
            Step 3 content: Enter the new Password
          </Stepper.Step>
          <Stepper.Completed>
            All good ziomal now u can login with your new credentials
          </Stepper.Completed>
        </Stepper>
      </Stack>
      <Group mb="sm">
        <Link
          text="Prev step"
          disabled={active === 1}
          to={`${UnauthorizedRoutes.resetPassword}/step${active - 1}`}
          onClick={previousStep}
        />
        <Link
          text="Next step"
          to={`${UnauthorizedRoutes.resetPassword}/step${active + 1}`}
          disabled={active === 3}
          onClick={nextStep}
        />
      </Group>
    </Stack>
  );
};
