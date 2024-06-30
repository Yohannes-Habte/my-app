import { useEffect, useState } from "react";
import "./Header.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../../searchBar/SearchBar";
import Navbar from "../navbar/Navbar";
import { URL } from "../../../../utils/security/secreteKey";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUserFail,
  logoutUserStart,
  logoutUserSuccess,
} from "../../../../redux/reducers/userReducer";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  // Local state variables
  const [data, setData] = useState({});

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Handle logout
  const handleLogout = async () => {
    try {
      dispatch(logoutUserStart());

      const { data } = await axios.get(`${URL}/users/logout`);

      dispatch(logoutUserSuccess(data.message));

      localStorage.removeItem("userInfo");

      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      dispatch(logoutUserFail(error.response.data.message));
    }
  };

  // Display service procedures in the frontend fetched from backend
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${URL}/pages/footer`);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <header className="header">
      {/* Top part of the header */}
      <aside className="logo-register-login-wrapper">
        <h1> LisaConsult</h1>
        {/* Register and login */}

        {currentUser ? (
          <figure className="image-container">
            <img
              className="user-login-image"
              onClick={handleLogout}
              src={"https://i.ibb.co/4pDNDk1/avatar.png"}
              alt={currentUser.firstName}
            />
            {currentUser.firstName}
          </figure>
        ) : (
          <ul className="register-login-box">
            <li className="account-item">
              <Link to={"/register"} className="account">
                Register
              </Link>
            </li>

            <li className="navbar-item">
              <Link to={"/login"} className="account">
                Login
              </Link>
            </li>
          </ul>
        )}
      </aside>

      {/* Middle part of the header */}
      <div className="images-search-wrapper">
        <figure className="image-container">
          <Link to="/">
            <img
              className="logo-image"
              src={data.logo}
              alt="LisaConsult Logo"
            />
          </Link>
        </figure>

        <SearchBar />

        <figure className="image-container">
          <img className="image" src={data.investment} alt="Logo" />
        </figure>
      </div>

      {/* Buttom part of the header */}
      <Navbar />
    </header>
  );
};

export default Header;
