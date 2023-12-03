import {
  Button,
  Image,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./RegisterComponent.module.css";
import { FaLock, FaUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { Link } from "react-router-dom";

export const Register = () => {
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
      <Stack w="50%" gap="sm" className={classes.stack}>
        <TextInput
          placeholder="E-mail"
          className={classes.input}
          leftSection={<MdAlternateEmail size="1.25em" />}
        />
        <TextInput
          placeholder="Username"
          className={classes.input}
          leftSection={<FaUser />}
        />
        <PasswordInput
          placeholder="Password"
          className={classes.input}
          leftSection={<FaLock />}
        />
        <PasswordInput
          placeholder="Confirm the password"
          className={classes.input}
          leftSection={<MdRepeat size="1.25em" />}
        />
        <Text ta="center" fz="sm" mt="sm" c="fontColors.1">
          {" "}
          By signing up, you agree to our{" "}
          <Link to="/TermsAndConditions" style={{ color: "#efa700" }}>
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
            to="/"
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
    </Stack>
  );
};
