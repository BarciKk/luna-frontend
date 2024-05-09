import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UnauthorizedRoutes } from '../../enums/Auth/routes.enums';

export const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div />
        <div>
          <text>{t('auth.error404')}</text>
          <text>{t('auth.page404ops')}</text>
          <div>
            <text>{t('auth.page404Message')}</text>
            <Link to={UnauthorizedRoutes.login}>
              <button>{t('auth.home')}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
