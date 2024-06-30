import { useEffect, useState } from 'react';
import './Header.scss';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import SearchBar from '../../../searchBar/SearchBar';
import Navbar from '../navbar/Navbar';

const Header = () => {
  // Local state variables
  const [data, setData] = useState({});

  // Display service procedures in the frontend fetched from backend
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:9000/api/pages/footer`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log('Footer', data);
  return (
    <header className="header">
      {/* Top part of the header */}
      <aside className="logo-register-login-wrapper">
        <h1> LisaConsult</h1>
        {/* Register and login */}
        <ul className="register-login-box">
          <li className="account-item">
            <Link to={'/register'} className="acount">
              Register
            </Link>
          </li>

          <li className="navbar-item">
            <Link to={'/login'} className="acount">
              Login
            </Link>
          </li>
        </ul>
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
