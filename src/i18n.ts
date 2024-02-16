import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './translations/en.json';
const resources = { en: { translation: EN } };

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
