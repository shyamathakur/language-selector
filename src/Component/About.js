import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import "./About.css";

const About = () => {
  const { translate } = useLanguage();

  return (
    <div className='back'>
      <div className='button-group-about'>
        <button className='button-col'><Link style={{ color: "#fff", textDecoration: "none" }} to="/home">{translate('heading-home')}</Link></button>
        <button className='button-col'>{translate('heading')}</button>
      </div>
      <div style={{ padding:"10px 20px", textAlign: "justify"}} >
        <p className='heading'><strong>{translate('heading')}</strong></p>
        <p className='pera'>{translate('about')}</p>
      </div>
    </div>
  );
};

export default About;
