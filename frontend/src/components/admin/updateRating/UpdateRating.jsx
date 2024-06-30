import { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateRating = () => {
  // Local state variables
  const [ratingNo, setRatingNo] = useState(0);
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-rating-wrapper">
      <h2 className="update-rating-title"> Update Rating </h2>

      <form action="" className="add-rating-form">
        {/* Category Name */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="text"
            name={'ratingNo'}
            id={'ratingNo'}
            autoComplete="ratingNo"
            value={ratingNo}
            placeholder="Enter Rating Number"
            className="input-field"
          />

          <label htmlFor={'ratingNo'} className="input-label">
            Rating Number
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

        <button className="update-rating-btn">Submit</button>
      </form>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </section>
  );
};

export default UpdateRating;
