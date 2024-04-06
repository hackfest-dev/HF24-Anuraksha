import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import kn from "./kn.json";

const resources = {
    en: { translation: en },
    hi: { translation: hi },
    kn: { translation: kn },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
