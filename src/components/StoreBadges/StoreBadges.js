import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

const StoreBadges = (props) => {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center py-5">
        <Col className="app-store-container mb-2 mb-md-0 mb-lg-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/us/app/split-simplify-your-hangouts/id1500703560">
            <img src={require('../../assets/app_store.png')} alt="App Store" />
          </a>
        </Col>

        <Col className="play-store-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.kchen.split">
            <img src={require('../../assets/play_store.png')} alt="Play store" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default StoreBadges;
