import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_common from "./locales/en/common.json";
import id_common from "./locales/id/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en_common },
    id: { common: id_common },
  },
  lng: "id",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
