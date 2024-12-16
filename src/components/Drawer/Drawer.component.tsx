import {
  AutoAwesome,
  Category,
  ContactMail,
  Home,
  Settings,
  WorkspacePremium,
} from '@mui/icons-material';
import { Drawer as MuiDrawer, Stack, Box, Divider } from '@mui/material';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import {
  currentDayName,
  currentLongDateFormat,
} from 'constants/date.constants';

import { AuthorizedRoutes } from 'enums/Routes.enums';
import { useUser } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer = ({ open, onClose }: DrawerProps) => {
  const { t } = useTranslation();
  const { user, jwt, removeUser } = useUser();
  const navigate = useNavigate();
  return (
    <MuiDrawer open={open} onClose={onClose} anchor="left">
      <Stack spacing={0} sx={{ width: '80vw', maxWidth: '400px' }} padding={3}>
        <Box marginBottom="2em">
          <Typography
            text={t('shared.lunaSync')}
            fontWeight="bolder"
            fontSize="20px"
            color="primary.main"
            display="block"
          />
          <Typography
            text={currentDayName}
            fontWeight="bolder"
            fontSize="16px"
            color="text.primary"
            display="block"
          />
          <Typography
            text={currentLongDateFormat}
            fontSize="14px"
            color="text.secondary"
          />
        </Box>
        <Divider />
        <Stack spacing={2} marginTop="8px" marginBottom="3em">
          <Button
            icon={<Home />}
            text={t('shared.home')}
            onClick={() => navigate(AuthorizedRoutes.today)}
            variant="text"
            alignLeft
          />

          <Button
            text={t('category.categories')}
            icon={<Category />}
            variant="text"
            onClick={() => navigate(AuthorizedRoutes.categories)}
            alignLeft
          />
          <Button
            text={t('shared.customize')}
            icon={<AutoAwesome />}
            variant="text"
            onClick={() => navigate(AuthorizedRoutes.customize)}
            alignLeft
          />
          <Divider sx={{ marginY: '8px' }} />
          <Button
            text={t('shared.premium')}
            icon={<WorkspacePremium />}
            variant="text"
            alignLeft
          />
          <Button
            text={t('shared.settings')}
            icon={<Settings />}
            variant="text"
            alignLeft
          />
          <Button
            text={t('shared.contact')}
            icon={<ContactMail />}
            variant="text"
            alignLeft
          />
          <Divider sx={{ marginY: '8px' }} />
        </Stack>
        {user && jwt && (
          <Button onClick={removeUser} text={t('shared.logout')} />
        )}
      </Stack>
    </MuiDrawer>
  );
};
