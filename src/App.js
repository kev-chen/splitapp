import React, { useState } from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [title, setTitle] = useState('Split');
  const [headerLinks, setHeaderLinks] = useState([
    { title: 'Home', path: '/' },
    { title: 'Contact', path: '/contact' },
  ]);
  const [home, setHome] = useState({
    title: 'Split',
    subtitle: 'Simplify Your Hangouts',
    text:
      'Split is the simplest way to separate checks. ' +
      'No more guesstimating who owes who. Tax and tip are ' +
      'automatically calculated based on a person’s order. ' +
      'Simply scan the receipt, add your friends and their order, ' +
      'and settle the bill with Venmo.',
  });
  const [contact, setContact] = useState({ title: 'Contact me' });

  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="sm">
          <Navbar.Brand>Split</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Route
          path="/"
          exact
          render={() => <HomePage title={home.title} subtitle={home.subtitle} text={home.text} />}
          subtitle={home.subtitle}
          text={home.text}
        />

        <Route
          path="/contact"
          render={() => <ContactPage title={home.title} />}
          subtitle={home.subtitle}
          text={home.text}
        />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
