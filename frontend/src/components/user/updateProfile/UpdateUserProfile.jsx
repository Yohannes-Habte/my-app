import { useState } from "react";
import "./UpdateUserProfile.scss";
import axios from "axios";
import { toast } from "react-toastify";
import ReactIcons from "../../reactIcons/ReactIcons";
import { NavLink } from "react-router-dom";
import Address from "../address/Address";
import { useDispatch, useSelector } from "react-redux";
import PasswordChange from "../../forms/changePassword/PasswordChange";
import UserOrders from "../userOrders/UserOrders";
import UserRefunds from "../refunds/UserRefunds";
import UserTrackOrder from "../trackOrder/UserTrackOrder";
import UserInbox from "../userInbox/UserInbox";
import {
  URL,
  cloud_URL,
  cloud_name,
  upload_preset,
} from "../../../utils/security/secreteKey";
import {
  updateUserFail,
  updateUserStart,
  updateUserSuccess,
} from "../../../redux/reducers/userReducer";

const UpdateUserProfile = ({ isActive }) => {
  // Global react icons
  const {
    userIcon,
    uploadIcon,
    dateIcon,
    profesionIcon,
    languageIcon,
    phoneIcon,
  } = ReactIcons();

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Local State variables
  const [userData, setUserData] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    gender: currentUser.gender || "",
    birthDate: currentUser.birthDate || "",
    profession: currentUser.profession || "",
    language: currentUser.language || "",
    phoneNumber: currentUser.phoneNumber || "",
  });
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);

  // Update image
  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update Change
  const updateChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  // Handle Rest state variables into initial state
  const handleReset = () => {
    setUserData({
      firstName: "",
      lastName: "",
      gender: "",
      birthDate: "",
      profession: "",
      language: "",
      phoneNumber: "",
    });
    setAgree(false);
  };

  const {
    firstName,
    lastName,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
  } = userData;

  // Handle submit to update user account
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(updateUserStart());
      // Image validation
      const userPhoto = new FormData();
      userPhoto.append("file", image);
      userPhoto.append("cloud_name", cloud_name);
      userPhoto.append("upload_preset", upload_preset);

      // Save image to cloudinary
      const response = await axios.post(cloud_URL, userPhoto);
      const { url } = response.data;

      const updateUserInfo = {
        userData,
        image: url,
        agree: agree,
      };

      const { data } = await axios.put(
        `${URL}/auth/${currentUser._id}/profile/update`,
        updateUserInfo
      );
      dispatch(updateUserSuccess(data.user));

      toast.success(data.message);
      handleReset();
      localStorage.setItem("userInfo", JSON.stringify(data.user));
    } catch (error) {
      dispatch(updateUserFail(error.message));
    }
  };

  return (
    <article className="user-profile-container">
      {isActive === 1 && (
        <section className="update-user-profile-wrapper">
          <h2 className="update-user-profile-title">Update Your Profile</h2>

          <aside className="update_user-image-container">
            <img
              className="update-user-image"
              src={currentUser.image}
              alt={currentUser.firstName}
            />
            <h5 className="logged-in-user">
              {" "}
              {currentUser.firstName} {currentUser.lastName}{" "}
            </h5>
          </aside>

          <fieldset className="update-user-profile-fieldset">
            <legend className="update-user-profile-legend ">
              {" "}
              User Profile
            </legend>
            <form onSubmit={handleSubmit} className="update-user-profile-form">
              <div className="inputs-container">
                {/* First Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={"firstName"}
                    id={"firstName"}
                    autoComplete="name"
                    required
                    value={firstName}
                    onChange={updateChange}
                    placeholder="Enter First Name"
                    className="input-field"
                  />

                  <label htmlFor={"firstName"} className="input-label">
                    First Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Last Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={"lastName"}
                    id={"lastName"}
                    autoComplete="lastName"
                    required
                    value={lastName}
                    onChange={updateChange}
                    placeholder="Enter Last Name"
                    className="input-field"
                  />

                  <label htmlFor={"lastName"} className="input-label">
                    Last Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* User Image */}
                <div className="input-container">
                  <span className="icon"> {uploadIcon} </span>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={updateImage}
                    className="input-field"
                  />
                </div>

                {/* Gender */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <select
                    name="gender"
                    id="gender"
                    onChange={updateChange}
                    value={gender}
                    className="input-field"
                  >
                    <option value="default">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>{" "}
                </div>

                {/* Birth Date */}
                <div className="input-container">
                  <span className="icon"> {dateIcon} </span>
                  <input
                    type="date"
                    name={"birthDate"}
                    id={"birthDate"}
                    autoComplete="birthDate"
                    value={birthDate}
                    onChange={updateChange}
                    placeholder="Enter Birth Date"
                    className="input-field"
                  />

                  <label htmlFor={"birthDate"} className="input-label">
                    Birth Date
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Profession */}
                <div className="input-container">
                  <span className="icon"> {profesionIcon} </span>
                  <input
                    type="text"
                    name={"profession"}
                    id={"profession"}
                    autoComplete="profession"
                    value={profession}
                    onChange={updateChange}
                    placeholder="Enter Birth Date"
                    className="input-field"
                  />

                  <label htmlFor={"profession"} className="input-label">
                    Profession
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* language */}
                <div className="input-container">
                  <span className="icon"> {languageIcon} </span>
                  <select
                    name="language"
                    id="language"
                    onChange={updateChange}
                    value={language}
                    className="input-field"
                  >
                    <option value="default">Select Language</option>
                    <option value="english">English</option>
                    <option value="german">German</option>
                    <option value="tigrigna">Tigrigna</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div className="input-container">
                  <span className="icon"> {phoneIcon} </span>
                  <input
                    type="text"
                    name={"phoneNumber"}
                    id={"phoneNumber"}
                    autoComplete="phoneNumber"
                    value={phoneNumber}
                    onChange={updateChange}
                    placeholder="Enter Phone Number"
                    className="input-field"
                  />

                  <label htmlFor={"profession"} className="input-label">
                    Phone Number
                  </label>
                  <span className="input-highlight"></span>
                </div>
              </div>

              {/* Consent */}
              <div className="input-consent">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="consent-checkbox"
                />
                <label htmlFor="agree" className="accept">
                  I accept
                </label>

                <NavLink className={"terms-of-user"}> Terms of Use</NavLink>
              </div>

              <button type="submit" className="update-user-profile-btn">
                Update
              </button>
            </form>
          </fieldset>
        </section>
      )}

      {isActive === 2 && <Address />}

      {isActive === 3 && <PasswordChange />}

      {isActive === 4 && <UserOrders />}

      {isActive === 5 && <UserRefunds />}

      {isActive === 6 && <UserTrackOrder />}

      {isActive === 7 && <UserInbox />}

      {isActive === 8 && <UserInbox />}
    </article>
  );
};

export default UpdateUserProfile;
