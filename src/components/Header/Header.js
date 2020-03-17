import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const setHeaderHeight = () => {
    let height = document.getElementById('footer').clientHeight;
    console.log(height);
    props.setHeaderHeight(height);
  };

  useEffect(() => {
    window.addEventListener('resize', setHeaderHeight);
    setHeaderHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar id="header" className="border-bottom" bg="transparent" expand="sm">
      <Navbar.Brand>Split</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <a className="nav-link" href="https://github.com/kev-chen/splitapp" target="_blank" rel="noopener noreferrer">
            See this page on GitHub
          </a>
          <Link className="nav-link" to="/splitapp">
            Home
          </Link>
          <Link className="nav-link" to="/splitapp/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
