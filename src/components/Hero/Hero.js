import React from 'react';
import './style.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Color from '../../constants/color';

const Hero = (props) => {
  const btn = { backgroundColor: Color.PRIMARY, borderRadius: 0 };
  return (
    <Jumbotron className="jumotron-fluid" style={btn}>
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col className="text-center">
            <img className="logo" src={require('../../assets/feature-graphic.png')} alt="logo" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
