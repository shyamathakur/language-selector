import React, { createContext, useContext, useState } from 'react';
import en from './en.json';
import hi from './hi.json';
import fr from "./fr.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const languages = { en, hi, fr };

  const translate = (key) => {
    return languages[selectedLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, translate, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
