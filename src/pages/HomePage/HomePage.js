import React from 'react';
import './style.css';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import StoreBadges from '../../components/StoreBadges';
import Content from '../../components/StoreBadges';

const HomePage = (props) => {
  return (
    <div>
      <Hero title={props.title} icon={props.icon} subtitle={props.subtitle} text={props.text} />

      <Carousel />
      <Content>
        <StoreBadges />
      </Content>
    </div>
  );
};

export default HomePage;
