import React from 'react';
import './style.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
  return (
    <Jumbotron className="bg-transparent jumotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          {props.icon && (
            <Col className="d-flex justify-content-center" md={3}>
              <img className="header-icon" src={props.icon} alt="icon" />
            </Col>
          )}
          <Col className={props.icon ? 'text-left' : 'text-center'} md={9}>
            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
            {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
            {props.text && <h3 className="lead font-weight-light" id="description">{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
