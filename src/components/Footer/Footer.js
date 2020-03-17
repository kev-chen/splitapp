import React, { useEffect } from 'react';
import './style.css';
import { Navbar } from 'react-bootstrap';

const Footer = (props) => {
  const setFooterHeight = () => {
    let height = document.getElementById('footer').clientHeight + 50;
    console.log(height);
    props.setFooterHeight(height);
  };

  useEffect(() => {
    window.addEventListener('resize', setFooterHeight);
    setFooterHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar id="footer" sticky="bottom" className="border-top mt-5" bg="light">
      <Navbar.Brand>Split</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Copyright © 2020 Kevin Chen. All Rights Reserved.</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
