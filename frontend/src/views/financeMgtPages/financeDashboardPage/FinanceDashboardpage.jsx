import React, { useState } from 'react';
import './FinanceDashboardpage.scss';
import FinacialReports from '../../../components/financeManager/financialReports/FinacialReports';
import FinanceSidebar from '../../../components/financeManager/layout/financeSidebar/FinanceSidebar';

const FinanceDashboardpage = () => {
  const [active, setActive] = useState(1);

  return (
    <main className="finance-manager-page">
      <section className="finance-manager-page-container">
        <h1 className="finance-manager-page-title">Employee Dashboard</h1>
        <div className="finance-manager-wrapper">
          <FinanceSidebar active={active} setActive={setActive} />
          <FinacialReports active={active} />
        </div>
      </section>
    </main>
  );
};

export default FinanceDashboardpage;
