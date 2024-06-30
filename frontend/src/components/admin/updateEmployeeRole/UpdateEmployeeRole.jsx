import { useState } from 'react';
import './UpdateEmployeeRole.scss';
import { Link } from 'react-router-dom';

const UpdateEmployeeRole = () => {
  // Local state variables
  const [roleName, setRolename] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [department, setDepartment] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-employe-role-wrapper">
      <h2 className="update-employe-role-title"> Update Employee Role </h2>

      <form action="" className="update-employe-role-form">
        {/* Employee Role Name */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="text"
            name={'roleName'}
            id={'roleName'}
            autoComplete="roleName"
            value={roleName}
            placeholder="Enter Category Name"
            className="input-field"
          />

          <label htmlFor={'roleName'} className="input-label">
            Employee Role Name
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Role Description */}
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
            Role Description
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Role Keywords */}
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
            Role Keywords
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

        <button className="update-employe-btn">Submit</button>
      </form>
      <ul>
        <li> Volunteer </li>
        <li> Intern </li>
        <li> Driver </li>
        <li> Receptionist </li>
        <li> HTML and CSS Teacher </li>
        <li> HTML, CSS and JavaSchript Teacher </li>
        <li> HTML, CSS, JavaSchript, and React Teacher </li>
        <li> Node.js, mangoDB and SQL Teacher </li>
        <li> PHP and MySQL Teacher </li>
        <li> Full Stack Teacher </li>
        <li> Project Manager</li>
        <li> Finance Manager</li>
        <li> Education Department Manager</li>
        <li> Shoping Department Manager</li>
        <li>Chief Executive Officer</li>
      </ul>
    </section>
  );
};

export default UpdateEmployeeRole;
