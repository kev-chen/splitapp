import React from 'react';
import './style.css';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';

const HomePage = (props) => {

  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
};

export default HomePage;
