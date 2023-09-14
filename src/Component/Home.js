import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import download from "../download.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const { translate } = useLanguage();

  return (
    <div className='back'>
        <div className='button-group-about'>
          <button className='button-col'>{translate('heading-home')}</button>
          <button className='button-col'>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/about">{translate('heading')}</Link></button>
        </div>
        <Row style={{ padding: "10px 20px", textAlign: "justify" }} className='pera-head'>
          <h1 style={{ color: "#cba12f" }}>{translate('heading-home')}</h1>
          <Col xs={6} lg={6} className='img-div'>
            <img src={download} alt='food' className='img'/>
          </Col>
          <Col xs={6} lg={6} className='pera-div-pera'>
            <p className='pera'>{translate('home')}</p>
          </Col>
        </Row>
    </div>
  );
};

export default Home;
