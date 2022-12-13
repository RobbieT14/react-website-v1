import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>VIEW BY CATEGORY</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cover4.jpg'
              text='Custom-tailored Car Covers'
              label='Product'
              path='/products'
            />
            <CardItem
              src='images/car-garage.jpg'
              text='Vehicle Storage'
              label='Service'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cars_coffee.jpg'
              text='UG Cars & Coffee'
              label='LifeStyle'
              path='/lifestyle'
            />
            <CardItem
              src='images/ug_trackday.jpg'
              text='UG Track day'
              label='LifeStyle'
              path='/lifestyle'
            />
            <CardItem
              src='images/automotive_parts.jpg'
              text='Automotive Parts'
              label='Product'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
