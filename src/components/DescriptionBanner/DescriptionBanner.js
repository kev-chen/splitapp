import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const DescriptionBanner = (props) => {
  return (
    <Jumbotron className="px-5 mb-0 bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="text-center" md={10}>
            <h3 className="blockquote font-weight-light" id="description">
              {props.text}
            </h3>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default DescriptionBanner;
