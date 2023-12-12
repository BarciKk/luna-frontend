import {
  Box,
  Image,
  Stack,
  Button,
  TextInput,
  PasswordInput,
  Title,
  SimpleGrid,
  Group,
} from "@mantine/core";
import classes from "./LoginComponent.module.css";
import { FaLock, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiArrowRightCircle } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginValues } from "./types";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginValues>();

  const onSubmit: SubmitHandler<loginValues> = (data) => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
    reset();
  };

  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} p="xs" mt="lg">
      <Image
        my="auto"
        radius="sm"
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack align="center">
            <Stack w="90%" gap="sm">
              <TextInput
                ta="center"
                error={errors.email?.message}
                className={classes.input}
                {...register("email", {
                  required: "Login  cannot be empty",
                })}
                type=""
                placeholder=" Username or e-mail"
                leftSection={<FaUser />}
              />
              <PasswordInput
                {...register("password", {
                  required: "Password cannot be empty!",
                  minLength: {
                    value: 8,
                    message: "Password length must be at least 8 characters.",
                  },
                })}
                ta="center"
                error={errors.password?.message}
                className={classes.input}
                placeholder=" Password"
                leftSection={<FaLock />}
              />
              <Group ml="auto">
                <Link
                  to="/accounts/password/reset"
                  style={{ color: "#efa700", fontSize: ".75em" }}
                >
                  Forgot password?
                </Link>
              </Group>
            </Stack>
            <Button
              mt="md"
              size="md"
              w="80%"
              type="submit"
              bg="headingColors.2"
              className={classes.button}
              rightSection={
                <HiArrowRightCircle
                  size="1.25em"
                  style={{ marginTop: "2px" }}
                />
              }
            >
              Login
            </Button>

            <Title order={6} c="fontColors.4" ta="center" mt="md">
              You don't have account?{" "}
              <Link to="/accounts/register" style={{ color: "#efa700" }}>
                Register right there!
              </Link>
            </Title>
          </Stack>
        </form>
      </Box>
    </SimpleGrid>
  );
};
