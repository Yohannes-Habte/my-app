import  { useState,   useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsCheck2All } from 'react-icons/bs';
import './UserRegister.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import ReactIcons from '../../../components/reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../../redux/reducers/userReducer';
import { validEmail, validPassword } from '../../../utils/validation/validate';
import { URL } from '../../../utils/security/secreteKey';

const UserRegister = () => {
  // to navigate register page
  const navigate = useNavigate();

  // Gloabl state variables
  const { u_postLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Global icons
  const {
    userIcon,
    passwordIcon,
    emailIcon,
    visiblePasswordIcon,
    invisiblePasswordIcon,
  } = ReactIcons();

  // Local state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // State variables that shows the condition of the password requirements
  const [letterCase, setLetterCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  // Password strength checker icons
  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  // Function to switch icon
  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  useEffect(() => {
    // Check for uppercase and lowercase letters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setLetterCase(true);
    } else {
      setLetterCase(false);
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    // Check for special character
    if (password.match(/([§,$,!,%,@,#,^,*,?,_,~])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    // Check for password length
    if (password.length > 7) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  // Function that is used to update the state variables of the registration form
  const updateChange = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'showPassword':
        setShowPassword(false);
        break;
      default:
        break;
    }
  };

  // Function to reset all the state variables
  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check validation
    if (!validEmail(email)) {
      toast.error('Invalid Email');
    } else if (!validPassword(password)) {
      toast.error('Password requirement is not fulfilled');
    } else {
      try {
        dispatch(Action.postUserStart());
        const newUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };
        const { data } = await axios.post(`${URL}/auth/register`, newUser);

        dispatch(Action.postUserSuccess(data.user));
        reset();
        toast.success(data.message);
        navigate('/login');
      } catch (err) {
        dispatch(Action.postUserFailure(err.response.data.message));
      }
    }
  };

  return (
    <main className="user-signup-page">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <section className="user-signup-page-container">
        <h1 className="user-signup-page-title"> Create Account for Free</h1>
        <fieldset className="user-signup-fieldset">
          <legend className="user-signup-legend"> Sign Up </legend>
          <form action="" onSubmit={handleSubmit} className="user-signup-form">
            <div className="user-signup-inputs-wrapper">
              {/* First Name */}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={updateChange}
                  placeholder="First Name"
                  className="input-field"
                />

                <label htmlFor="" className="input-label">
                  First Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Last Name */}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={updateChange}
                  placeholder="Last Name"
                  className="input-field"
                />

                <label htmlFor="" className="input-label">
                  Last Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Email address */}
              <div className="input-container">
                <span className="input-icon"> {emailIcon} </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={updateChange}
                  placeholder="Email"
                  className="input-field"
                />
                <label htmlFor="" className="input-label">
                  Email Address
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Password */}
              <div className="input-container">
                <span className="input-icon"> {passwordIcon} </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={updateChange}
                  placeholder="Password"
                  className="input-field"
                />
                <label htmlFor="" className="input-label">
                  Password
                </label>
                <span className="input-highlight"></span>
                <span onClick={displayPassword} className="password-display">
                  {showPassword ? (
                    <span className="icon"> {visiblePasswordIcon} </span>
                  ) : (
                    <span className="icon"> {invisiblePasswordIcon} </span>
                  )}
                </span>
              </div>

              <div className="consent-container">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={updateChange}
                  className="user-signup-consent-input"
                />
                <span className="user-signup-accept">I accept</span>
                <NavLink className={'terms-of-use'}> Terms of Use</NavLink>
              </div>
              <button className="user-signup-btn"> Register </button>
              <p className="have-account">
                Already have an account?
                <NavLink to="/login" className={'link-to-login'}>
                  Log In
                </NavLink>
              </p>
            </div>

            <aside className="password-checkbox">
              <h3 className="check-password-title">
                Checking Password Confirmation
              </h3>
              <hr />
              <p className="check">
                {switchIcon(letterCase)} &nbsp; Lowercase & UpperCase
              </p>

              <p className="check">{switchIcon(number)} &nbsp; Number (0-9)</p>

              <p className="check">
                {switchIcon(specialCharacter)} &nbsp; Spceial Character
                (!%@#^*?_~)
              </p>

              <p className="check">
                {switchIcon(passwordLength)} &nbsp; Minimum 8 Characters
              </p>
            </aside>
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default UserRegister;
