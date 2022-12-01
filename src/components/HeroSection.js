import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>VEHICLE STORAGE, CUSTOM CAR COVERS & AUTOMOTIVE PARTS</h1>
      <p>Kuala Lumpur, Malaysia</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          FIND OUT MORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
