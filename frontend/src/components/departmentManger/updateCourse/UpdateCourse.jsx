import  { useState } from 'react';
import './UpdateCourse.scss';
import { Link } from 'react-router-dom';

const UpdateCourse = () => {
  // Local state variables
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartData] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('');
  const [tag, setTag] = useState();
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-course-wrapper">
      <h2 className="update-course-title"> Update Course</h2>

      <form action="" className="update-course-form">
        <div className="inputs-wrapper">
          {/* Course Name */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'courseName'}
              id={'courseName'}
              autoComplete="courseName"
              value={courseName}
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
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'description'}
              id={'description'}
              autoComplete="description"
              value={description}
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
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'originalPrice'}
              id={'originalPrice'}
              autoComplete="originalPrice"
              value={originalPrice}
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
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'originalPrice'}
              id={'originalPrice'}
              autoComplete="originalPrice"
              value={discountPrice}
              placeholder="Enter Original Price"
              className="input-field"
            />

            <label htmlFor={'discountPrice'} className="input-label">
              Original Price
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Discounted  Price */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'originalPrice'}
              id={'originalPrice'}
              autoComplete="originalPrice"
              value={discountPrice}
              placeholder="Enter Original Price"
              className="input-field"
            />

            <label htmlFor={'discountPrice'} className="input-label">
              Original Price
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <select name="department" id="department" value={department}>
              <option value="Default">Select a Category</option>
              <option value="education">Education Department</option>
              <option value="shopping">Shopping Department</option>
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Department
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Category */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <select name="category" id="category" value={category}>
              <option value="Default">Select a Category</option>
              <option value="education">Leadership</option>
              <option value="shopping"> Online Marketing</option>
              <option value="education">Ecommerce Platforms</option>
              <option value="education"> Web & Software Development</option>
              <option value="education"> Research </option>
              <option value="education"> Books </option>
              <option value="education"> Clothes </option>
              <option value="education"> Foods </option>
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Category
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Starting date */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="date"
              name={'startDate'}
              id={'startDate'}
              autoComplete="startDate"
              value={startDate}
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
            <span className="icon"> {} </span>
            <input
              type="date"
              name={'endDate'}
              id={'endDate'}
              autoComplete="endDate"
              value={endDate}
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
            <span className="icon"> {} </span>
            <select
              name="selectLanguage"
              id="selectLanguage"
              value={selectLanguage}
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
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'tag'}
              id={'tag'}
              autoComplete="tag"
              value={tag}
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
            className="consent-checkbox"
          />
          <label htmlFor="agree" className="accept">
            I accept
          </label>

          <Link className={'terms-of-user'}> Terms of Use</Link>
        </div>

        <button className="update-course-btn">Submit</button>
      </form>
    </section>
  );
};

export default UpdateCourse;
