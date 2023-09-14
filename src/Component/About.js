import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./About.css";

const About = () => {
  const { translate } = useLanguage();

  return (
    <div>
      <div className='button-group-about'>
        <button className='button-col'><Link style={{ color: "#fff", textDecoration: "none" }} to="/home">{translate('heading-home')}</Link></button>
        <button className='button-col'>{translate('heading')}</button>
      </div>
      <div style={{ padding:"10px 20px", textAlign: "justify"}}>
        <h1 style={{ color: "#cba12f" }}>{translate('heading')}</h1>
        <p className='pera'>{translate('about')}</p>
      </div>
    </div>
  );
};

export default About;
