import React, { useState } from 'react';
import './PasswordChange.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactIcons from '../../reactIcons/ReactIcons';

const PasswordChange = () => {
  // Global icons
  const { passwordIcon, invisiblePasswordIcon, visiblePasswordIcon } =
    ReactIcons();
  // Local state variables
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Update input data
  const updateChange = (e) => {
    switch (e.target.name) {
      case 'oldPassword':
        setOldPassword(e.target.value);
        break;
      case 'newPassword':
        setNewPassword(e.target.value);
        break;
      case 'confirmNewPassword':
        setConfirmNewPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Reset all state variables
  const resetVariables = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  // Handle change password
  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    try {
      const changeUserpassword = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      };
      const { data } = await axios.put(
        `/auth/change-password/`,
        changeUserpassword
      );
      resetVariables();
    } catch (error) {}
  };
  return (
    <section className="user-change-password-container">
      <h2 className="user-change-password-title">Change Password</h2>

      <form
        onSubmit={passwordChangeHandler}
        action=""
        className="user-change-password-form"
      >
        <div className="input-container">
          <span className="icon"> {passwordIcon} </span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="oldPassword"
            id="oldPassword"
            autoComplete="current-password"
            value={oldPassword}
            onChange={updateChange}
            placeholder="Enter Old Password"
            className="input-field"
          />
          <label htmlFor="oldPassword" className="input-label">
            Old Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <span className="icon"> {passwordIcon} </span>

          <input
            type={showPassword ? 'text' : 'password'}
            name="newPassword"
            id="newPassword"
            autoComplete="current-password"
            value={newPassword}
            onChange={updateChange}
            placeholder="Enter New Password"
            className="input-field"
          />
          <label htmlFor="password" className="input-label">
            New Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <span className="icon"> {passwordIcon} </span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmNewPassword"
            id="confirmNewPassword"
            autoComplete="current-password"
            value={confirmNewPassword}
            onChange={updateChange}
            placeholder="Confirm New Password"
            className="input-field"
          />
          <label htmlFor="confirmNewPassword" className="input-label">
            Confirm New Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <button className="user-change-password-btn">Submit</button>
      </form>
    </section>
  );
};

export default PasswordChange;
