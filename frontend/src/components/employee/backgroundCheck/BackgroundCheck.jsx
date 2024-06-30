import axios from 'axios';
import './BackgroundCheck.scss';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReactIcons from '../../reactIcons/ReactIcons';
import { NavLink } from 'react-router-dom';

const BackgroundCheck = () => {
  // Global react icons
  const { userIcon, phoneIcon, streetIcon, zipCodeIcon, locationIcon } =
    ReactIcons();
  // Global state variables

  // Local State variables
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [professions, setProfession] = useState('');
  const [socialSecurityNo, setSocialSecurityNo] = useState('');
  const [driverLicenseNo, setDriverLicenseNo] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);

  // Update Change
  const updateChange = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'middleName':
        setMiddleName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'status':
        setEmploymentType(event.target.value);
        break;
      case 'phoneNumber':
        setphoneNumber(event.target.value);
        break;
      case 'street':
        setStreet(event.target.value);
        break;

      case 'zipCode':
        setZipCode(event.target.value);
        break;

      case 'city':
        setCity(event.target.value);
        break;

      case 'state':
        setState(event.target.value);
        break;
      case 'country':
        setCountry(event.target.value);
        break;
      default:
        break;
    }
  };

  // Reste state variables into initial state
  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmploymentType('');
    setphoneNumber('');
    setStreet('');
    setZipCode('');
    setCity('');
    setState('');
    setCountry('');
    setAgree(false);
  };

  // Handle submit to update user account
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updateUserInfo = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        street: street,
        zipCode: zipCode,
        city: city,
        state: state,
        country: country,
      };

      const { data } = await axios.put(`/auth/update`, updateUserInfo);

      toast.success(data.message);
      reset();
    } catch (error) {}
  };
  return (
    <section className="employee-background-check-wrapper">
      <h1 className="employee-background-check-title">
        Employee Background Check
      </h1>

      <figure className="employee-image-container">
        <img
          className="employee-image"
          src={'https://i.ibb.co/4pDNDk1/avatar.png'}
          alt={'Employee'}
        />
      </figure>

      <fieldset className="employee-background-check-fieldset">
        <legend className="employee-background-check-legend">
          {' '}
          Employee Background Form
        </legend>
        <form
          onSubmit={handleSubmit}
          className="employee-background-check-form"
        >
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

            {/* Employee Age */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <input
                type="date"
                name={'birthDate'}
                id={'birthDate'}
                autoComplete="birthDate"
                value={birthDate}
                onChange={updateChange}
                className="input-field"
              />

              <label htmlFor={'birthDate'} className="input-label">
                Employee Age
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Employee Gender */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={updateChange}
                className="input-field"
              >
                <option value=""> Select Your Gender </option>
                <option value=""> Male </option>
                <option value=""> Female </option>
                <option value=""> Other </option>
              </select>

              <label htmlFor={'gender'} className="input-label">
                Gender
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Employee Professions */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <select
                name="professions"
                id="professions"
                value={professions}
                onChange={updateChange}
                className="input-field"
              >
                <option value=""> Select Your Skills </option>
                <option value=""> Leadership Skills </option>
                <option value=""> Ecommers Platforms </option>
                <option value=""> Programming </option>
              </select>

              <label htmlFor={'professions'} className="input-label">
                Professions
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Social Security Number */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <input
                type="text"
                name={'socialSecurityNo'}
                id={'socialSecurityNo'}
                autoComplete="socialSecurityNo"
                required
                value={socialSecurityNo}
                onChange={updateChange}
                placeholder="Social Security Number"
                className="input-field"
              />

              <label htmlFor={'socialSecurityNo'} className="input-label">
                Social Security Number
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Driving Lisence */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <input
                type="text"
                name={'driverLicenseNo'}
                id={'driverLicenseNo'}
                autoComplete="driverLicenseNo"
                value={driverLicenseNo}
                onChange={updateChange}
                placeholder="Driving Lisence "
                className="input-field"
              />

              <label htmlFor={'driverLicenseNo'} className="input-label">
                Driving Lisence
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Employee Status */}
            <div className="input-container">
              <span className="icon"> {userIcon} </span>
              <select
                name="employmentType"
                id="employmentType"
                value={employmentType}
                onChange={updateChange}
                className="input-field"
              >
                <option value=""> Employee Status </option>
                <option value=""> Just Employee </option>
                <option value=""> Intern </option>
                <option value=""> Volunteer </option>
                <option value=""> Department Manager </option>
                <option value=""> Finance Manager </option>
                <option value=""> General Manager </option>
              </select>

              <label htmlFor={'status'} className="input-label">
                Employment Type
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Phone Number */}
            <div className="input-container">
              <span className="icon"> {phoneIcon} </span>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                value={phoneNumber}
                onChange={updateChange}
                placeholder="Enter Phone Number"
                className="input-field"
              />
              <label htmlFor="phoneNumber" className="input-label">
                Phone Number
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Street Name */}
            <div className="input-container">
              <span className="icon"> {streetIcon} </span>
              <input
                type="text"
                name={'street'}
                id={'street'}
                autoComplete="street"
                required
                value={street}
                onChange={updateChange}
                placeholder="Enter Street Name"
                className="input-field"
              />

              <label htmlFor={'phone'} className="input-label">
                Street Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* ZipCode Name */}
            <div className="input-container">
              <span className="icon"> {zipCodeIcon} </span>
              <input
                type="text"
                name={'zipCode'}
                id={'zipCode'}
                autoComplete="zipCode"
                value={zipCode}
                onChange={updateChange}
                placeholder="Enter Zip Code"
                className="input-field"
              />

              <label htmlFor={'zipCode'} className="input-label">
                Zip Code
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* City Name */}
            <div className="input-container">
              <span className="icon"> {locationIcon} </span>
              <input
                type="text"
                name={'city'}
                id={'city'}
                autoComplete="city"
                value={city}
                onChange={updateChange}
                placeholder="Enter City Name"
                className="input-field"
              />

              <label htmlFor={'city'} className="input-label">
                City Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* State Name */}
            <div className="input-container">
              <span className="icon"> {locationIcon} </span>
              <input
                type="text"
                name={'state'}
                id={'state'}
                autoComplete="state"
                value={state}
                onChange={updateChange}
                placeholder="Enter State Name"
                className="input-field"
              />

              <label htmlFor={'state'} className="input-label">
                State Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Country Name */}
            <div className="input-container">
              <span className="icon"> {locationIcon} </span>
              <input
                type="text"
                name={'country'}
                id={'country'}
                autoComplete="country"
                value={country}
                onChange={updateChange}
                placeholder="Enter Country Name"
                className="input-field"
              />

              <label htmlFor={'country'} className="input-label">
                Country Name
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
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <NavLink className={'terms-of-user'}> Terms of Use</NavLink>
          </div>

          <button type="submit" className="employee-background-check-btn">
            Submit
          </button>
        </form>
      </fieldset>
    </section>
  );
};

export default BackgroundCheck;
