import React from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import download from "../pngtree.png";
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
      <p className='heading'>{translate('heading-home')}</p>
      <Row style={{ padding: "10px 20px", textAlign: "justify" }} className='pera-head'>
        <Col xs={12} lg={6} md={12} xl={6} className='img-div'>
          <img src={download} alt='food' className='img-food' />
        </Col>
        <Col xs={12} lg={6} md={12} xl={6} className='pera-div-pera'>
          <p className='pera'>{translate('home')}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
