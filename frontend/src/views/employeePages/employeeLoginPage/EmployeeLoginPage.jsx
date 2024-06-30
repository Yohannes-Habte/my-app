import { useState } from "react";
import "./EmployeeLoginPage.scss";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ReactIcons from "../../../components/reactIcons/ReactIcons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as ActionEmployee from "../../../redux/reducers/employeeReducer";
import { validEmail, validPassword } from "../../../utils/validation/validate";
import { URL } from "../../../utils/security/secreteKey";

const initialState = {
  email: "",
  password: "",
};
const EmployeeLoginPage = () => {
  // Navigate to employee dashboar
  const navigate = useNavigate();

  // Global react icons
  const { emailIcon, passwordIcon } = ReactIcons();

  // Global variables
  const dispatch = useDispatch();

  // Local state variables
  const [employeeInfos, setEmployeeInfos] = useState(initialState);
  const [keepMe, setKeepMe] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfos({ ...employeeInfos, [name]: value });
  };

  // Destructuring variables
  const { email, password } = employeeInfos;

  // Reset variables
  const rest = () => {
    setEmployeeInfos({
      email: "",
      password: "",
    });
    setKeepMe(false);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check validation
    if (!validEmail(email)) {
      toast.error("Invalid Email");
    } else if (!validPassword(password)) {
      toast.error("Password requirement is not fulfilled");
    } else {
      try {
        dispatch(ActionEmployee.postEmployeeStart());

        // New Employee
        const employeeLogin = {
          email: email,
          password: password,
          keepMe: keepMe,
        };
        const { data } = await axios.post(
          `${URL}/employees/login`,
          employeeLogin
        );

        dispatch(ActionEmployee.postEmployeeSuccess(data.employee));
        toast.success(data.message);
        rest();
        navigate("/employee/dashboard");
      } catch (error) {
        dispatch(
          ActionEmployee.postEmployeeFailure(error.response.data.message)
        );
      }
    }
  };

  return (
    <main className="employee-login-page">
      <section className="employee-login-page-container">
        <h2 className="employee-login-page-title">Create Employee Account</h2>

        <fieldset className="employee-login-fieldset">
          <legend className="employee-login-legend">Employee Account</legend>
          <form onSubmit={handleSubmit} className="employee-login-form">
            {/* Email address */}
            <div className="input-container">
              <span className="input-icon"> {emailIcon} </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="input-field"
              />
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Password */}
            <div className="input-container">
              <span className="input-icon"> {passwordIcon} </span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder=" Enter Password"
                className="input-field"
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <span className="input-highlight"></span>
            </div>

            <div className="keep-logged-in-and-forgot-password-wrapper">
              <div className="checkbox-and-keep-me-signin">
                <input
                  type="checkbox"
                  name="login"
                  checked={keepMe}
                  onChange={() => setKeepMe(!keepMe)}
                  className="checkbox-field"
                />
                <span className="keep-me-login">Keep me signed in</span>
              </div>

              <Link to={"/forgot-password"} className="forgot-link">
                Forget your password?
              </Link>
            </div>

            <button type="submit" className="employee-account-btn">
              Login
            </button>

            <p className="have-no-account">
              {" Don't have an account?"}
              <NavLink to="/employee/signup" className={"link-to"}>
                Sign Up
              </NavLink>
            </p>
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default EmployeeLoginPage;
