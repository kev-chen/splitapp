import React from 'react';
import './style.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
  return (
    <Jumbotron className="px-5 pb-0 mb-0 bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          {props.icon && (
            <Col
              id="image-container"
              className="mb-5 mb-md-0 align-items-center d-flex justify-content-center justify-content-md-end justify-content-lg-end"
              xs={{ span: 12, order: 1 }}
              md={{ span: 3, order: 2 }}>
              <img className="header-icon img-fluid" src={props.icon} alt="icon" />
            </Col>
          )}
          <Col
            className={props.icon ? 'text-center text-md-left text-lg-left' : 'text-center'}
            xs={{ span: 12, order: 2 }}
            md={{ span: 7, order: 1 }}>
            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
            {props.subtitle && <h3 className="display-4 font-weight-lighter">{props.subtitle}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
