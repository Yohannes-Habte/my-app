import React, { useState } from 'react';
import './AdminDashboardPage.scss';
import AdminSidebar from '../../../components/admin/layout/adminSidebar/AdminSidebar';
import AdminContents from '../../../components/admin/adminDashboardContents/AdminContents';

const AdminDashboardPage = () => {
  const [active, setActive] = useState(1);

  return (
    <main className="admin-profile-page">
      <section className="admin-profile-page-container">
        <h1 className="admin-profile-page-title">Admin Dashboard</h1>
        <div className="admin-profile-wrapper">
          <AdminSidebar active={active} setActive={setActive} />
          <AdminContents active={active} />
        </div>
      </section>
    </main>
  );
};

export default AdminDashboardPage;
