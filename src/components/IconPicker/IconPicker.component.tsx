import { IconButton, Box, Popover, Grid } from '@mui/material';
import { FC, ReactNode, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from 'components/Typography';
import { Star } from '@mui/icons-material';

interface IconData {
  name: string;
  icon: ReactNode;
  color?: string;
}

interface IconPickerProps {
  name: string | ReactNode;
  onIconSelect: (iconId: string) => void;
  iconData: IconData[];
}

export const IconPicker: FC<IconPickerProps> = ({
  onIconSelect,
  name,
  iconData,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIconName, setSelectedIconName] = useState<string | ReactNode>(
    name,
  );

  const handleBoxClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleIconSelect = (iconId: string) => {
    setSelectedIconName(iconId);
    onIconSelect(iconId);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Box>
      <Box
        id={String(name)}
        my={1}
        p={1}
        borderRadius="6px"
        sx={{
          cursor: 'pointer',
          border: '1px solid #c9c7c7',
          backgroundColor: 'primary.contrastText',
          ':hover': { border: '1px solid black' },
        }}
        onClick={handleBoxClick}
      >
        {/* well that is a hack i should figure out this later but for now im leaving this like that */}
        <IconButton color="primary">
          {selectedIconName === 'create-task-icons' ? (
            <Star />
          ) : (
            iconData.find((icon) => icon.name === selectedIconName)?.icon
          )}
        </IconButton>
        <Typography text={t('category.selectCategory')} maxLength={15} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        sx={{ maxHeight: 220 }}
      >
        <Box p={2} maxWidth="320px" bgcolor="info.contrastText">
          <Grid container spacing={2}>
            {iconData.map((item) => (
              <Grid item xs={3} key={item.name}>
                <IconButton
                  onClick={() => handleIconSelect(item.name)}
                  sx={{
                    border: '1px solid #c9c7c7',
                    borderRadius: '4px',
                    color: 'primary.main',
                  }}
                >
                  {item.icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </Box>
  );
};
