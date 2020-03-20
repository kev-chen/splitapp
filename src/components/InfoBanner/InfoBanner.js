import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import CircleNumber from '../CircleNumber';

const InfoBanner = (props) => {
  return (
    <Jumbotron className="p-5 my-5 jumbotron-fluid">
      <Container fluid={true}>
        <Row className="text-center px-0">
          <Col>
            <h2 className="display-4 font-weight-lighter">{props.title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-center p-5">
          {props.info.map((item, index) => (
            <Col className={`text-center ${index+1 === props.info.length ? 'mb-0' : 'mb-5'} mb-md-0 mb-lg-0`}>
              <CircleNumber number={index+1} />
              <p className="font-weight-light">{item}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default InfoBanner;
