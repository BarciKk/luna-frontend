import Box from '@mui/material/Box';
import { LinearProgress, Stack } from '@mui/material';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBlock } from '../../assets/infoBlock/infoBlock.module';
import { steps } from '../../constants/welcomePage.data';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch.component';

export const Welcome = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setProgress((progress) => progress + 33.3);
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
          variant="text"
          text={step === 3 ? 'Got it !' : 'Next'}
          onClick={handleNext}
        />
      </Stack>
    </Box>
  );
};
