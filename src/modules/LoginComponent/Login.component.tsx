import {
  Box,
  Image,
  Text,
  Stack,
  Button,
  TextInput,
  PasswordInput,
  Title,
  SimpleGrid,
  Group,
  Loader,
} from "@mantine/core";
import classes from "./LoginComponent.module.css";
import { FaLock, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRightCircle } from "react-icons/hi2";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginResponse, loginValues } from "./login.component.types";
import { useMutation } from "react-query";
import { login } from "../../api/auth";
import { AxiosError } from "axios";
import { cookieKeys } from "../../enums/Auth/cookiesKeys.enums";
import { errorColor } from "../../styles/colors";
import Cookies from "universal-cookie";
import { AuthorizedRoutes } from "../../enums/Auth/routes.enums";

export const Login = () => {
  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginValues>();

  const { mutate, isLoading, isError } = useMutation(
    (values: loginValues) => login(values),
    {
      onSuccess: (response) => {
        const {
          data: { accessToken, user },
        } = response;

        if (accessToken && user) {
          cookies.set(cookieKeys.user, user);
          cookies.set(cookieKeys.jwt, accessToken, { maxAge: 3600 });
          navigate("/dashboard");
        }
      },

      onError: (error: AxiosError<loginResponse>) => {
        console.error("err", error);
      },
    }
  );

  const onSubmit: SubmitHandler<loginValues> = async (data) => {
    try {
      mutate(data);
      reset();
    } catch (err) {
      console.error("error", err);
    }
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
                className={classes.input}
                {...register("username", {
                  required: "Login input cannot be empty",
                })}
                type="text"
                error={errors.username?.message}
                placeholder=" Username "
                leftSection={<FaUser />}
              />
              <PasswordInput
                {...register("password", {
                  required: "Password input cannot be empty",
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters.",
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
                  to={AuthorizedRoutes.resetPassword}
                  style={{ color: "#efa700", fontSize: ".75em" }}
                >
                  Forgot password?
                </Link>
              </Group>
            </Stack>
            <Text fz="sm" ta="center" c={errorColor}>
              {isError ? "Login or password are incorrect!" : ""}
            </Text>
            <Button
              mt="md"
              size="md"
              w="80%"
              type="submit"
              bg="headingColors.2"
              className={classes.button}
              disabled={isLoading}
              rightSection={
                !isLoading ? (
                  <HiArrowRightCircle
                    size="1.25em"
                    style={{ marginTop: "2px" }}
                  />
                ) : null
              }
            >
              {isLoading ? <Loader color="white" /> : "Login"}
            </Button>

            <Title order={6} c="fontColors.4" ta="center" mt="md">
              You don't have account?{" "}
              <Link to={AuthorizedRoutes.register} style={{ color: "#efa700" }}>
                Register right there!
              </Link>
            </Title>
          </Stack>
        </form>
      </Box>
    </SimpleGrid>
  );
};
//better error handling
//work around the routes break into authorized and unauthorized
//clear routes take it to separe file idk
