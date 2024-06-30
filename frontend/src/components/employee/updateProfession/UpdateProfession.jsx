import { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateProfession = () => {
  // Local state variables
  const [professionName, setProfessionName] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [department, setDepartment] = useState('');
  const [startDate, setStartData] = useState();
  const [endDate, setEndDate] = useState();
  const [experience, setExperience] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <section className="add-profession-wrapper">
      <h2 className="add-profession-title"> Add Profession</h2>
      <fieldset className="add-profession-fieldset">
        <legend className="add-profession-legend">Employee Profession</legend>
        <form action="" className="add-profession-form">
          {/* Profession Name */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'professionName'}
              id={'professionName'}
              autoComplete="professionName"
              value={professionName}
              placeholder="Enter Profession Name"
              className="input-field"
            />

            <label htmlFor={'professionName'} className="input-label">
              Profession Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Degree */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <select name="degree" id="degree" value={degree}>
              <option value="">Select Degree</option>
              <option value="">Bachelor Degree</option>
              <option value="">Master Degree</option>
              <option value=""> PHD </option>
              <option value=""> Other </option>
            </select>

            <label htmlFor={'degree'} className="input-label">
              Degree
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* University */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'university'}
              id={'university'}
              autoComplete="university"
              value={university}
              placeholder="Enter University"
              className="input-field"
            />

            <label htmlFor={'university'} className="input-label">
              University
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'department'}
              id={'department'}
              autoComplete="department"
              value={department}
              placeholder="Enter Department"
              className="input-field"
            />

            <label htmlFor={'department'} className="input-label">
              Department
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

          <button className="add-category-btn">Submit</button>
        </form>
      </fieldset>
    </section>
  );
};

export default UpdateProfession;
