import { IconButton, Box, Popover, Grid } from '@mui/material';
import { FC, ReactNode, useState, MouseEvent } from 'react';

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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIconName, setSelectedIconName] = useState<string | ReactNode>(
    name,
  );

  //Idk bro about that type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBoxClick = (event: MouseEvent<HTMLButtonElement | any>) => {
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
        <Typography text="Select category" maxLength={15} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        sx={{ maxHeight: 220 }}
      >
        <Box p={2} maxWidth="320px">
          <Grid container spacing={2}>
            {iconData.map((item) => (
              <Grid item xs={3} key={item.name}>
                <IconButton
                  onClick={() => handleIconSelect(item.name)}
                  sx={{ border: '1px solid #c9c7c7', borderRadius: '4px' }}
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
