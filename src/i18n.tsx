import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "welcome_to_react": "Welcome to React and react-i18next",
      "demo_welcome": "Hello Welcome",
      "home": "Home",
      "about":"About",
      "order_online":"Order Online",
      "store_details":"Store Details",
      "restaurant_hours":"Restaurant Hours",
      "order_pickup":"Order Pickup",
      "order_delivery":"Order Delivery",
      "services":"Services",
      "closed":"Closed",
      "day_of_the_week":"Day of the Week",
      "sunday": "sunday",
      "monday": "monday",
      "tuesday": "tuesday",
      "wednesday": "wednesday",
      "thursday": "thursday",
      "friday": "friday",
      "saturday": "saturday",
      "am": "am",
      "pm": "pm",
    }
  },
  fr: {
    translation: {
      "welcome_to_react": "Bienvenue à React et react-i18next",
      "demo_welcome": "Bonjour bienvenue",
      "home": "Domicile",
      "about":"À propos de",
      "order_online":"1 Commander en ligne",
      "store_details":"Détails du magasin",
      "restaurant_hours":"Heures d'ouverture",
      "order_pickup":"Cueillette de commande",
      "order_delivery":"Livraison de la commande",
      "services":"prestations de service",
      "closed":"Fermé",
      "day_of_the_week":"Jour de la semaine",
      "sunday": "dimanche",
      "monday": "Lundi",
      "tuesday": "mardi",
      "wednesday": "mercredi",
      "thursday": "jeudi",
      "friday": "Vendredi",
      "saturday": "samedi",
      "am": "UN M",
      "pm": "PM",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;