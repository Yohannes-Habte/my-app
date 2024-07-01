import { useState } from "react";
import "./AddRequest.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import { useDispatch, useSelector } from "react-redux";
import * as ActionRequest from "../../../redux/reducers/requestReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../utils/security/secreteKey";

const initialState = {
  requestTo: "",
  subject: "",
  textMessage: "",
  image: null,
};
const AddRequest = ({ setOpenRequest }) => {
  // Global react icons
  const { closeIcon, messageIcon, uploadIcon, subjectIcon, emailIcon } =
    ReactIcons();

  // Gloabl state variables
  const { depPostLoading } = useSelector((state) => state.request);
  const dispatch = useDispatch();

  // Local state variables
  const [formData, setFormData] = useState(initialState);

  // Destructuring
  const { requestTo, subject, textMessage, image } = formData;

  // Handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setFormData({
      requestTo: "",
      subject: "",
      textMessage: "",
      image: null,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data to be sent
    const requestData = new FormData();
    requestData.append("requestTo", requestTo);
    requestData.append("subject", subject);
    requestData.append("textMessage", textMessage);
    requestData.append("image", image);

    try {
      dispatch(ActionRequest.postRequestStart());

      const { data } = await axios.post(
        `${URL}/requests/new-request`,
        requestData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(ActionRequest.postRequestSuccess(data.request));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionRequest.postRequestFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-request-modal">
      <section className="add-request-popup-box">
        <span onClick={() => setOpenRequest(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-request-title"> Request to </h2>

        <form
          action=""
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="add-request-form"
        >
          {/* Request to */}
          <div className="input-container">
            <span className="input-icon"> {emailIcon} </span>
            <input
              type="text"
              name={"requestTo"}
              id={"requestTo"}
              autoComplete="requestTo"
              value={requestTo}
              onChange={handleChange}
              placeholder="Enter Request To"
              className="input-field"
            />

            <label htmlFor={"courseName"} className="input-label">
              Request to
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* subject */}
          <div className="input-container">
            <span className="input-icon"> {subjectIcon} </span>
            <input
              type="text"
              name={"subject"}
              id={"subject"}
              autoComplete="subject"
              value={subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="input-field"
            />

            <label htmlFor={"subject"} className="input-label">
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

            <label htmlFor={"discountPrice"} className="input-label">
              Email Message
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Image */}
          <div className="input-container">
            <span className="input-icon"> {uploadIcon} </span>
            <input
              type="file"
              name={"image"}
              id={"image"}
              accept="image/*"
              onChange={handleChange}
              className="input-field"
            />

            <label htmlFor={"image"} className="input-label">
              Attach Image or File
            </label>
            <span className="input-highlight"></span>
          </div>

          <button className="add-new-request-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddRequest;
