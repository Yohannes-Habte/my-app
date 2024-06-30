import { useState } from 'react';
import './UpdateProject.scss';
import { Link } from 'react-router-dom';

const UpdateProject = () => {
  // Local state variables
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [prjectEthics, setProjectEthics] = useState('');
  const [startDate, setStartData] = useState();
  const [endDate, setEndDate] = useState();
  const [mandatorySkills, setMandatorySkills] = useState();
  const [niceToHaveSkills, setNiceToHaveSkills] = useState();
  const [organization, setOrganization] = useState();
  const [location, setLocation] = useState();
  const [contact, setContact] = useState();
  const [agree, setAgree] = useState(false);
  return (
    <section className='update-project-wrapper'>
      <h2 className='update-project-title'> Create New Project</h2>
      <form action="" className="update-project-form">
        <div className="inputs-wrapper">
          {/* Project Title */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'projectTitle'}
              id={'projectTitle'}
              autoComplete="projectTitle"
              value={projectTitle}
              placeholder="Enter Project Title"
              className="input-field"
            />

            <label htmlFor={'projectTitle'} className="input-label">
              Project Title
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

          {/* Objectives */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'objectives'}
              id={'objectives'}
              autoComplete="objectives"
              value={objectives}
              placeholder="Enter Objectives"
              className="input-field"
            />

            <label htmlFor={'objectives'} className="input-label">
              Objectives
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

          {/* Project Budget */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'projectBudget'}
              id={'projectBudget'}
              autoComplete="projectBudget"
              value={projectBudget}
              placeholder="Enter Budget"
              className="input-field"
            />

            <label htmlFor={'projectBudget'} className="input-label">
              Project Budget
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Project Ethics */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'prjectEthics'}
              id={'prjectEthics'}
              autoComplete="prjectEthics"
              value={prjectEthics}
              placeholder="Project Ethics"
              className="input-field"
            />

            <label htmlFor={'prjectEthics'} className="input-label">
              Project Ethicss
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

          {/* Project Organization */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'organization'}
              id={'organization'}
              autoComplete="organization"
              value={organization}
              placeholder="Project Organization"
              className="input-field"
            />

            <label htmlFor={'organization'} className="input-label">
              Project Organization
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

        <button className="update-project-btn">Submit</button>
      </form>
    </section>
  );
};

export default UpdateProject;
