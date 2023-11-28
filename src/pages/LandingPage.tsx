import {
  Box,
  Paper,
  Stack,
  Image,
  TextInput,
  Button,
  Title,
  Anchor,
} from "@mantine/core";

export const LandingPage = () => {
  return (
    <Box className="image-background">
      <Stack h="100%" p="xs" justify="center" align="center">
        <Paper w="100%" mih={650} mah={700} shadow="xl" withBorder>
          <Box w="100%">
            <Image
              mx="auto"
              mt="sm"
              radius="sm"
              src={null}
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              w={200}
              pb="xl"
            />
            <Stack align="center">
              {/*this is form but im not wrapping this for now cuz getting error"*/}
              <Stack w="90%" gap="sm">
                <TextInput type="text" placeholder="User name" />
                <TextInput type="email" placeholder="Email" />
                <TextInput type="password" placeholder="Password" />
              </Stack>
              <Button
                mt="lg"
                size="md"
                w="80%"
                type="submit"
                bg="headingColors.2"
              >
                Login
              </Button>
              <Title order={6} c="fontColors.2" ta="center" mt="md">
                You don't have account?{" "}
                <Anchor c="headingColors.0">Register right there!</Anchor>
              </Title>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};
