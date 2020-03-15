import React from 'react';
import './style.css';
import Hero from '../../components/Hero';

const HomePage = (props) => {
  return <Hero title={props.title} subtitle={props.subtitle} text={props.text} />;
};

export default HomePage;
