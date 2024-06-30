import React from 'react';
import './EmployeeSidebar.scss';
import ReactIcons from '../../../reactIcons/ReactIcons';

const EmployeeSidebar = ({ active, setActive }) => {
  const {
    userIcon,
    messageIcon,
    logoutIcon,
    requestIcon,
    todoIcon,
    refundIcon,
    accountIcon,
    addressIcon,
    profesionIcon,
    passwordIcon
  } = ReactIcons();
  return (
    <section className="user-profile-sidebar-wrapper">
      <h2 className="user-profile-sidebar-title">Dashboard</h2>

      <aside onClick={() => setActive(1)} className="user-profile-sidebar-item">
        <span className={active === 1 ? 'active-icon' : 'passive-icon'}>
          {accountIcon}
        </span>

        <h4 className={active === 1 ? 'active-text' : 'passive-text'}>
          Update Account
        </h4>
      </aside>

      <aside onClick={() => setActive(2)} className="user-profile-sidebar-item">
        <span className={active === 2 ? 'active-icon' : 'passive-icon'}>
          {passwordIcon}
        </span>

        <h4 className={active === 2 ? 'active-text' : 'passive-text'}>Change password</h4>
      </aside>

      <aside onClick={() => setActive(3)} className="user-profile-sidebar-item">
        <span className={active === 3 ? 'active-icon' : 'passive-icon'}>
          {userIcon}
        </span>

        <h4 className={active === 3 ? 'active-text' : 'passive-text'}>
          Background Check
        </h4>
      </aside>

      <aside onClick={() => setActive(4)} className="user-profile-sidebar-item">
        <span className={active === 4 ? 'active-icon' : 'passive-icon'}>
          {profesionIcon}
        </span>

        <h4 className={active === 4 ? 'active-text' : 'passive-text'}>
          Professions
        </h4>
      </aside>

      <aside onClick={() => setActive(5)} className="user-profile-sidebar-item">
        <span className={active === 5 ? 'active-icon' : 'passive-icon'}>
          {addressIcon}
        </span>

        <h4 className={active === 5 ? 'active-text' : 'passive-text'}>
          Address
        </h4>
      </aside>

      <aside onClick={() => setActive(6)} className="user-profile-sidebar-item">
        <span className={active === 6 ? 'active-icon' : 'passive-icon'}>
          {requestIcon}
        </span>

        <h4 className={active === 6 ? 'active-text' : 'passive-text'}>
          Requests
        </h4>
      </aside>

      <aside onClick={() => setActive(7)} className="user-profile-sidebar-item">
        <span className={active === 7 ? 'active-icon' : 'passive-icon'}>
          {refundIcon}
        </span>

        <h4 className={active === 7 ? 'active-text' : 'passive-text'}>
          Feedbacks
        </h4>
      </aside>

      <aside onClick={() => setActive(8)} className="user-profile-sidebar-item">
        <span className={active === 8 ? 'active-icon' : 'passive-icon'}>
          {messageIcon}
        </span>

        <h4 className={active === 8 ? 'active-text' : 'passive-text'}>Inbox</h4>
      </aside>

      <aside onClick={() => setActive(9)} className="user-profile-sidebar-item">
        <span className={active === 9 ? 'active-icon' : 'passive-icon'}>
          {todoIcon}
        </span>

        <h4 className={active === 9 ? 'active-text' : 'passive-text'}>Todos</h4>
      </aside>

      <aside className="user-profile-sidebar-item">
        <span className={active === 10 ? 'active-icon' : 'passive-icon'}>
          {logoutIcon}
        </span>

        <h4 className={active === 10 ? 'active-text' : 'passive-text'}>
          Log Out
        </h4>
      </aside>
    </section>
  );
};

export default EmployeeSidebar;
