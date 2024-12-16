import { Stack, Box, Divider, IconButton } from '@mui/material';
import { Typography } from 'components/Typography';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import { useThemeContext } from 'providers/ThemeProvider';
import { StyledSwitch } from 'styles/CustomSwitch';
import { motion } from 'framer-motion';
import { colorOptions } from 'constants/user.constants';
import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'react-i18next';

export const Customize = () => {
  const { t } = useTranslation();
  const { changePrimaryColor, toggleMode, mode, primaryColor } =
    useThemeContext();
  const handleColorChange = (color: string) => {
    changePrimaryColor(color);
  };

  return (
    <Stack marginTop="2em" justifyContent="center" alignItems="center">
      <Box
        minWidth="300px"
        width={{ xs: '80%', sm: '600px', md: '800px' }}
        sx={{ bgcolor: 'rgba(43, 43, 43, .65)' }}
        color="white"
        borderRadius="12px"
        p={3}
      >
        <Typography
          fontWeight="bolder"
          fontSize="18px"
          color="primary.contrastText"
          text={t('shared.customize')}
        />
        <Divider sx={{ marginY: '10px' }} />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            text={t('shared.theme')}
            color="primary.contrastText"
            fontWeight="bolder"
            fontSize="14px"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledSwitch onChange={toggleMode} checked={mode === 'dark'} />
          </motion.div>
        </Box>
        <Divider sx={{ marginY: '10px' }} />
        <Box
          mt="1em"
          display="flex"
          alignItems="center"
          gap="4px"
          justifyContent="space-between"
        >
          <Typography
            text={t('category.accentColor')}
            color="primary.contrastText"
            fontWeight="bolder"
            fontSize="14px"
          />
          <Box bgcolor="gray" padding="1em" borderRadius="8px">
            {colorOptions.map(({ name, color }) => (
              <IconButton
                key={name}
                sx={{
                  ':focus': {
                    outline: `2px solid ${color}`,
                  },
                  outline:
                    color === primaryColor ? `2px solid ${color}` : 'none',
                  transition: 'outline .6s ease-in-out',
                  padding: 0,
                  marginX: '10px',
                }}
                onClick={() => handleColorChange(color)}
              >
                <Brightness1RoundedIcon sx={{ color }} />
              </IconButton>
            ))}
          </Box>
        </Box>
        <Divider sx={{ marginY: '10px' }} />
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
            }}
          >
            <LockIcon sx={{ display: 'block', margin: '0 auto' }} />
            <Typography
              sx={{
                color: 'info.contrastText',
                textAlign: 'center',
                marginTop: '2px',
                fontWeight: 'bold',
              }}
              text={t('dashboard.premiumUserMessage')}
            />
          </Box>
          <Box sx={{ filter: 'blur(5px)', pointerEvents: 'none' }}>
            <Stack
              alignItems="center"
              gap={1}
              marginY="60px"
              sx={{ opacity: 0.7 }}
            >
              <SentimentVeryDissatisfiedRoundedIcon sx={{ fontSize: '40px' }} />
              <Typography
                color="primary.contrastText"
                text={t('dashboard.customizationOptionsMessage')}
                maxLength={64}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
