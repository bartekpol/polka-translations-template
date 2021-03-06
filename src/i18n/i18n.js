import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import dk from '../locales/dk.json'
import pl from '../locales/pl.json'

const resources = {
  dk,
  pl
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "dk",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;