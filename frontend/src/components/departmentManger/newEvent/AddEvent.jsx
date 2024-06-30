import { useEffect, useState } from 'react';
import './AddEvent.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../../redux/reducers/eventReducer';
import * as Category from '../../../redux/reducers/categoryReducer';
import * as Department from '../../../redux/reducers/depReducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  eventName: '',
  description: '',
  keywords: '',
  originalPrice: '',
  discountPrice: '',
  eventImages: '',
  stock: '',
  tag: '',
  department: '',
  category: '',
  startDate: '',
  endDate: '',
  agree: false,
};

const AddEvent = ({ setOpen }) => {
  // Global icons
  const {
    closeIcon,
    depIcon,
    categoryIcon,
    messageIcon,
    productIcon,
    priceIcon,
    uploadIcon,
    eventIcon,
    dateIcon,
  } = ReactIcons();

  // Gloabl state variables
  const { p_postLoading } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Local state variables
  const [eventInfos, setEventInfos] = useState({ initialState });
  // Destructing the courseInfos
  const {
    eventName,
    description,
    keywords,
    originalPrice,
    discountPrice,
    eventImages,
    tag,
    department,
    category,
    stock,
    startDate,
    endDate,
    agree,
  } = eventInfos;

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
    setEventInfos({ ...eventInfos, [name]: value });
  };

  // Reset courseInfos variables
  const reset = () => {
    setEventInfos({
      eventName: '',
      description: '',
      keywords: '',
      originalPrice: '',
      discountPrice: '',
      eventImages: '',
      stock: '',
      tag: '',
      department: '',
      category: '',
      startDate: '',
      endDate: '',
      agree: false,
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(Action.postEventStart());
      const newEvent = {
        eventName: eventName,
        description: description,
        keywords: keywords,
        originalPrice: originalPrice,
        discountPrice: discountPrice,
        eventImages: eventImages,
        stock: stock,
        tag: tag,
        department: department,
        category: category,
        startDate: startDate,
        endDate: endDate,
        agree: agree,
      };
      const { data } = await axios.post(`${API}/events/new-event`, newEvent);

      dispatch(Action.postEventSuccess(data.event));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(Action.postEventFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-event-modal">
      <section className="add-event-popup-box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-event-title"> Create New Event</h2>

        <form action="" onSubmit={handleSubmit} className="add-event-form">
          <div className="inputs-wrapper">
            {/* Event Name */}
            <div className="input-container">
              <span className="input-icon"> {eventIcon} </span>
              <input
                type="text"
                name={'eventName'}
                id={'eventName'}
                autoComplete="eventName"
                value={eventName}
                onChange={updateChange}
                placeholder="Enter Event Name"
                className="input-field"
              />

              <label htmlFor={'eventName'} className="input-label">
                Event Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Event Description */}
            <div className="input-container">
              <span className="input-icon"> {messageIcon} </span>
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

            {/* Event Keywords */}
            <div className="input-container">
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'keywords'}
                id={'keywords'}
                autoComplete="keywords"
                value={keywords}
                onChange={updateChange}
                placeholder="Enter Keywords"
                className="input-field"
              />

              <label htmlFor={'keywords'} className="input-label">
                Event Keywords
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Original Price */}
            <div className="input-container">
              <span className="input-icon"> {priceIcon} </span>
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
              <span className="input-icon"> {priceIcon} </span>
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

            {/* Event Images */}
            <div className="input-container">
              <span className="input-icon"> {uploadIcon} </span>
              <input
                type="file"
                name={'eventImages'}
                id={'eventImages'}
                autoComplete="eventImages"
                value={eventImages}
                onChange={updateChange}
                className="input-field"
              />

              <label htmlFor={'discountPrice'} className="input-label">
                Event Images
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Stock */}
            <div className="input-container">
              <span className="input-icon"> {productIcon} </span>
              <input
                type="number"
                name={'stock'}
                id={'stock'}
                autoComplete="stock"
                value={stock}
                onChange={updateChange}
                placeholder="Enter Stock"
                className="input-field"
              />

              <label htmlFor={'stock'} className="input-label">
                Stock
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Tag */}
            <div className="input-container">
              <span className="input-icon"> {productIcon} </span>
              <input
                type="number"
                name={'tag'}
                id={'tag'}
                autoComplete="tag"
                value={tag}
                onChange={updateChange}
                placeholder="Enter Product Tag"
                className="input-field"
              />

              <label htmlFor={'tag'} className="input-label">
                Event Tag
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
              <span className="input-icon"> {categoryIcon} </span>
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
              <span className="input-icon"> {dateIcon} </span>
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
              <span className="input-icon"> {dateIcon} </span>
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

          <button className="add-new-event-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddEvent;
