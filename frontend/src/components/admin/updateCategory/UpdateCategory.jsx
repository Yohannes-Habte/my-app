import { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateCategory = () => {
  // Local state variables
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [department, setDepartment] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-category-wrapper">
      <h2 className="update-category-title"> Update Category</h2>

      <form action="" className="update-category-form">
        {/* Category Name */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="text"
            name={'categoryName'}
            id={'categoryName'}
            autoComplete="categoryName"
            value={categoryName}
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
          <span className="icon"> {} </span>
          <textarea
            name="description"
            id="description"
            value={description}
            cols="30"
            rows="10"
          ></textarea>

          <label htmlFor={'description'} className="input-label">
            Description
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Department Keywords */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <textarea
            name="keywords"
            id="keywords"
            value={keywords}
            cols="30"
            rows="10"
          ></textarea>

          <label htmlFor={'keywords'} className="input-label">
            Keywords
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

        <button className="update-category-btn">Submit</button>
      </form>
      <ul>
        <li>Leadership</li>
        <li>Online Marketing</li>
        <li>E-Commerce</li>
        <li>Web & Software Development</li>
        <li>Research</li>
        <li>Books</li>
        <li>Clothes</li>
        <li>Foods</li>
      </ul>
    </section>
  );
};

export default UpdateCategory;
