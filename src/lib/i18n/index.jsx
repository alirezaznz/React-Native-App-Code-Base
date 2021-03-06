//multi language
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const resources = {
    // @ts-ignore
    fa: {translation: require('./resource/fa.json')},
    // @ts-ignore
    en: {translation: require('./resource/en.json')},
    // @ts-ignore
    tr: {translation: require('./resource/tr.json')},
};

i18n.use(initReactI18next)
    //.use(HttpApi)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'en',
        debug: false,
        //fallbackLng: "en",
        // backend: {
        //   /* translation file path */
        //   loadPath:
        //   `/assets/i18n/{{ns}}/{{lng}}.json`,
        // },
        // ns: ["translations"],
        // defaultNS: "translations",
        // ns: [""],
        // defaultNS: "",
        // keySeparator: false,
        interpolation: {
            escapeValue: false,
            //formatSeparator: ",",
        },
        // react: {
        //   wait: true,
        // },
    });

export default i18n;
