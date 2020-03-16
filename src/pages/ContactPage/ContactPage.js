import React from 'react';
import './style.css';
import ContactForm from '../../components/ContactForm';
import Hero from '../../components/Hero';
import Content from '../../components/Content';

const ContactPage = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <ContactForm />
      </Content>
    </div>
  );
};

export default ContactPage;
