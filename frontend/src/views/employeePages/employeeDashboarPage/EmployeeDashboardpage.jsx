import React, { useState } from 'react';
import './EmployeeDashboardpage.scss';
import EmployeeSidebar from '../../../components/employee/layout/employeeSidebar/EmployeeSidebar';
import UpdateEmployeeProfile from '../../../components/employee/updateEmployeeProfile/UpdateEmployeeProfile';

const EmployeeDashboardpage = () => {
  const [active, setActive] = useState(1);

  return (
    <main className="employee-profile-page">
      <section className="employee-profile-page-container">
        <h1 className="employee-profile-page-title">Employee Dashboard</h1>
        <div className="employee-profile-wrapper">
          <EmployeeSidebar active={active} setActive={setActive} />
          <UpdateEmployeeProfile active={active} />
        </div>
      </section>
    </main>
  );
};

export default EmployeeDashboardpage;
