import { useState } from 'react';
import './UpdateJob.scss';
import { Link } from 'react-router-dom';

const UpdateJob = () => {
  // Local state variables
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [mandatorySkills, setMandatorySkills] = useState();
  const [niceToHaveSkills, setNiceToHaveSkills] = useState();
  const [position, setPosition] = useState();
  const [responsibilites, setResponsibilities] = useState();
  const [location, setLocation] = useState();
  const [contact, setContact] = useState();
  const [benefits, setBenefits] = useState();
  const [agree, setAgree] = useState();

  return (
    <section className="update-job-wrapper">
      <h2 className="update-job-title"> Update Job </h2>
      <form action="" className="update-job-form">
        <div className="inputs-wrapper">
          {/* Job title */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'jobTitle'}
              id={'jobTitle'}
              autoComplete="jobTitle"
              value={jobTitle}
              placeholder="Enter Job Title"
              className="input-field"
            />

            <label htmlFor={'jobTitle'} className="input-label">
              Job Title
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Job Description */}
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

          {/* Education */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'education'}
              id={'education'}
              autoComplete="education"
              value={education}
              placeholder="Enter Education"
              className="input-field"
            />

            <label htmlFor={'education'} className="input-label">
              Education
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Experience */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'experience'}
              id={'experience'}
              autoComplete="experience"
              value={experience}
              placeholder="Enter Experience"
              className="input-field"
            />

            <label htmlFor={'experience'} className="input-label">
              Experience
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Mandatory Skills*/}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'mandatorySkills'}
              id={'mandatorySkills'}
              autoComplete="mandatorySkills"
              value={mandatorySkills}
              placeholder="Mandatory Skills"
              className="input-field"
            />

            <label htmlFor={'mandatorySkills'} className="input-label">
              Mandatory Skills
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Nice to have Skills*/}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'niceToHaveSkills'}
              id={'niceToHaveSkills'}
              autoComplete="niceToHaveSkills"
              value={niceToHaveSkills}
              placeholder="Nice to have Skills"
              className="input-field"
            />

            <label htmlFor={'niceToHaveSkills'} className="input-label">
              Nice to have Skills
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Position */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'position'}
              id={'position'}
              autoComplete="position"
              value={position}
              placeholder="Position"
              className="input-field"
            />

            <label htmlFor={'position'} className="input-label">
              Position
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Responsibilities */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'responsibilites'}
              id={'responsibilites'}
              autoComplete="responsibilites"
              value={responsibilites}
              placeholder="Enter Responsibilities"
              className="input-field"
            />

            <label htmlFor={'responsibilites'} className="input-label">
              Responsibilities
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Location */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'location'}
              id={'location'}
              autoComplete="location"
              value={location}
              placeholder="Enter Location"
              className="input-field"
            />

            <label htmlFor={'location'} className="input-label">
              Location
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Contact */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'contact'}
              id={'contact'}
              autoComplete="contact"
              value={contact}
              placeholder="Enter Contact"
              className="input-field"
            />

            <label htmlFor={'contact'} className="input-label">
              Contact
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Benefits */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'benefits'}
              id={'benefits'}
              autoComplete="benefits"
              value={benefits}
              placeholder="Enter Benefits"
              className="input-field"
            />

            <label htmlFor={'benefits'} className="input-label">
              Benefits
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

        <button className="update-job-btn">Submit</button>
      </form>
    </section>
  );
};

export default UpdateJob;
