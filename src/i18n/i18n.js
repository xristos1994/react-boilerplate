import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      test: 'Test English',
    },
  },
  fr: {
    translation: {
      test: 'Test French',
    },
  },
  el: {
    translation: {
      test: 'Test Greek',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    lng: navigator.language || navigator.userLanguage,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
