import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import "../i18n";


const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language:any) => {
    // i18n.changeLanguage(language);
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace(i18n.language, language );
    if (newUrl != currentUrl) window.location.href = newUrl;
  };

  return (  
      <div className="customize-input">
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="">{t("Choose Language")}....</option>
            <option value="en">{t("English")}</option>
            <option value="fr">{t("French")}</option>
          </select>
        </div>       
  );
};

export default LanguageDropdown;