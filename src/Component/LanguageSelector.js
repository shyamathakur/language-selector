// import React,{useState} from 'react';
// import { useLanguage } from './LanguageContext';
// import Button from '@mui/material/Button';
// import "./Languagebutton.css";

// const LanguageSelector = () => {
//   const { selectedLanguage, changeLanguage } = useLanguage();
//   const [selectedOption, setSelectedOption] = useState('');

//   // Handle the change event when an option is selected
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <div className='button-group-div'>
//       <Button variant="contained" onClick={() => changeLanguage('en')}>English</Button>
//       <Button variant="contained"onClick={() => changeLanguage('hi')}>हिंदी</Button>
//       <Button variant="contained"onClick={() => changeLanguage('fr')}>Français </Button>

//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select your</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>

//         <Button style={{ backgroundColor: "#d50ed5", color: "#fff", borderRadius: "10px",fontSize:"15px",fontWeight:"600" }} onClick={() => changeLanguage('en')}>English</Button>
//         <Button style={{ backgroundColor: "#44eb44",color: "#fff", borderRadius: "10px",fontSize:"15px",fontWeight:"600" }} onClick={() => changeLanguage('hi')}>हिंदी<span className="flag-icon flag-icon-in flag-icon-squared"></span> </Button>
//         <Button style={{ backgroundColor: "#f30a0a", color: "#fff", borderRadius: "10px",fontSize:"15px",fontWeight:"600" }} onClick={() => changeLanguage('fr')}>Français </Button>
//         <p>Selected Language: {selectedLanguage}</p>
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import Button from '@mui/material/Button';
import './Languagebutton.css';

const LanguageSelector = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [selectedOption, setSelectedOption] = useState('');

  // Handle the change event when an option is selected
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Call the changeLanguage function with the selected value
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
        {/* <Button variant="contained" onClick={() => handleOptionChange({ target: { value: 'en' } })}>English</Button>
        <Button variant="contained" onClick={() => handleOptionChange({ target: { value: 'hi' } })}>हिंदी</Button>
        <Button variant="contained" onClick={() => handleOptionChange({ target: { value: 'fr' } })}>Français</Button> */}

        {/* <p>Selected Language: {selectedLanguage}</p> */}
        <select className="custom-select" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Language</option>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;

