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
        <Button variant="contained">{translate('heading-home')}</Button>
        <Button variant="contained"><Link style={{ color: "#fff", textDecoration: "none" }} to="/about">{translate('heading')}</Link></Button>
      </div>
      <div style={{ padding: "10px 20px", textAlign: "justify" }}>
        <h1 style={{ color: "#1976d2" }}>{translate('heading-home')}</h1>
        <p className='pera'>{translate('home')}</p>
      </div>
    </div>
  );
};

export default Home;
