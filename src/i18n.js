import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ar from './locales/ar';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    fallbackNS: 'navbar',
    ns: ['about', 'home', 'navbar'],
    defaultNS: 'common',
    resources: {
      en,
      ar
    },
    
  });

export default i18n;
