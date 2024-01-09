import {
  Button,
  Image,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { FaLock, FaUser } from "react-icons/fa6";
import { MdAlternateEmail, MdRepeat } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./RegisterComponent.module.css";
import { UnauthorizedRoutes } from "../../enums/Auth/routes.enums";
import { useForm } from "react-hook-form";
import { RegisterValues } from "./register.component.types";
export const Register = () => {
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (data: RegisterValues) => {};

  return (
    <Stack align="center" h="100%" gap="sm">
      <Image
        mt="xs"
        radius="sm"
        alt="logo"
        src={null}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        maw={200}
      />
      <Text w="60%" c="fontColors.1" fz="md" ta="center" lineClamp={3} m="sm">
        Level up your fitness journey! Sign up now to track workouts, conquer
        challenges, and crush goals with your exercise crew. Let's sweat
        together!
      </Text>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="sm" className={classes.stack}>
          <TextInput
            {...register("email", {
              required: "You must enter the email",
            })}
            error={errors.email?.message}
            name="email"
            className={classes.input}
            placeholder="E-mail"
            leftSection={<MdAlternateEmail size="1.25em" />}
          />
          <TextInput
            {...register("username", {
              required: "Username is required.",
            })}
            error={errors.username?.message}
            placeholder="Username"
            name="username"
            className={classes.input}
            leftSection={<FaUser />}
          />
          <PasswordInput
            {...register("password", {
              required: "Password is required.",
            })}
            placeholder="Password"
            name="password"
            className={classes.input}
            leftSection={<FaLock />}
          />
          <PasswordInput
            {...register("repeatPassword", {
              required: "Password is required.",
            })}
            placeholder="Confirm the password"
            className={classes.input}
            name="repeatPassword"
            leftSection={<MdRepeat size="1.25em" />}
          />
          <Text ta="center" fz="sm" mt="sm" c="fontColors.1">
            {" "}
            By signing up, you agree to our{" "}
            <Link
              to={UnauthorizedRoutes.termsAndConditions}
              style={{ color: "#efa700" }}
            >
              Terms & Conditions
            </Link>
          </Text>
          <SimpleGrid
            mt="sm"
            cols={{ base: 1, xs: 2 }}
            spacing="none"
            className={classes.simpleGrid}
          >
            <Link
              to={UnauthorizedRoutes.login}
              style={{
                color: "#1f1f1f",
              }}
            >
              <Text
                w="fit-content"
                mt="xs"
                ml="lg"
                fz="sm"
                className={classes.text}
                lineClamp={1}
              >
                Have an account? Login
              </Text>
            </Link>
            <Button
              size="md"
              mb="sm"
              ml="auto"
              w="70%"
              bg="headingColors.2"
              className={classes.button}
            >
              Sign up
            </Button>
          </SimpleGrid>
        </Stack>
      </form>
    </Stack>
  );
};
