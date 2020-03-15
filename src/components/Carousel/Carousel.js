import React, { useState } from 'react';
import './style.css';
import Card from '../Card';
import { Container, Row } from 'react-bootstrap';

const Carousel = (props) => {
  const [items, setItems] = useState([
    {
      id: 0,
      imgSrc: require('../../assets/screenshots/1.png'),
    },
    {
      id: 1,
      imgSrc: require('../../assets/screenshots/2.png'),
    },
    {
      id: 2,
      imgSrc: require('../../assets/screenshots/3.png'),
    },
    {
      id: 3,
      imgSrc: require('../../assets/screenshots/4.png'),
    },
    {
      id: 4,
      imgSrc: require('../../assets/screenshots/5.png'),
    },
    {
      id: 5,
      imgSrc: require('../../assets/screenshots/6.png'),
    },
    {
      id: 6,
      imgSrc: require('../../assets/screenshots/7.png'),
    },
  ]);

  const makeItems = (items) => {
    return items.map((item) => <Card item={item} id={item.id} />);
  };

  return (
    <Container fluid={true}>
      <Row className="justify-content-around">
        <div className="scrolling-wrapper-flexbox">{makeItems(items)}</div>
      </Row>
    </Container>
  );
};

export default Carousel;
