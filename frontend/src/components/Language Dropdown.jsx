// src/components/LanguageDropdown.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
    const { t, i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language);

    const handleChange = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <select
            value={selectedLang}
            onChange={(e) => handleChange(e.target.value)}
        >
            <option value='en'>English</option>
            <option value='hi'>Hindi</option>
            <option value='kn'>Kannada</option>
        </select>
    );
};

export default LanguageDropdown;
