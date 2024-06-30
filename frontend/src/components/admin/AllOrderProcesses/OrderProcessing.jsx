import { useEffect, useState } from 'react';
import './OrderProcessing.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionStep from '../../../redux/reducers/orderStepsReducer';
import * as Category from '../../../redux/reducers/categoryReducer';
import * as Department from '../../../redux/reducers/depReducer';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  orderStepName: '',
  department: '',
  category: '',
};

const OrderProcessing = () => {
  // Global react icons
  const { orderIcon, depIcon, categoryIcon } = ReactIcons();

  // Gloabl state variables
  const { stepPostLoading, error } = useSelector((state) => state.orderProcess);
  const { categories } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Local state variables
  const [orderProcedures, setOrderProcedures] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructuring
  const { orderStepName, department, category } = orderProcedures;

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderProcedures({ ...orderProcedures, [name]: value });
  };

  // Get all Categores
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        dispatch(Category.getCategoriesStart());
        const { data } = await axios.get(`${URL}/categories`);

        dispatch(Category.getCategoriesSuccess(data.categories));
      } catch (error) {
        dispatch(Category.getCategoriesFailure(error.response.data.message));
      }
    };
    getAllCategories();
  }, []);

  // Get all Departments
  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        dispatch(Department.getDepartmentsStart());
        const { data } = await axios.get(`${API}/departments`);

        dispatch(Department.getDepartmentsSuccess(data.departments));
      } catch (error) {
        dispatch(Department.getDepartmentsFailure(error.response.data.message));
      }
    };
    getAllDepartments();
  }, []);

  // reset variables
  const reset = () => {
    setOrderProcedures({
      orderStepName: '',
      department: '',
      category: '',
    });

    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionStep.postOrderStepStart());
      const newStep = {
        orderStepName: orderStepName,
        department: department,
        category: category,
        agree: agree,
      };
      const { data } = await axios.post(`${API}/procedures/new-step`, newStep);

      dispatch(ActionStep.postOrderStepSuccess(data.step));
      toast.success(data.message);
      reset();
    } catch (err) {
      dispatch(ActionStep.postOrderStepFailure(err.response.data.message));
    }
  };

  return (
    <article className="order-steps-wrapper">
      <h2 className="order-steps-title">Order Processing Steps</h2>
      <section className="add-order-step-wrapper">
        <h2 className="add-order-step-title"> Add New Category</h2>
        {error ? <p className="error-message"> {error} </p> : ''}
        <form action="" onSubmit={handleSubmit} className="add-order-step-form">
          {/* Order Step Name */}
          <div className="input-container">
            <span className="input-icon"> {orderIcon} </span>
            <input
              type="text"
              name={'orderStepName'}
              id={'orderStepName'}
              autoComplete="orderStepName"
              value={orderStepName}
              onChange={handleChange}
              placeholder="Enter Order Step Name"
              className="input-field"
            />

            <label htmlFor={'orderStepName'} className="input-label">
              Order Step Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="input-icon"> {depIcon} </span>
            <select
              name="department"
              id="department"
              value={department}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Default">Select a Department</option>
              {departments &&
                departments.map((dep) => {
                  return (
                    <option value={dep._id}> {dep.departmentName} </option>
                  );
                })}
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Department
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Category */}
          <div className="input-container">
            <span className="input-icon"> {categoryIcon} </span>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Default">Select a Category</option>

              {categories &&
                categories.map((cat) => {
                  return <option value={cat._id}> {cat.categoryName} </option>;
                })}
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Category
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-order-step-btn"> Send </button>
        </form>
      </section>
    </article>
  );
};

export default OrderProcessing;
