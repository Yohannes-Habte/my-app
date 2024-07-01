import { useState } from "react";
import "./AddFeedback.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import { useDispatch, useSelector } from "react-redux";
import * as ActionFeedback from "../../../redux/reducers/feedbackReducer";

import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../../../utils/security/secreteKey";

const initialState = {
  feedbackTo: "",
  subject: "",
  textMessage: "",
};

const AddFeedback = ({ setOpenFeedback }) => {
  // Global react icons
  const { closeIcon, messageIcon, uploadIcon, subjectIcon, emailIcon } =
    ReactIcons();

  // Global state variables
  const { feedbackPostLoading } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();

  // Local state variables
  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState("");

  // Destructuring
  const { feedbackTo, subject, textMessage } = formData;

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/bmp",
      ];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

      if (!validImageTypes.includes(file.type)) {
        alert("Invalid file type: " + file.type);
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert("File too large: " + file.name);
        return;
      }

      setImage(file);
    }
  };

  // Handle input change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setFormData({
      feedbackTo: "",
      subject: "",
      textMessage: "",
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionFeedback.postFeedbackStart());
      const feedback = {
        feedbackTo: feedbackTo,
        subject: subject,
        textMessage: textMessage,
        image: image,
      };
      const { data } = await axios.post(
        `${URL}/feedbacks/new-feedback`,
        feedback,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
        <span onClick={() => setOpenFeedback(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-feedback-title"> Feedback to </h2>

        <form action="" onSubmit={handleSubmit} className="add-feedback-form">
          {/*Feedback To */}
          <div className="input-container">
            <span className="icon"> {emailIcon} </span>
            <input
              type="text"
              name={"feedbackTo"}
              id={"feedbackTo"}
              autoComplete="feedbackTo"
              value={feedbackTo}
              onChange={handleChange}
              placeholder="Enter Feedback To"
              className="input-field"
            />

            <label htmlFor={"feedbackTo"} className="input-label">
              Feedback to
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* subject */}
          <div className="input-container">
            <span className="icon"> {subjectIcon} </span>
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

            <label htmlFor={"discountPrice"} className="input-label">
              Text Message
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Image */}
          <div className="input-container">
            <span className="icon"> {uploadIcon} </span>
            <input
              type="file"
              name={"image"}
              id={"image"}
              accept="image/*"
              onChange={handleImageChange}
              className="input-field"
            />

            <label htmlFor={"image"} className="input-label">
              Attach Image or File
            </label>
            <span className="input-highlight"></span>
          </div>

          <button className="add-new-feedback-btn">Submit</button>
        </form>
      </section>{" "}
    </article>
  );
};

export default AddFeedback;
