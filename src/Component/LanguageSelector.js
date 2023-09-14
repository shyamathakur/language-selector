import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import './Languagebutton.css';

const LanguageSelector = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'en') {
      changeLanguage('en');
    } else if (selectedValue === 'hi') {
      changeLanguage('hi');
    } else if (selectedValue === 'fr') {
      changeLanguage('fr');
    }
  };

  return (
    <div>
      <div className='button-group-div'>
        {/* <p>Selected Language: {selectedLanguage}</p> */}
        <div class="select-dropdown">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option className='option' value="">Language</option>
            <option className='option' value="en">English</option>
            <option className='option' value="hi">हिंदी</option>
            <option className='option' value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default LanguageSelector;