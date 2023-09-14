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
        <Button variant="contained"><Link style={{ color: "#fff", textDecoration: "none" }} to="/home">{translate('heading-home')}</Link></Button>
        <Button variant="contained">{translate('heading')}</Button>
      </div>
      <div style={{ padding:"10px 20px", textAlign: "justify"}}>
        <h1 style={{ color: "#1976d2" }}>{translate('heading')}</h1>
        <p>{translate('about')}</p>
      </div>
    </div>
  );
};

export default About;
