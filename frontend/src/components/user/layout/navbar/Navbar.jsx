import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactIcons from '../../../reactIcons/ReactIcons';

const Navbar = () => {
  const navigate = useNavigate();

  // Global variables
  const { barIcon, downArrowIcon } = ReactIcons();

  // Local state variable
  const [open, setOpen] = useState(false);

  // Handle click
  const handleClick = () => {
    setOpen(!open);
  };

  // Styling NavLink
  const navbarNavLink = ({ isActive }) =>
    isActive ? 'active-navbar-item' : 'passive-navbar-item';

  return (
    <nav className="navbar-wrapper">
      {/* Categories*/}
      <aside className="categories-wrapper">
        <span className="icon"> {barIcon} </span>
        <h2>Categories</h2>
        <span className="icon"> {downArrowIcon} </span>
      </aside>

      {/* Navigation bar */}
      <ul className="navbar-items">
        <li className="navbar-item">
          <NavLink to={'/'} className={navbarNavLink}>
            Home
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/about'} className={navbarNavLink}>
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/courses'} className={navbarNavLink}>
            Courses
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/products'} className={navbarNavLink}>
            Products
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/research'} className={navbarNavLink}>
            Research
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/faqs'} className={navbarNavLink}>
            FAQs
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={'/contact'} className={navbarNavLink}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Language */}
      <aside className="languages-wrapper">
        <h4 className="language">Language</h4>
        <span className="icon"> {downArrowIcon} </span>
      </aside>
    </nav>
  );
};

export default Navbar;
