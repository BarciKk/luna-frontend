import Box from '@mui/material/Box';
import { LinearProgress, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'hooks';
import { cookieKeys } from 'enums/Auth/cookiesKeys.enums';
import { steps } from 'constants/welcomePage';
import { InfoBlock } from 'assets/infoBlock';
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch.component';
import { Button } from 'components/Button';
import { Seo } from 'components/Seo';
export const Welcome = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const { setCookie } = useCookies();

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setProgress((progress) => progress + 33.3);
      setCookie(cookieKeys.authorized, true);
    } else if (step === 3) {
      navigate('/dashboard');
    }
  };
  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
    setProgress((progress) => (progress === 0 ? progress : progress - 33.3));
    if (step === 0) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < steps.length - 1) {
        handleNext();
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <Box
      mt="6em"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <Seo title="Welcome" description="welcome page" />
      <InfoBlock
        img={steps[step].img}
        title={steps[step].title}
        description={steps[step].description}
      />

      {step === 3 && <ThemeSwitch />}
      <Stack
        mt={5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Button
          variant="text"
          text={step === 0 ? 'Skip' : 'Back'}
          onClick={handleBack}
        />
        <Box sx={{ flexGrow: 1 }}>
          <LinearProgress
            sx={{ width: '8em' }}
            variant="determinate"
            value={progress}
          />
        </Box>
        <Button
          sx={{ lineBreak: 'normal' }}
          variant="text"
          text={step === 3 ? 'Start' : 'Next'}
          onClick={handleNext}
        />
      </Stack>
    </Box>
  );
};
//uno problemo here
