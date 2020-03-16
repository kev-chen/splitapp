import React from 'react';
import './style.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
  // const btn = { backgroundColor: Color.PRIMARY, borderRadius: 0 };

  const renderHeader = () => {
    if (props.icon) {
      return (
        <div>
          <div className="hero-container">
            <img className="header-icon" src={props.icon} alt="icon" />
            <div className="text-left">
              {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
              {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
              {props.text && <h3 className="lead font-weight-light text-left">{props.text}</h3>}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
          {props.subtitle && <h3 className="display-4 font-weight-light">{props.subtitle}</h3>}
          {props.text && <h3 className="lead font-weight-light text-left">{props.text}</h3>}
        </div>
      );
    }
  };

  return (
    <Jumbotron className="bg-transparent jumotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col className="text-center" md={12}>
            {renderHeader()}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
