import {
  Image,
  Box,
  Title,
  SimpleGrid,
  Stack,
  Button,
  Text,
} from "@mantine/core";
import classes from "./Page404.module.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const Page404 = () => (
  <Stack h="100dvh" align="center" pt="8em" className={classes.Stack}>
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing="none"
      className={classes.SimpleGrid}
    >
      <Image
        src="./assets/images/error_page_image.png"
        maw="550px"
        visibleFrom="md"
      />
      <Box mt="7em">
        <Title fw="300" order={4} className={classes.title}>
          ERROR 404
        </Title>
        <Title mt="sm" mb="sm" order={1} fz="48" fw="500">
          Oops!
        </Title>
        <Box w="70%">
          <Text miw={180} fz={32} fw="bolder">
            WE COULDN'T FIND THE PAGE YOU'RE LOOKING FOR.
          </Text>
          <Link to="/">
            <Button
              mt="sm"
              ml="50%"
              w="fit-content"
              variant="transparent"
              p="none"
              size="lg"
              c="headingColors.1"
              rightSection={<FaArrowRightLong style={{ marginTop: "2px" }} />}
            >
              Go home
            </Button>
          </Link>
        </Box>
      </Box>
    </SimpleGrid>
  </Stack>
);
