import {
  Image,
  Box,
  Title,
  SimpleGrid,
  Stack,
  Button,
  Text,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import classes from './Page404.module.css';
import { useTranslation } from 'react-i18next';

export const Page404 = () => {
  const { t } = useTranslation();
  return (
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
            {t('auth.error404')}
          </Title>
          <Title mt="sm" mb="sm" order={1} fz="48" fw="500">
            {t('auth.page404ops')}
          </Title>
          <Box w="70%">
            <Text miw={180} fz={32} fw="bolder">
              {t('auth.page404Message')}
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
                rightSection={<FaArrowRightLong style={{ marginTop: '2px' }} />}
              >
                {t('auth.home')}
              </Button>
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};
