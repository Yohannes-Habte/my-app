import React, { useEffect, useState } from 'react';
import './AddCourse.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../../redux/reducers/courseReducer';
import * as Category from '../../../redux/reducers/categoryReducer';
import * as Department from '../../../redux/reducers/depReducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  courseName: '',
  description: '',
  originalPrice: '',
  discountPrice: '',
  department: '',
  category: '',
  startDate: '',
  endDate: '',
  selectLanguage: '',
  tag: '',
  agree: false,
};

const AddCourse = ({ setOpen }) => {
  // Global Icons
  const {
    closeIcon,
    depIcon,
    categoryIcon,
    messageIcon,
    courseIcon,
    priceIcon,
    dateIcon,
    languageIcon,
  } = ReactIcons();

  // Gloabl state variables
  const { c_postLoading } = useSelector((state) => state.course);
  const { categories } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();


  // Local state variables
  const [courseInfos, setCourseInfos] = useState({ initialState });

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

  // Update change input data
  const updateChange = (e) => {
    const { name, value } = e.target;
    setCourseInfos({ ...courseInfos, [name]: value });
  };

  // Destructing the courseInfos
  const {
    courseName,
    description,
    originalPrice,
    discountPrice,
    department,
    category,
    startDate,
    endDate,
    selectLanguage,
    tag,
    agree,
  } = courseInfos;

  // Reset courseInfos variables
  const reset = () => {
    setCourseInfos({
      courseName: '',
      description: '',
      originalPrice: '',
      discountPrice: '',
      department: '',
      category: '',
      startDate: '',
      endDate: '',
      selectLanguage: '',
      tag: '',
      agree: false,
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(Action.postCouseStart());
      const newCourse = {
        courseName: courseName,
        description: description,
        originalPrice: originalPrice,
        discountPrice: discountPrice,
        department: department,
        category: category,
        startDate: startDate,
        endDate: endDate,
        selectLanguage: selectLanguage,
        tag: tag,
        agree: agree,
      };
      const { data } = await axios.post(`${API}/courses/new-course`, newCourse);

      dispatch(Action.postCouseSuccess(data.course));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(Action.postCouseFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-course-modal">
      <section className="add-course-popup-box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-course-title"> Add New Course</h2>

        <form action="" onSubmit={handleSubmit} className="add-course-form">
          <div className="inputs-wrapper">
            {/* Course Name */}
            <div className="input-container">
              <span className="inpute-icon"> {courseIcon} </span>
              <input
                type="text"
                name={'courseName'}
                id={'courseName'}
                autoComplete="courseName"
                value={courseName}
                onChange={updateChange}
                placeholder="Enter Course Name"
                className="input-field"
              />

              <label htmlFor={'courseName'} className="input-label">
                Course Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Description */}
            <div className="input-container">
              <span className="inpute-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'description'}
                id={'description'}
                autoComplete="description"
                value={description}
                onChange={updateChange}
                placeholder="Enter Description"
                className="input-field"
              />

              <label htmlFor={'description'} className="input-label">
                Course Description
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Original Price */}
            <div className="input-container">
              <span className="inpute-icon"> {priceIcon} </span>
              <input
                type="number"
                name={'originalPrice'}
                id={'originalPrice'}
                autoComplete="originalPrice"
                value={originalPrice}
                onChange={updateChange}
                placeholder="Enter Original Price"
                className="input-field"
              />

              <label htmlFor={'originalPrice'} className="input-label">
                Original Price
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Discounted  Price */}
            <div className="input-container">
              <span className="inpute-icon"> {priceIcon} </span>
              <input
                type="number"
                name={'discountPrice'}
                id={'discountPrice'}
                autoComplete="discountPrice"
                value={discountPrice}
                onChange={updateChange}
                placeholder="Enter Discount Price"
                className="input-field"
              />

              <label htmlFor={'discountPrice'} className="input-label">
                Discount Price
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Department */}
            <div className="input-container">
              <span className="inpute-icon"> {depIcon} </span>
              <select
                name="department"
                id="department"
                value={department}
                onChange={updateChange}
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
              <span className="inpute-icon"> {categoryIcon} </span>
              <select
                name="category"
                id="category"
                value={category}
                onChange={updateChange}
                className="input-field"
              >
                <option value="Default">Select a Category</option>

                {categories &&
                  categories.map((cat) => {
                    return (
                      <option value={cat._id}> {cat.categoryName} </option>
                    );
                  })}
              </select>

              <label htmlFor={'firstName'} className="input-label">
                Select Category
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Starting date */}
            <div className="input-container">
              <span className="inpute-icon"> {dateIcon} </span>
              <input
                type="date"
                name={'startDate'}
                id={'startDate'}
                autoComplete="startDate"
                value={startDate}
                onChange={updateChange}
                placeholder="Enter Course Name"
                className="input-field"
              />

              <label htmlFor={'startDate'} className="input-label">
                Starting Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Ending date */}
            <div className="input-container">
              <span className="inpute-icon"> {dateIcon} </span>
              <input
                type="date"
                name={'endDate'}
                id={'endDate'}
                autoComplete="endDate"
                value={endDate}
                onChange={updateChange}
                placeholder="Enter Course Name"
                className="input-field"
              />

              <label htmlFor={'endDate'} className="input-label">
                Ending Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Language */}
            <div className="input-container">
              <span className="inpute-icon"> {languageIcon} </span>
              <select
                name="selectLanguage"
                id="selectLanguage"
                value={selectLanguage}
                onChange={updateChange}
                className="input-field"
              >
                <option value="Default">Select a Language</option>
                <option value="education">English</option>
                <option value="shopping">Tigrigna </option>
                <option value="shopping">Germany </option>
              </select>

              <label htmlFor={'selectLanguage'} className="input-label">
                Select Language
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Course Tag */}
            <div className="input-container">
              <span className="inpute-icon"> {courseIcon} </span>
              <input
                type="text"
                name={'tag'}
                id={'tag'}
                autoComplete="tag"
                value={tag}
                onChange={updateChange}
                placeholder="Enter Course Name"
                className="input-field"
              />

              <label htmlFor={'tag'} className="input-label">
                Course Tag
              </label>
              <span className="input-highlight"></span>
            </div>
          </div>

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              onChange={updateChange}
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-course-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddCourse;
