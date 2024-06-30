import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ReactIcons from "../../../reactIcons/ReactIcons";

const Navbar = () => {
  // Global variables
  const { barIcon, downArrowIcon } = ReactIcons();

  // Styling NavLink
  const navbarNavLink = ({ isActive }) =>
    isActive ? "active-navbar-item" : "passive-navbar-item";

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
          <NavLink to={"/"} className={navbarNavLink}>
            Home
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/about"} className={navbarNavLink}>
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/courses"} className={navbarNavLink}>
            Courses
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/products"} className={navbarNavLink}>
            Products
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/research"} className={navbarNavLink}>
            Research
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/faqs"} className={navbarNavLink}>
            FAQs
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/contact"} className={navbarNavLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
