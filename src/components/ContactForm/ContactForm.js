import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './style.css';

import MailService from '../../services/MailService';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setEmailSent] = useState();

  const mailCallback = (success) => {
    if (success) {
      setDisabled(false);
      setEmailSent(true);
    } else {
      setDisabled(false);
      setEmailSent(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    MailService.sendEmail({ email, message, name }, mailCallback);
  };

  useEffect(() => {
    if (name && email && message) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, message]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="full-name">Full Name</Form.Label>
        <Form.Control
          id="full-name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control
          id="message"
          name="message"
          as="textarea"
          rows={3}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </Form.Group>

      <Button className="d-inline-block" variant="primary" type="submit" disabled={disabled}>
        Send
      </Button>

      {emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
      {emailSent === false && <p className="d-inline error-msg">Email Failed to Send</p>}
    </Form>
  );
};

export default ContactForm;
