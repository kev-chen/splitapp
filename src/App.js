import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

function App() {
  // const [title, setTitle] = useState('Split');
  // const [headerLinks, setHeaderLinks] = useState([
  //   { title: 'Home', path: '/splitapp' },
  //   { title: 'Contact', path: '/splitapp/contact' },
  // ]);
  const [home] = useState({
    title: 'Split',
    icon: require('./assets/app-icon.png'),
    subtitle: 'Simplify Your Hangouts',
    text:
      'Split is the simplest way to separate checks. ' +
      'No more guesstimating who owes who. Tax and tip are ' +
      'automatically calculated based on a person’s order. ' +
      'Simply scan the receipt, add your friends and their order, ' +
      'and settle the bill with Venmo.',
  });
  const [contact] = useState({ title: 'Get In Touch' });
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <Router>
      <Container className="p-0" fluid={true} style={{ marginBottom: `${footerHeight}px` }}>
        <Header />

        <Route
          path="/splitapp"
          exact
          render={() => (
            <HomePage
              title={home.title}
              icon={home.icon}
              subtitle={home.subtitle}
              text={home.text}
            />
          )}
          subtitle={home.subtitle}
          text={home.text}
        />

        <Route
          path="/splitapp/contact"
          render={() => <ContactPage title={contact.title} />}
          subtitle={home.subtitle}
          text={home.text}
        />

        <Footer setFooterHeight={setFooterHeight} />
      </Container>
    </Router>
  );
}

export default App;
