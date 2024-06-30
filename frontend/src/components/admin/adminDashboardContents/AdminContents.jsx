import React from 'react';
import './AdminContents.scss';
import AllDepartments from '../allDepartments/AllDepartments';
import AllCourses from '../allCourses/AllCourses';
import AllProducts from '../allProducts/AllProducts';
import AllEvents from '../allEvents/AllEvents';
import AllJobs from '../allJobs/AllJobs';
import AdminRequests from '../allRequests/AdminRequests';
import AdminFeedbacks from '../allFeedbacks/AdminFeedbacks';
import AdminTodoLists from '../allTodoLists/AdminTodoLists';
import AllUsers from '../allUsers/AllUsers';
import AllEmployees from '../allEmployees/AllEmployees';
import OrderProcessing from '../AllOrderProcesses/OrderProcessing';
import AllOrders from '../allOrders/AllOrders';
import AllWithdraws from '../allWithdraws/AllWithdraws';
import AdminMessages from '../addMessages/AdminMessages';
import AllCategories from '../allCategories/AllCategories';
import AddRating from '../createRating/AddRating';
import AllEmployeeRoles from '../allEmployeeRoles/AllEmployeeRoles';

const AdminContents = ({ active }) => {
  return (
    <article className='admin-dashboard-contents-wrapper'>
      {active === 1 && (
        <section>
          <h2> Admin Dashboard Summary Information </h2>
        </section>
      )}

      {active === 2 && <AllDepartments />}

      {active === 3 && <AllCategories />}

      {active === 4 && <AllCourses />}

      {active === 5 && <AllProducts />}

      {active === 6 && <AllEvents />}

      {active === 7 && <AllJobs />}

      {active === 8 && <AllProducts />}

      {active === 9 && <AdminRequests />}

      {active === 10 && <AdminFeedbacks />}

      {active === 11 && <AdminTodoLists />}

      {active === 12 && <AllUsers />}

      {active === 13 && <AllEmployees />}

      {active === 14 && <OrderProcessing />}

      {active === 15 && <AllOrders />}

      {active === 16 && <AllWithdraws />}

      {active === 17 && <AddRating />}

      {active === 18 && <AllEmployeeRoles />}
      
      {active === 19 && <AdminMessages />}
    </article>
  );
};

export default AdminContents;
