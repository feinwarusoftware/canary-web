import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  initReactI18next
} from "react-i18next";

//Translation Files

//English
import enGB from "./translations/en-gb"; // UK

//Portuguese
import ptPT from "./translations/pt-pt"; //Portugal

const resources = {
  "en-GB": {
    translation: enGB
  },
  "pt-PT": {
    translation: ptPT
  },
};

const detectionSettings = {
  order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
  lookupQuerystring: "hl"
};


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: detectionSettings,
    resources,
    fallbackLng: { 
      pt: ["pt-pt"],
      en: ["en-gb"],
      default: ["en-gb"]
  },
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  });

document.documentElement.lang = i18n.language.toLowerCase();

export default i18n;