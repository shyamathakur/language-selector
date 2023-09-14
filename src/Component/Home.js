import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import "./About.css";
import { Button } from '@mui/material';

const Home = () => {
  const { translate } = useLanguage();

  return (
    <div>
      <div className='button-group-about'>
        <button className='button-col'>{translate('heading-home')}</button>
        <button className='button-col'>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/about">{translate('heading')}</Link></button>
      </div>
      <div style={{ padding: "10px 20px", textAlign: "justify" }}>
        <h1 style={{ color: "#6b83af" }}>{translate('heading-home')}</h1>
        <p className='pera'>{translate('home')}</p>
      </div>
    </div>
  );
};

export default Home;
