import  { useState } from 'react';
import './UpdateDepartment.scss';
import { Link } from 'react-router-dom';

const UpdateDepartment = () => {
  // Local state variables
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-department-wrapper">
      <h2 className="update-department-title"> Update Department</h2>

      <form action="" className="update-department-form">
        {/* Select Department */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="text"
            name={'departmentName'}
            id={'departmentName'}
            autoComplete="departmentName"
            value={departmentName}
            placeholder="Enter Category Name"
            className="input-field"
          />

          <label htmlFor={'departmentName'} className="input-label">
            Department Name
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

        <button className="update-department-btn">Submit</button>
      </form>
      <ul>
        <li>Education</li>
        <li>Shopping</li>
      </ul>
    </section>
  );
};

export default UpdateDepartment;
