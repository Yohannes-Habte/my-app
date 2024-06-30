import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './views/homePage/HomePage';
import AboutPage from './views/aboutPage/AboutPage';
import CoursesPage from './views/coursesPage/CoursesPage';
import ProductsPage from './views/productsPages/productsPage/ProductsPage';
import ResearchPage from './views/researchPage/ResearchPage';
import FAQsPage from './views/faqPage/FAQsPage';
import ContactPage from './views/contactPage/ContactPage';
import UserRegister from './views/userPages/registerPage/UserRegister';
import UserLogin from './views/userPages/loginPage/UserLogin';
import UserProfilePage from './views/userPages/profilePage/UserProfilePage';
import HodDashboardPage from './views/hodPages/hodDashboardPage/HodDashboardPage';
import AdminDashboardPage from './views/adminPages/adminDashboarPage/AdminDashboardPage';
import EmployeeDashboardpage from './views/employeePages/employeeDashboarPage/EmployeeDashboardpage';
import FinanceDashboardpage from './views/financeMgtPages/financeDashboardPage/FinanceDashboardpage';
import EmployeeLoginPage from './views/employeePages/employeeLoginPage/EmployeeLoginPage';
import EmployeeSignupPage from './views/employeePages/employeeSignupPage/EmployeeSignupPage';
import ForgotPassword from './components/forms/forgotPassword/ForgotPassword';
import ResetPassword from './components/forms/resetPassword/ResetPassword';
import UpdateTodo from './components/forms/updateTodo/UpdateTodo';

export const myContext = React.createContext();

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/todos/update/:id" element={<UpdateTodo />} />

          {/* User Pages */}
          <Route path="/user/profile" element={<UserProfilePage />} />

          {/* Employees Pages */}
          <Route path="/employee/login" element={<EmployeeLoginPage />} />
          <Route path="/employee/signup" element={<EmployeeSignupPage />} />
          <Route
            path="/employee/dashboard"
            element={<EmployeeDashboardpage />}
          />

          {/* Department Pages */}
          <Route path="/hod/dashboard" element={<HodDashboardPage />} />

          {/* CFO Pages */}
          <Route path="/cfo/dashboard" element={<FinanceDashboardpage />} />

          {/* Admin Pages */}
          <Route path="/ceo/dashboard" element={<AdminDashboardPage />} />
        </Routes>

        {/* React toastify */}
        <ToastContainer
          position="top-right"
          limit={1}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </div>
  );
};

export default App;
