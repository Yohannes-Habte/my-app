import { useState } from "react";
import "./EmployeeSignupPage.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactIcons from "../../../components/reactIcons/ReactIcons";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as ActionEmployee from "../../../redux/reducers/employeeReducer";
import { validEmail, validPassword } from "../../../utils/validation/validate";
import {
  URL,
  cloud_URL,
  cloud_name,
  upload_preset,
} from "../../../utils/security/secreteKey";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
  birthDate: "",
  profession: "",
  language: "",
  phoneNumber: "",
  employeeRole: "",
};
const EmployeeSignupPage = () => {
  const navigate = useNavigate();

  // Global react icons
  const {
    userIcon,
    emailIcon,
    passwordIcon,
    uploadIcon,
    dateIcon,
    languageIcon,
    phoneIcon,
    roleIcon,
  } = ReactIcons();

  // Global variables
  const { employeePostLoading } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  // Local state variables
  const [employeeInfos, setEmployeeInfos] = useState(initialState);
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfos({ ...employeeInfos, [name]: value });
  };

  // Destructuring variables
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    employeeRole,
  } = employeeInfos;

  // Reset variables
  const rest = () => {
    setEmployeeInfos({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      birthDate: "",
      profession: "",
      language: "",
      phoneNumber: "",
      employeeRole: "",
    });
    setAgree(false);
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
        // Image validation
        const userPhoto = new FormData();
        userPhoto.append("file", image);
        userPhoto.append("cloud_name", cloud_name);
        userPhoto.append("upload_preset", upload_preset);

        // Save image to cloudinary
        const response = await axios.post(cloud_URL, userPhoto);
        const { url } = response.data;

        // New Employee
        const newEmployee = {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          password: password,
          gender: gender,
          birthDate: birthDate,
          profession: profession,
          language: language,
          phoneNumber: phoneNumber,
          employeeRole: employeeRole,
          image: url,
          agree: agree,
        };
        const { data } = await axios.post(
          `${URL}/employees/signup`,
          newEmployee
        );

        dispatch(ActionEmployee.postEmployeeSuccess(data.employee));
        toast.success(data.message);
        rest();
        navigate("/employee/login");
      } catch (error) {
        dispatch(
          ActionEmployee.postEmployeeFailure(error.response.data.message)
        );
      }
    }
  };

  return (
    <main className="employee-signup-page">
      <section className="employee-signup-page-container">
        <h2 className="employee-signup-page-title">Create Employee Account</h2>

        <fieldset className="employee-signup-fieldset">
          <legend className="employee-signup-legend">Employee Account</legend>
          <form onSubmit={handleSubmit} className="employee-signup-form">
            {/* inputs container */}
            <div className="inputs-container">
              {/* First Name */}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"firstName"}
                  id={"firstName"}
                  autoComplete="name"
                  value={firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="input-field"
                />

                <label htmlFor={"firstName"} className="input-label">
                  First Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Middle Name*/}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"middleName"}
                  id={"middleName"}
                  autoComplete="middleName"
                  value={middleName}
                  onChange={handleChange}
                  placeholder="Enter Middle Name"
                  className="input-field"
                />

                <label htmlFor={"middleName"} className="input-label">
                  Middle Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Last Name */}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"lastName"}
                  id={"lastName"}
                  autoComplete="lastName"
                  value={lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="input-field"
                />

                <label htmlFor={"lastName"} className="input-label">
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
                  onChange={handleChange}
                  placeholder="Enter Email"
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
                  placeholder="Enter Password"
                  className="input-field"
                />
                <label htmlFor="password" className="input-label">
                  Password
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
                  onChange={(e) => setImage(e.target.files[0])}
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
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="default">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>{" "}
                <label htmlFor={"gender"} className="input-label">
                  Gender
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Birth Date */}
              <div className="input-container">
                <span className="input-icon"> {userIcon} </span>
                <input
                  type="date"
                  name={"birthDate"}
                  id={"birthDate"}
                  autoComplete="birthDate"
                  value={birthDate}
                  onChange={handleChange}
                  placeholder="Enter Birth Date"
                  className="input-field"
                />

                <label htmlFor={"birthDate"} className="input-label">
                  Birth Date
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Phone Number */}
              <div className="input-container">
                <span className="input-icon"> {phoneIcon} </span>
                <input
                  type="text"
                  name={"phoneNumber"}
                  id={"phoneNumber"}
                  autoComplete="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="input-field"
                />

                <label htmlFor={"phoneNumber"} className="input-label">
                  Phone Number
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Profession */}
              <div className="input-container">
                <span className="input-icon"> {dateIcon} </span>
                <input
                  type="text"
                  name={"profession"}
                  id={"profession"}
                  autoComplete="profession"
                  value={profession}
                  onChange={handleChange}
                  placeholder="Enter Profession"
                  className="input-field"
                />

                <label htmlFor={"profession"} className="input-label">
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
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="default">Select Language</option>
                  <option value="english">English</option>
                  <option value="german">German</option>
                  <option value="tigrigna">Tigrigna</option>
                </select>

                <label htmlFor={"language"} className="input-label">
                  Language
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Select Employee Role */}
              <div className="input-container">
                <span className="input-icon"> {roleIcon} </span>
                <select
                  name="employeeRole"
                  id="employeeRole"
                  value={employeeRole}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="Default">Select Employee Role </option>
                  <option value="Employee"> Employee </option>
                  <option value="HOD"> HOD </option>
                  <option value="CFO"> CFO </option>
                  <option value="CEO"> CEO </option>
                </select>

                <label htmlFor={"employeeRole"} className="input-label">
                  Department
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>

            {/* Consent */}
            <div className="consent-container">
              <input
                type="checkbox"
                name="agree"
                className="consent-checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <span className="accept">I accept</span>
              <Link className={"terms-of-use"}> Terms of Use</Link>
            </div>

            {/* Button */}
            <button type="submit" className="employee-account-btn">
              Sign Up
            </button>

            {/* Alread have an account */}
            <p className="have-account">
              Already have an account?
              <Link to="/employee/login" className={"link-to-login"}>
                Log In
              </Link>
            </p>
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default EmployeeSignupPage;
