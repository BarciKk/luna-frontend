import { Stack, Box, Divider, IconButton } from '@mui/material';
import { Typography } from 'components/Typography';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
import { useThemeContext } from 'providers/ThemeProvider';
import { StyledSwitch } from 'styles/CustomSwitch';
import { motion } from 'framer-motion';
import { colorOptions } from 'constants/user.constants';

export const Customize = () => {
  const { changePrimaryColor, toggleMode, mode } = useThemeContext();
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
          text="Customize"
        />
        <Divider sx={{ marginY: '10px' }} />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            text="Theme"
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
            text="Free accent colors"
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
        <Stack alignItems="center" gap={1} marginY="60px" sx={{ opacity: 0.7 }}>
          <SentimentVeryDissatisfiedRoundedIcon sx={{ fontSize: '40px' }} />
          <Typography
            color="primary.contrastText"
            text="More customization options will be updated shortly."
            maxLength={64}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
