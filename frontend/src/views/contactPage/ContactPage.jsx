import React from 'react';
import './ContactPage.scss';
import Header from '../../components/user/layout/header/Header';
import ContactTools from '../../components/contact/contactTools/ContactTools';
import ContactForm from '../../components/contact/contactForm/ContactForm';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <Header />
      <article className="contact-page-container">
        <h1 className="contact-page-title"> contact Us </h1>
        <div className="contact-box">
          <ContactTools />
          <ContactForm />
        </div>
      </article>
    </main>
  );
};

export default ContactPage;
