import { IconButton, Box, Popover, Grid } from '@mui/material';
import { FC, ReactNode, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from 'components/Typography';
import { BASE_ICON_NAME, CUSTOM_ICON_MAP } from 'constants/category.constants';
import { Star } from '@mui/icons-material';
import { useCategories } from 'hooks';

interface IconPickerProps {
  name: string | ReactNode;
  onIconSelect: (iconId: string) => void;
  //NOTE JUST FOR NOW
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const IconPicker: FC<IconPickerProps> = ({
  onIconSelect,
  name,
  data,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIconName, setSelectedIconName] = useState<string>(
    String(name),
  );
  const { combinedCategories } = useCategories();

  const handleBoxClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleIconSelect = (iconId: string) => {
    setSelectedIconName(iconId);
    onIconSelect(iconId);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const findIcon = combinedCategories.find(
    (e) => e.name === selectedIconName,
  )?.icon;

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
        <IconButton color="primary">
          {CUSTOM_ICON_MAP[findIcon ?? selectedIconName] ?? <Star />}
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
            {data.map((icon) => (
              <Grid item xs={3} key={icon.name}>
                <IconButton
                  onClick={() => handleIconSelect(icon.name ?? '')}
                  sx={{
                    border: '1px solid #c9c7c7',
                    borderRadius: '4px',
                    color: 'primary.main',
                    background: icon.isBase ? 'red' : 'primary.main',
                  }}
                >
                  {CUSTOM_ICON_MAP[icon.icon ?? BASE_ICON_NAME]}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Popover>
    </Box>
  );
};
