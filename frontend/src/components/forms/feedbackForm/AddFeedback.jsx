import { useState } from 'react';
import './AddFeedback.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionFeedback from '../../../redux/reducers/feedbackReducer';

import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  feedbackTo: '',
  subject: '',
  textMessage: '',
};

const AddFeedback = ({ setOpendFeedback }) => {
  // Global react icons
  const { closeIcon, userIcon, messageIcon, uploadIcon } = ReactIcons();

  // Gloabl state variables
  const { feedbackPostLoading } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();

  // Local state variables
  const [feedbackInfos, setFeedbackInfos] = useState(initialState);
  const [image, setIamge] = useState('');
  const [agree, setAgree] = useState(false);

  // Descructuing
  const { feedbackTo, subject, textMessage } = feedbackInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackInfos({ ...feedbackInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setFeedbackInfos({
      feedbackTo: '',
      subject: '',
      textMessage: '',
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionFeedback.postFeedbackStart());
      const newRole = {
        feedbackTo: feedbackTo,
        subject: subject,
        textMessage: textMessage,
        agree: agree,
      };
      const { data } = await axios.post(
        `${URL}/feedbacks/new-feedback`,
        newRole
      );

      dispatch(ActionFeedback.postFeedbackSuccess(data.send));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionFeedback.postFeedbackFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-feedback-modal">
      <section className="add-feedback-popup-box">
        <span onClick={() => setOpendFeedback(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-feedback-title"> Feedback to </h2>

        <form action="" onSubmit={handleSubmit} className="add-feedback-form">
          {/*Feedback To */}
          <div className="input-container">
            <span className="icon"> {messageIcon} </span>
            <input
              type="text"
              name={'feedbackTo'}
              id={'feedbackTo'}
              autoComplete="feedbackTo"
              value={feedbackTo}
              onChange={handleChange}
              placeholder="Enter Feedback To"
              className="input-field"
            />

            <label htmlFor={'feedbackTo'} className="input-label">
              Feedback to
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* subject */}
          <div className="input-container">
            <span className="icon"> {messageIcon} </span>
            <input
              type="text"
              name={'subject'}
              id={'subject'}
              autoComplete="subject"
              value={subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="input-field"
            />

            <label htmlFor={'subject'} className="input-label">
              Subject
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Message */}
          <div className="input-container">
            <span className="icon"> {messageIcon} </span>
            <textarea
              name="textMessage"
              id="textMessage"
              value={textMessage}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Enter text message"
              className="input-field"
            ></textarea>

            <label htmlFor={'discountPrice'} className="input-label">
              Text Message
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Image */}
          <div className="input-container">
            <span className="icon"> {uploadIcon} </span>
            <input
              type="file"
              name={'image'}
              id={'tag'}
              autoComplete="image"
              value={image}
              className="input-field"
            />

            <label htmlFor={'image'} className="input-label">
              Attach Image or File
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
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-feedback-btn">Submit</button>
        </form>
      </section>{' '}
    </article>
  );
};

export default AddFeedback;
