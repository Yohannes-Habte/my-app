import React from 'react';
import "./DepContent.scss"
import DepCouses from '../depCourses/DepCouses';
import DepProducts from '../depProducts/DepProducts';
import DepEvents from '../depEvents/DepEvents';
import DepJobs from '../depJobs/DepJobs';
import DepProjects from '../depProjects/DepProjects';
import HodRequests from '../depRequests/HodRequests';
import HodFeedbacks from '../depFeedbacks/HodFeedbacks';
import HodTodoLists from '../depTodos/HodTodoLists';
import HodInbox from '../depInbox/HodInbox';
import OrderManagement from '../orderManagement/OrderManagement';
import DepOrders from '../depOrders/DepOrders';
import DepWithdraws from '../depWithdraws/DepWithdraws';

const DepContent = ({ active }) => {
  return (
    <article className='department-contents-wrapper'>
      {active === 1 && (
        <section>
          <h2> Department Summary Information </h2>
        </section>
      )}

      {active === 2 && <DepCouses />}

      {active === 3 && <DepProducts />}

      {active === 4 && <DepEvents />}

      {active === 5 && <DepOrders />}

      {active === 6 && <OrderManagement />}

      {active === 7 && <DepWithdraws />}

      {active === 8 && <DepJobs />}

      {active === 9 && <DepProjects />}

      {active === 10 && <HodRequests />}

      {active === 11 && <HodFeedbacks />}

      {active === 12 && <HodTodoLists />}

      {active === 13 && <HodInbox />}
    </article>
  );
};

export default DepContent;
