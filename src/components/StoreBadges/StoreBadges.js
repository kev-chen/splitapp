import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

const StoreBadges = (props) => {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center py-5">
        <Col className="app-store-container">
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

    // <div className="badge-container">
    //   <a
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     href="https://apps.apple.com/us/app/split-simplify-your-hangouts/id1500703560"
    //   >
    //     <img
    //       className="app-store"
    //       src={require("../../assets/app_store.png")}
    //       alt="App Store"
    //     />
    //   </a>
    //   <div className="divider" />
    //   <a
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     href="https://play.google.com/store/apps/details?id=com.kchen.split"
    //   >
    //     <img
    //       className="play-store"
    //       src={require("../../assets/play_store.png")}
    //       alt="Play store"
    //     />
    //   </a>
    // </div>
  );
};

export default StoreBadges;
