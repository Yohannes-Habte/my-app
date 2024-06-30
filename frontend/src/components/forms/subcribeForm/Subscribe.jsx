import React, { useState } from 'react';
import './Subscribe.scss';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  // Local state variables
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="add-course-wrapper">
      <h2 className="add-course-title"> Stay With Us </h2>
      <p> Subscibe with us and get the latest news</p>

      <form action="" className="add-course-form">
        {/* Task */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="email"
            name={'email'}
            id={'email'}
            autoComplete="email"
            value={email}
            placeholder="Enter email"
            className="input-field"
          />

          <label htmlFor={'email'} className="input-label">
            Email Address
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Consent */}
        <div className="input-consent">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={agree}
            className="consent-checkbox"
          />
          <label htmlFor="agree" className="accept">
            I accept
          </label>

          <Link className={'terms-of-user'}> Terms of Use</Link>
        </div>

        <button className="add-course-btn">Subscirbe</button>
      </form>
    </section>
  );
};

export default Subscribe;
