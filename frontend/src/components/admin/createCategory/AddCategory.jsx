import  { useEffect, useState } from 'react';
import './AddCategory.scss';
import { Link, useNavigate } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import * as Action from '../../../redux/reducers/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as ActionDep from '../../../redux/reducers/depReducer';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  categoryName: '',
  description: '',
  keywords: '',
  department: '',
};
const AddCategory = ({ setOpen }) => {
  // Navigate to
  const navigate = useNavigate();

  // Gloabl state variables
  const { depPostLoading } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Global icons
  const { closeIcon, categoryIcon, depIcon, paragraphIcon } = ReactIcons();

  // Local state variables
  const [categoryInfos, setCategoryInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing category data
  const { categoryName, description, keywords, department } = categoryInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryInfos({ ...categoryInfos, [name]: value });
  };
  
  // Get all Departments
  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        dispatch(ActionDep.getDepartmentsStart());
        const { data } = await axios.get(`${URL}/departments`);

        dispatch(ActionDep.getDepartmentsSuccess(data.departments));
      } catch (error) {
        dispatch(ActionDep.getDepartmentsFailure(error.response.data.message));
      }
    };
    getAllDepartments();
  }, []);

  // Reset the variables to their initial value or state
  const reset = () => {
    setCategoryInfos({
      categoryName: '',
      description: '',
      keywords: '',
      department: '',
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(Action.postCategoryStart());
      const newCategory = {
        categoryName: categoryName,
        description: description,
        keywords: keywords,
        department: department,
        agree: agree,
      };
      const { data } = await axios.post(
        `${API}/categories/new-category`,
        newCategory
      );

      dispatch(Action.postCategorySuccess(data.user));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(Action.postCategoryFailure(err.response.data.message));
    }
  };

  return (
    <article className="ceo-category-modal">
      <section className="new-category-popup-Box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-category-title"> Add New Category</h2>

        <form action="" onSubmit={handleSubmit} className="add-category-form">
          {/* Category Name */}
          <div className="input-container">
            <span className="icon"> {categoryIcon} </span>
            <input
              type="text"
              name={'categoryName'}
              id={'categoryName'}
              autoComplete="categoryName"
              value={categoryName}
              onChange={handleChange}
              placeholder="Enter Category Name"
              className="input-field"
            />

            <label htmlFor={'firstName'} className="input-label">
              Categrory Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Description */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="8"
              placeholder="Enter Paragraph"
              className="input-field"
            ></textarea>

            <label htmlFor={'description'} className="input-label">
              Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Keywords */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="keywords"
              id="keywords"
              value={keywords}
              onChange={handleChange}
              cols="30"
              rows="8"
              placeholder="Enter Keywords"
              className="input-field"
            ></textarea>

            <label htmlFor={'keywords'} className="input-label">
              Keywords
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {depIcon} </span>
            <select
              name="department"
              id="department"
              value={department}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Default"> Select Department </option>
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

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-category-btn">Add Category</button>
        </form>
      </section>
    </article>
  );
};

export default AddCategory;
