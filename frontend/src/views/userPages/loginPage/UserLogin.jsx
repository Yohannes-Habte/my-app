import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UserLogin.scss";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import ReactIcons from "../../../components/reactIcons/ReactIcons";
import loginImage from "../../../assets/login-image.jpg";
import { useDispatch } from "react-redux";
import * as Action from "../../../redux/reducers/userReducer";
import { validEmail, validPassword } from "../../../utils/validation/validate";
import { URL } from "../../../utils/security/secreteKey";

const UserLogin = () => {
  // Navigate to
  const navigate = useNavigate();

  // Global state variables

  const dispatch = useDispatch();

  // Global react icons
  const {
    emailIcon,
    passwordIcon,
    visiblePasswordIcon,
    invisiblePasswordIcon,
  } = ReactIcons();

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Function to update login user data
  const updateData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "showPassword":
        setShowPassword(false);
        break;
      default:
        break;
    }
  };

  // Reset all state variables for the login form
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  // Login and Submit Function
  const submitUserLogin = async (event) => {
    event.preventDefault();

    // Check validation
    if (!validEmail(email)) {
      toast.error("Invalid Email");
    } else if (!validPassword(password)) {
      toast.error("Password requirement is not fulfilled");
    } else {
      try {
        dispatch(Action.postUserStart());
        // The body
        const loginUser = {
          email: email,
          password: password,
        };
        const { data } = await axios.post(`${URL}/auth/login`, loginUser);

        dispatch(Action.postUserSuccess(data.user));
        toast.success(data.message);

        reset();
        navigate("/");
      } catch (err) {
        dispatch(err.response.data.message);
      }
    }
  };

  return (
    <main className="user-lagin-page">
      <Helmet>
        <title> Sign In </title>
      </Helmet>

      <section className="user-lagin-page-container">
        <h1 className="user-lagin-page-title"> Welcome To Your Account </h1>

        <fieldset className="user-login-fieldset">
          <legend className="user-login-legend">User Login </legend>

          <form onSubmit={submitUserLogin} className="user-login-form">
            <figure className="image-container">
              <img className="image" src={loginImage} alt="login" />
            </figure>

            <div className="inputs-wrapper">
              <div className="input-container">
                <span className="input-icon"> {emailIcon} </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={updateData}
                  placeholder="Enter Email"
                  className="input-field"
                />
                <label htmlFor="" className="input-label">
                  Email Address
                </label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-container">
                <span className="input-icon"> {passwordIcon} </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={updateData}
                  placeholder="Enter Password"
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

              <div className="keep-me-signin-forgot-password-wrapper">
                <div className="checkbox-and-keep-me-signin">
                  <input
                    type="checkbox"
                    name="login"
                    className="checkbox-field"
                  />
                  <span className="keep-me-login">Keep me signed in</span>
                </div>

                <Link to={"/forgot-password"} className="forgot-link">
                  Forget your password?
                </Link>
              </div>

              <button className="user-login-btn"> Log In</button>
              <p className="have-no-account">
                {" Don't have an account?"}
                <NavLink to="/register" className={"link-to"}>
                  Sign Up
                </NavLink>
              </p>
            </div>
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default UserLogin;
