import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3}>
            © 2020 Kevin Chen
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={4}>
            This site was made by Kevin Chen.
          </Col>
        </Row>
      </Container>

    </footer>
  )
};

export default Footer;
