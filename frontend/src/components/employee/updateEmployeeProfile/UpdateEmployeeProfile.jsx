import { useState } from 'react';
import './UpdateEmployeeProfile.scss';
import ReactIcons from '../../reactIcons/ReactIcons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';
import EmployeeProfessions from '../allEmployeeProfessions/EmployeeProfessions';
import BackgroundCheck from '../backgroundCheck/BackgroundCheck';
import EmployeeRequests from '../allRequests/EmployeeRequests';
import EmployeeFeedbacks from '../feedbacks/EmployeeFeedbacks';
import EmployeeInbox from '../employeeInbox/EmployeeInbox';
import EmployeeTodoLists from '../todoLists/EmployeeTodoLists';
import PasswordChange from '../../forms/changePassword/PasswordChange';
import EmployersAddresses from '../employersAddresses/EmployersAddresses';

const UpdateEmployeeProfile = ({ active }) => {
  // Global react icons
  const {
    userIcon,
    uploadIcon,
    dateIcon,
    profesionIcon,
    languageIcon,
    phoneIcon,
    roleIcon,
  } = ReactIcons();
  // Global state variables

  // Local State variables
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [profession, setProfession] = useState('');
  const [language, setLanguage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <article className="employee-profile-wrapper">
      {active === 1 && (
        <section className="update-employee-profile-wrapper">
          <h2 className="update-employee-profile-title">
            Create Employee Account
          </h2>

          <aside className="update-employee-image-container">
            <img
              className="update-emloyee-image"
              src={'https://i.ibb.co/4pDNDk1/avatar.png'}
              alt={'Employee'}
            />
            <h5 className="logged-in-employee">Employee Name</h5>
          </aside>

          <fieldset className="update-employee-profile-fieldset">
            <legend className="update-employee-profile-legend">
              Update Account
            </legend>
            <form className="update-employee-profile-form">
              <div className="inputs-container">
                {/* First Name */}
                <div className="input-container">
                  <span className="input-icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'firstName'}
                    id={'firstName'}
                    autoComplete="name"
                    required
                    value={firstName}
                    placeholder="Enter First Name"
                    className="input-field"
                  />

                  <label htmlFor={'firstName'} className="input-label">
                    First Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Middle Name*/}
                <div className="input-container">
                  <span className="input-icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'middleName'}
                    id={'middleName'}
                    autoComplete="middleName"
                    required
                    value={middleName}
                    placeholder="Enter Middle Name"
                    className="input-field"
                  />

                  <label htmlFor={'middleName'} className="input-label">
                    Middle Name
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Last Name */}
                <div className="input-container">
                  <span className="input-icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={'lastName'}
                    id={'lastName'}
                    autoComplete="lastName"
                    required
                    value={lastName}
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
                  <span className="input-icon"> {uploadIcon} </span>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="input-field"
                  />
                </div>

                {/* Gender */}
                <div className="input-container">
                  <span className="input-icon"> {userIcon} </span>
                  <select
                    name="gender"
                    id="gender"
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
                  <span className="input-icon"> {dateIcon} </span>
                  <input
                    type="date"
                    name={'birthDate'}
                    id={'birthDate'}
                    autoComplete="birthDate"
                    value={birthDate}
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
                  <span className="input-icon"> {profesionIcon} </span>
                  <input
                    type="text"
                    name={'profession'}
                    id={'profession'}
                    autoComplete="profession"
                    value={profession}
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
                  <span className="input-icon"> {languageIcon} </span>
                  <select
                    name="language"
                    id="language"
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
                  <span className="input-icon"> {phoneIcon} </span>
                  <input
                    type="text"
                    name={'phoneNumber'}
                    id={'phoneNumber'}
                    autoComplete="phoneNumber"
                    value={phoneNumber}
                    placeholder="Enter Phone Number"
                    className="input-field"
                  />

                  <label htmlFor={'profession'} className="input-label">
                    Phone Number
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Select Employee Role */}
                <div className="input-container">
                  <span className="input-icon"> {roleIcon} </span>
                  <select
                    name="department"
                    id="department"
                    value={employeeRole}
                    className="input-field"
                  >
                    <option value="Default">Select Employee Role </option>
                    <option value="education"> Teacher </option>
                    <option value="shopping"> Researcher </option>
                    <option value="shopping"> Project Manager </option>
                    <option value="shopping"> HOD </option>
                    <option value="shopping"> CEO </option>
                  </select>

                  <label htmlFor={'firstName'} className="input-label">
                    Select Department
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
                  className="consent-checkbox"
                />
                <label htmlFor="agree" className="accept">
                  I accept
                </label>

                <Link className={'terms-of-user'}> Terms of Use</Link>
              </div>

              <button type="submit" className="update-employeee-acount-btn">
                Submit
              </button>
            </form>
          </fieldset>
        </section>
      )}

      {active === 2 && <PasswordChange />}

      {active === 3 && <BackgroundCheck />}

      {active === 4 && <EmployeeProfessions />}

      {active === 5 && <EmployersAddresses />}

      {active === 6 && <EmployeeRequests />}

      {active === 7 && <EmployeeFeedbacks />}

      {active === 8 && <EmployeeInbox />}

      {active === 9 && <EmployeeTodoLists />}
    </article>
  );
};

export default UpdateEmployeeProfile;
