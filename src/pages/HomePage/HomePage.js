import React from 'react';
import './style.css';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import StoreBadges from '../../components/StoreBadges';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import DescriptionBanner from '../../components/DescriptionBanner';

const HomePage = (props) => {
  const steps = [
    'Scan a receipt. Split automatically detects and crops your receipt in the frame.',
    'Add your friends. Easily keep track of each person in individualized cards.',
    'Select their items. Tax and tip are calculated proportional to their orders.',
    'Charge with Venmo and get your money back!',
  ];
  return (
    <div>
      <Hero title={props.title} icon={props.icon} subtitle={props.subtitle} text={props.text} />
      <DescriptionBanner text={props.text} />
      <StoreBadges />
      <InfoBanner title="Split a bill in 4 easy steps" info={steps} />
      <Carousel />
    </div>
  );
};

export default HomePage;
