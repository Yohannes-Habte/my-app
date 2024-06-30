import React from 'react';
import './FinacialReports.scss';
import AddFinanceReport from '../newFinanceReport/AddFinanceReport';
import FinanceMgtRequest from '../allRequests/FinanceMgtRequest';
import FinanceMgtFeedbacks from '../allFeedbacks/FinanceMgtFeedbacks';
import FinanceMgtInbox from '../financeInbox/FinanceMgtInbox';
import FinanceMagtTodoLists from '../todoLists/FinanceMagtTodoLists';
import WithdrawMoney from '../withdrawMoney/WithdrawMoney';

const FinacialReports = ({ active }) => {
  return (
    <article className='cfo-dashboard-contents-wrapper'>
      {active === 1 && (
        <section>
          <h2> Financial Reports </h2>
        </section>
      )}

      {active === 2 && <AddFinanceReport />}

      {active === 3 && <FinanceMgtRequest />}

      {active === 4 && <FinanceMgtFeedbacks />}

      {active === 5 && <FinanceMgtInbox />}

      {active === 6 && <FinanceMagtTodoLists />}

      {active === 7 && <WithdrawMoney />}
    </article>
  );
};

export default FinacialReports;
