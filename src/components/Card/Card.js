import React from 'react';
import './style.css';

const Card = (props) => {
  return (
    <div className="k-card">
      <img className="image" src={props.item.imgSrc} alt={props.item.imgSrc} />
    </div>
  );
};

export default Card;
