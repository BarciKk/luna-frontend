import {
  Avatar as MuiAvatar,
  AvatarProps,
  IconButton,
  Tooltip,
} from '@mui/material';

type CustomAvatarProps = AvatarProps & {
  onClick?: () => void;
  src: string;
  label?: string;
};

export const CustomAvatar = ({
  onClick,
  src,
  label,
  ...props
}: CustomAvatarProps) => {
  return (
    <Tooltip title={label}>
      <IconButton onClick={onClick}>
        <MuiAvatar
          {...props}
          alt="user avatar"
          src={src}
          sx={{ width: '60px', height: '60px' }}
        />
      </IconButton>
    </Tooltip>
  );
};
