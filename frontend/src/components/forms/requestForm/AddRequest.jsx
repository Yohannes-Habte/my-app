import { useState } from 'react';
import './AddRequest.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionRequest from '../../../redux/reducers/requestReducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  requestTo: '',
  subject: '',
  textMessage: '',
};
const AddRequest = ({ setOpendRequest }) => {
  // Global react icons
  const { closeIcon, messageIcon, uploadIcon } = ReactIcons();

  // Gloabl state variables
  const { depPostLoading } = useSelector((state) => state.request);
  const dispatch = useDispatch();

  // Local state variables
  const [requestInfos, setRequestInfos] = useState(initialState);
  const [image, setIamge] = useState('');
  const [agree, setAgree] = useState(false);

  // Descructuing
  const { requestTo, subject, textMessage } = requestInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestInfos({ ...requestInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setRequestInfos({
      requestTo: '',
      subject: '',
      textMessage: '',
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionRequest.postRequestStart());
      const newRole = {
        requestTo: requestTo,
        subject: subject,
        textMessage: textMessage,
        agree: agree,
      };
      const { data } = await axios.post(`${URL}/requests/new-request`, newRole);

      dispatch(ActionRequest.postRequestSuccess(data.send));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionRequest.postRequestFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-request-modal">
      <section className="add-request-popup-box">
        <span onClick={() => setOpendRequest(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-request-title"> Request to </h2>

        <form action="" onSubmit={handleSubmit} className="add-request-form">
          {/* Request to */}
          <div className="input-container">
            <span className="input-icon"> {messageIcon} </span>
            <input
              type="text"
              name={'requestTo'}
              id={'requestTo'}
              autoComplete="requestTo"
              value={requestTo}
              onChange={handleChange}
              placeholder="Enter Request To"
              className="input-field"
            />

            <label htmlFor={'courseName'} className="input-label">
              Request to
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* subject */}
          <div className="input-container">
            <span className="input-icon"> {messageIcon} </span>
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

          {/* Discounted  Price */}
          <div className="input-container">
            <span className="input-icon"> {messageIcon} </span>
            <textarea
              name="textMessage"
              id="textMessage"
              value={textMessage}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Enter Email message"
              className="input-field"
            ></textarea>

            <label htmlFor={'discountPrice'} className="input-label">
              Email Message
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Image */}
          <div className="input-container">
            <span className="input-icon"> {uploadIcon} </span>
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

          <button className="add-new-request-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddRequest;
