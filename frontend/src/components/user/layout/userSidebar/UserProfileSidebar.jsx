import React from 'react';
import './UserProfileSidebar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdMedicalServices } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { RiMoneyEuroBoxFill } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
import { GiSunPriest } from 'react-icons/gi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import ReactIcons from '../../../reactIcons/ReactIcons';

const UserProfileSidebar = ({ isActive, setIsActive }) => {
  // Navigate
  const navigate = useNavigate();

  // Global react icons
  const {
    userIcon,
    addressIcon,
    passwordIcon,
    orderIcon,
    refundIcon,
    messageIcon,
    adminIcon,
    profesionIcon,
    logoutIcon,
  } = ReactIcons();

  // Gloabl state variables
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log('User role is', currentUser);

  // Sign out Function

  return (
    <section className="user-profile-sidebar-wrapper">
      <h2 className="user-profile-sidebar-title">User Dashboard</h2>

      <aside
        onClick={() => setIsActive(1)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 1 ? 'active-icon' : 'passive-icon'}>
          {userIcon}
        </span>

        <h4 className={isActive === 1 ? 'active-text' : 'passive-text'}>
          User Profile
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(2)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 2 ? 'active-icon' : 'passive-icon'}>
          {addressIcon}
        </span>

        <h4 className={isActive === 2 ? 'active-text' : 'passive-text'}>
          User Address
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(3)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 3 ? 'active-icon' : 'passive-icon'}>
          {passwordIcon}
        </span>

        <h4 className={isActive === 3 ? 'active-text' : 'passive-text'}>
          Change Password
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(4)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 4 ? 'active-icon' : 'passive-icon'}>
          {orderIcon}
        </span>

        <h4 className={isActive === 4 ? 'active-text' : 'passive-text'}>
          Orders
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(5)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 5 ? 'active-icon' : 'passive-icon'}>
          {refundIcon}
        </span>

        <h4 className={isActive === 5 ? 'active-text' : 'passive-text'}>
          Refunds
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(6)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 6 ? 'active-icon' : 'passive-icon'}>
          {orderIcon}
        </span>

        <h4 className={isActive === 6 ? 'active-text' : 'passive-text'}>
          Track Order
        </h4>
      </aside>

      <aside
        onClick={() => setIsActive(7)}
        className="user-profile-sidebar-item"
      >
        <span className={isActive === 7 ? 'active-icon' : 'passive-icon'}>
          {messageIcon}
        </span>

        <h4 className={isActive === 7 ? 'active-text' : 'passive-text'}>
          User Inbox
        </h4>
      </aside>

      <Link to={'/ceo/dashboard'}>
        <aside
          onClick={() => setIsActive(8)}
          className="user-profile-sidebar-item"
        >
          <span className={isActive === 8 ? 'active-icon' : 'passive-icon'}>
            {adminIcon}
          </span>

          <h4 className={isActive === 8 ? 'active-text' : 'passive-text'}>
            CEO
          </h4>
        </aside>
      </Link>

      <Link to={'/hod/dashboard'}>
        <aside
          onClick={() => setIsActive(9)}
          className="user-profile-sidebar-item"
        >
          <span className={isActive === 9 ? 'active-icon' : 'passive-icon'}>
            {adminIcon}
          </span>

          <h4 className={isActive === 9 ? 'active-text' : 'passive-text'}>
            HOD
          </h4>
        </aside>
      </Link>

      <Link to={'/cfo/dashboard'}>
        <aside
          onClick={() => setIsActive(10)}
          className="user-profile-sidebar-item"
        >
          <span className={isActive === 10 ? 'active-icon' : 'passive-icon'}>
            {adminIcon}
          </span>

          <h4 className={isActive === 10 ? 'active-text' : 'passive-text'}>
            CFO
          </h4>
        </aside>
      </Link>

      <Link to={'/employee/login'}>
        <aside
          onClick={() => setIsActive(11)}
          className="user-profile-sidebar-item"
        >
          <span className={isActive === 11 ? 'active-icon' : 'passive-icon'}>
            {adminIcon}
          </span>

          <h4 className={isActive === 11 ? 'active-text' : 'passive-text'}>
            Employee
          </h4>
        </aside>
      </Link>

      <aside className="user-profile-sidebar-item">
      <span className={isActive === 12 ? 'active-icon' : 'passive-icon'}>
            {logoutIcon}
          </span>

        <h4 className={isActive === 12 ? 'active-text' : 'passive-text'}>
          Log Out
        </h4>
      </aside>
    </section>
  );
};

export default UserProfileSidebar;
