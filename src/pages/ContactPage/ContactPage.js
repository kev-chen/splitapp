import React from 'react';

import ContactForm from '../../components/ContactForm';
import Hero from '../../components/Hero';
import Content from '../../components/Content';

const ContactPage = (props) => {
  return (
    <div
      id="wrap"
      style={{ minHeight: `calc(100vh - ${props.footerHeight + props.headerHeight}px)` }}>
      <Hero title={props.title} />
      <Content>
        <ContactForm />
      </Content>
    </div>
  );
};

export default ContactPage;
