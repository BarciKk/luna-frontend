import {
  Box,
  Image,
  Stack,
  Button,
  TextInput,
  PasswordInput,
  Title,
  Anchor,
  SimpleGrid,
  Group,
} from "@mantine/core";
import classes from "./LoginComponent.module.css";
import { FaLock, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiArrowRightCircle } from "react-icons/hi2";

export const Login = () => {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} p="xs" mt="lg">
      <Image
        radius="sm"
        my="auto"
        alt="guy showing activities"
        visibleFrom="md"
        src="/assets/images/activity_tracker.png"
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        mr="auto"
      />
      <Box w="100%" className={classes.box}>
        <Image
          mx="auto"
          mt="sm"
          radius="sm"
          alt="logo"
          src={null}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          maw={200}
          pb="xl"
        />
        <Stack align="center">
          {/*this is form but im not wrapping this for now cuz getting error"*/}
          <Stack w="90%" gap="sm">
            <TextInput
              variant="unstyled"
              className={classes.input}
              type="email"
              placeholder=" Username or e-mail"
              leftSection={<FaUser />}
            />
            <PasswordInput
              className={classes.input}
              variant="unstyled"
              placeholder=" Password"
              leftSection={<FaLock />}
            />
            <Group ml="auto">
              <Link to="/accounts/password/reset">
                <Anchor c="headingColors.0" fz="sm">
                  Forgot password?
                </Anchor>
              </Link>
            </Group>
          </Stack>
          <Button
            mt="md"
            size="md"
            w="80%"
            my="auto"
            type="submit"
            bg="headingColors.2"
            className={classes.button}
            rightSection={
              <HiArrowRightCircle size="1.25em" style={{ marginTop: "2px" }} />
            }
          >
            Login
          </Button>
          <Title order={6} c="fontColors.4" ta="center" mt="md">
            You don't have account?{" "}
            <Link to="/accounts/register">
              <Anchor className={classes.Anchor} c="headingColors.0">
                Register right there!
              </Anchor>
            </Link>
          </Title>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};
