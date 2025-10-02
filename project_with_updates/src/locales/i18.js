import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json'
import ptTranslation from './pt.json'

i18n.use(initReactI18next).init({
    lng: 'pt',
    resources: {
        en: { translation: enTranslation },
        pt: { translation: ptTranslation },
    },  
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;