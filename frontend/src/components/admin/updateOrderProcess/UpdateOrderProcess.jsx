import  { useState } from 'react';
import './UpdateOrderProcess.scss';
import { Link } from 'react-router-dom';

const UpdateOrderProcess = () => {
  // Local state variables
  const [orderStepName, setOrderStepName] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-order-step-wrapper">
      <h2 className="update-order-step-title"> Add New Category</h2>

      <form action="" className="update-order-step-form">
        {/* Category Name */}
        <div className="input-container">
          <span className="icon"> {} </span>
          <input
            type="text"
            name={'orderStepName'}
            id={'orderStepName'}
            autoComplete="orderStepName"
            value={orderStepName}
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

        <button className="update-order-step-btn">Submit</button>
      </form>
      <ul>
        <li>Processing</li>
        <li>Transferred to delivery partner</li>
        <li>Shipping</li>
        <li>On the way</li>
        <li>Develivered</li>
      </ul>
    </section>
  );
};

export default UpdateOrderProcess;
