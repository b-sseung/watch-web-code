import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationJp from './translation-jp.json';
import translationKo from './translation-ko.json';

export const getLang = () => {
  let lang = 'undefined';
  if (navigator.language != null) lang = navigator.language;
  lang = lang.toLowerCase().substring(0, 2);

  return lang;
};

const resources = {
  jp: { translation: translationJp },
  ko: { translation: translationKo },
};

i18next.use(initReactI18next).init({ resources, lng: 'jp', interpolation: { escapeValue: false } });

export default i18next;
