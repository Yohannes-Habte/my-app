import React, { useState } from 'react';
import './AddRating.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const AddRating = () => {
  // Global react icons
  const { ratingIcon } = ReactIcons();
  // Local state variables
  const [ratingNo, setRatingNo] = useState(0);
  const [agree, setAgree] = useState(false);
  const [ratingNos, setRatingNos] = useState([]);

  // Update change
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'ratingNo':
        setRatingNo(e.target.value);
        break;

      case 'agree':
        setAgree(!agree);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setRatingNo('');
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newRating = {
        ratingNo: ratingNo,
        agree: agree,
      };
      const { data } = await axios.post(`${URL}/ratings/new-rating`, newRating);

      reset();
      toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <article className="ratings-wrapper">
      <h2 className="ratings-title"> Ratings </h2>
      <section className="add-rating-wrapper">
        <h2 className="add-rating-title"> Add New Rating</h2>

        <form action="" onSubmit={handleSubmit} className="add-rating-form">
          {/* Category Name */}
          <div className="input-container">
            <span className="icon"> {ratingIcon} </span>
            <input
              type="number"
              name={'ratingNo'}
              id={'ratingNo'}
              autoComplete="ratingNo"
              value={ratingNo}
              onChange={handleChange}
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
              onChange={handleChange}
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-rating-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddRating;
