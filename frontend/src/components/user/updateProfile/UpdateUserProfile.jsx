import React, { useState } from 'react';
import './UpdateUserProfile.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactIcons from '../../reactIcons/ReactIcons';
import { NavLink } from 'react-router-dom';
import Address from '../address/Address';
import { useDispatch, useSelector } from 'react-redux';
import PasswordChange from '../../forms/changePassword/PasswordChange';
import UserOrders from '../userOrders/UserOrders';
import UserRefunds from '../refunds/UserRefunds';
import UserTrackOrder from '../trackOrder/UserTrackOrder';
import UserInbox from '../userInbox/UserInbox';

const UpdateUserProfile = ({ isActive }) => {
  // Global react icons
  const { userIcon, uploadIcon, dateIcon, languageIcon, phoneIcon } =
    ReactIcons();

  // Gloabl state variables
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Local State variables

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [profession, setProfession] = useState('');
  const [language, setLanguage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agree, setAgree] = useState(false);

  // Update image
  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update Change
  const updateChange = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'gender':
        setGender(event.target.value);
        break;
      case 'birthDate':
        setBirthDate(event.target.value);
        break;
      case 'profession':
        setProfession(event.target.value);
        break;
      case 'language':
        setLanguage(event.target.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(event.target.value);
        break;
      case 'agree':
        setAgree(!agree);
        break;
      default:
        break;
    }
  };

  // Reste state variables into initial state
  const reset = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setBirthDate('');
    setProfession('');
    setLanguage('');
    setPhoneNumber('');
    setAgree(false);
  };

  // Handle submit to update user account
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Image validation
      const userPhoto = new FormData();
      userPhoto.append('file', image);
      userPhoto.append('cloud_name', '');
      userPhoto.append('upload_preset', '');

      // Save image to cloudinary
      const response = await axios.post('', userPhoto);
      const { url } = response.data;

      const updateUserInfo = {
        firstName: firstName,
        lastName: lastName,
        image: url,
      };

      const { data } = await axios.put(`/auth/update`, updateUserInfo);

      toast.success(data.message);
      reset();
    } catch (error) {}
  };

  return (
    <article className="user-profile-container">
      {isActive === 1 && (
        <section className="update-user-profile-wrapper">
          <h2 className="update-user-profile-title">Update Your Profile</h2>

          <aside className="update_user-image-container">
            <img
              className="update-user-image"
              src={'https://i.ibb.co/4pDNDk1/avatar.png'}
              alt={'User'}
            />
            <h5 className="logged-in-user">User Name</h5>
          </aside>

          <fieldset className="update-user-profile-fieldset">
            <legend className="update-user-profile-legend ">
              {' '}
              User Profile
            </legend>
            <form onSubmit={handleSubmit} className="update-user-profile-form">
              <div className="inputs-container">
                {/* First Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'firstName'}
                    id={'firstName'}
                    autoComplete="name"
                    required
                    value={firstName}
                    onChange={updateChange}
                    placeholder="Enter First Name"
                    className="input-field"
                  />

                  <label htmlFor={'firstName'} className="input-label">
                    First Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Last Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'lastName'}
                    id={'lastName'}
                    autoComplete="lastName"
                    required
                    value={lastName}
                    onChange={updateChange}
                    placeholder="Enter Last Name"
                    className="input-field"
                  />

                  <label htmlFor={'lastName'} className="input-label">
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
                  </select>{' '}
                </div>

                {/* Birth Date */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="date"
                    name={'birthDate'}
                    id={'birthDate'}
                    autoComplete="birthDate"
                    value={birthDate}
                    onChange={updateChange}
                    placeholder="Enter Birth Date"
                    className="input-field"
                  />

                  <label htmlFor={'birthDate'} className="input-label">
                    Birth Date
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Profession */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'profession'}
                    id={'profession'}
                    autoComplete="profession"
                    value={profession}
                    onChange={updateChange}
                    placeholder="Enter Birth Date"
                    className="input-field"
                  />

                  <label htmlFor={'profession'} className="input-label">
                    Profession
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* language */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
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
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'phoneNumber'}
                    id={'phoneNumber'}
                    autoComplete="phoneNumber"
                    value={phoneNumber}
                    onChange={updateChange}
                    placeholder="Enter Phone Number"
                    className="input-field"
                  />

                  <label htmlFor={'profession'} className="input-label">
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
                  onChange={updateChange}
                  className="consent-checkbox"
                />
                <label htmlFor="agree" className="accept">
                  I accept
                </label>

                <NavLink className={'terms-of-user'}> Terms of Use</NavLink>
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
