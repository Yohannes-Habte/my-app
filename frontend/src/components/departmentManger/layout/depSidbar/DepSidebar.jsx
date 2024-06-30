import React from 'react';
import './DepSidebar.scss';
import ReactIcons from '../../../reactIcons/ReactIcons';

const DepSidebar = ({ active, setActive }) => {
  const {
    userIcon,
    courseIcon,
    messageIcon,
    logoutIcon,
    productIcon,
    eventIcon,
    jobIcon,
    projectIcon,
    requestIcon,
    todoIcon,
    managerIcon,
    orderIcon,
    refundIcon
  } = ReactIcons();
  return (
    <section className="user-profile-sidebar-wrapper">
      <h2 className="user-profile-sidebar-title">Dashboard</h2>

      <aside onClick={() => setActive(1)} className="user-profile-sidebar-item">
        <span className={active === 1 ? 'active-icon' : 'passive-icon'}>
          {userIcon}
        </span>

        <h4 className={active === 1 ? 'active-text' : 'passive-text'}>
          Department Profile
        </h4>
      </aside>

      <aside onClick={() => setActive(2)} className="user-profile-sidebar-item">
        <span className={active === 2 ? 'active-icon' : 'passive-icon'}>
          {courseIcon}
        </span>

        <h4 className={active === 2 ? 'active-text' : 'passive-text'}>
          Courses
        </h4>
      </aside>

      <aside onClick={() => setActive(3)} className="user-profile-sidebar-item">
        <span className={active === 3 ? 'active-icon' : 'passive-icon'}>
          {productIcon}
        </span>

        <h4 className={active === 3 ? 'active-text' : 'passive-text'}>
          Products
        </h4>
      </aside>

      <aside onClick={() => setActive(4)} className="user-profile-sidebar-item">
        <span className={active === 4 ? 'active-icon' : 'passive-icon'}>
          {eventIcon}
        </span>

        <h4 className={active === 4 ? 'active-text' : 'passive-text'}>
          Events
        </h4>
      </aside>

      <aside onClick={() => setActive(5)} className="user-profile-sidebar-item">
        <span className={active === 5 ? 'active-icon' : 'passive-icon'}>
          {orderIcon}
        </span>

        <h4 className={active === 5 ? 'active-text' : 'passive-text'}>
          Orders
        </h4>
      </aside>

      <aside onClick={() => setActive(6)} className="user-profile-sidebar-item">
        <span className={active === 6 ? 'active-icon' : 'passive-icon'}>
          {managerIcon}
        </span>

        <h4 className={active === 6 ? 'active-text' : 'passive-text'}>
          Order Management
        </h4>
      </aside>

      <aside onClick={() => setActive(7)} className="user-profile-sidebar-item">
        <span className={active === 7 ? 'active-icon' : 'passive-icon'}>
          {refundIcon}
        </span>

        <h4 className={active === 7 ? 'active-text' : 'passive-text'}>
          Withdraws
        </h4>
      </aside>

      <aside onClick={() => setActive(8)} className="user-profile-sidebar-item">
        <span className={active === 8 ? 'active-icon' : 'passive-icon'}>
          {jobIcon}
        </span>

        <h4 className={active === 8 ? 'active-text' : 'passive-text'}>
          Jobs
        </h4>
      </aside>

      <aside onClick={() => setActive(9)} className="user-profile-sidebar-item">
        <span className={active === 9 ? 'active-icon' : 'passive-icon'}>
          {projectIcon}
        </span>

        <h4 className={active === 9 ? 'active-text' : 'passive-text'}>
          Projects
        </h4>
      </aside>

      <aside
        onClick={() => setActive(10)}
        className="user-profile-sidebar-item"
      >
        <span className={active === 10 ? 'active-icon' : 'passive-icon'}>
          {requestIcon}
        </span>

        <h4 className={active === 10 ? 'active-text' : 'passive-text'}>
          Requests
        </h4>
      </aside>

      <aside
        onClick={() => setActive(11)}
        className="user-profile-sidebar-item"
      >
        <span className={active === 11 ? 'active-icon' : 'passive-icon'}>
          {messageIcon}
        </span>

        <h4 className={active === 11 ? 'active-text' : 'passive-text'}>
          Feedback
        </h4>
      </aside>

      <aside
        onClick={() => setActive(12)}
        className="user-profile-sidebar-item"
      >
        <span className={active === 12 ? 'active-icon' : 'passive-icon'}>
          {todoIcon}
        </span>

        <h4 className={active === 12 ? 'active-text' : 'passive-text'}>
          Todos
        </h4>
      </aside>

      <aside
        onClick={() => setActive(13)}
        className="user-profile-sidebar-item"
      >
        <span className={active === 13 ? 'active-icon' : 'passive-icon'}>
          {messageIcon}
        </span>

        <h4 className={active === 13 ? 'active-text' : 'passive-text'}>
          HOD Inbox
        </h4>
      </aside>

      <aside className="user-profile-sidebar-item">
        <span className={active === 14 ? 'active-icon' : 'passive-icon'}>
          {logoutIcon}
        </span>

        <h4 className={active === 14 ? 'active-text' : 'passive-text'}>
          Log Out
        </h4>
      </aside>
    </section>
  );
};

export default DepSidebar;
