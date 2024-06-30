import React, { useState } from 'react';
import './HodDashboardPage.scss';
import DepSidebar from '../../../components/departmentManger/layout/depSidbar/DepSidebar';
import DepContent from '../../../components/departmentManger/depDashboardContent/DepContent';

const HodDashboardPage = () => {
  const [active, setActive] = useState(1);

  return (
    <main className="department-profile-page">
      <section className="department-profile-page-container">
        <h1 className="department-profile-page-title">Department Dashboard</h1>
        <div className="department-profile-wrapper">
          <DepSidebar active={active} setActive={setActive} />
          <DepContent active={active} />
        </div>
      </section>
    </main>
  );
};

export default HodDashboardPage;
