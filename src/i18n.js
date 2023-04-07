import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // si no encuentra una traducción, usa en.json
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
