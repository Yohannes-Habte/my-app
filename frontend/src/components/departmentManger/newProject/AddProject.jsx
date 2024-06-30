import { useEffect, useState } from 'react';
import './AddProject.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionProject from '../../../redux/reducers/projectReducer';
import * as Category from '../../../redux/reducers/categoryReducer';
import * as Department from '../../../redux/reducers/depReducer';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  projectTitle: '',
  description: '',
  objectives: '',
  department: '',
  category: '',
  projectBudget: '',
  prjectEthics: '',
  startDate: '',
  endDate: '',
  mandatorySkills: '',
  niceToHaveSkills: '',
  organization: '',
  location: '',
  contact: '',
};

const AddProject = ({ setOpen }) => {
  const {
    closeIcon,
    projectIcon,
    depIcon,
    categoryIcon,
    messageIcon,
    profesionIcon,
    addressIcon,
    locationIcon,
    priceIcon,
    dateIcon,
  } = ReactIcons();

  // Gloabl state variables
  const { projectPostLoading, error } = useSelector((state) => state.project);
  const { categories } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Local state variables
  const [projectInfos, setProjectInfos] = useState('');
  const [agree, setAgree] = useState(false);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInfos({ ...projectInfos, [name]: value });
  };

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

  // Destructuring
  const {
    projectTitle,
    description,
    objectives,
    department,
    category,
    projectBudget,
    prjectEthics,
    startDate,
    endDate,
    mandatorySkills,
    niceToHaveSkills,
    organization,
    location,
    contact,
  } = projectInfos;

  // handle rest
  const reset = () => {
    setProjectInfos({
      projectTitle: '',
      description: '',
      objectives: '',
      department: '',
      category: '',
      projectBudget: '',
      prjectEthics: '',
      startDate: '',
      endDate: '',
      mandatorySkills: '',
      niceToHaveSkills: '',
      organization: '',
      location: '',
      contact: '',
    });

    setAgree(false);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(ActionProject.postProjectStart());
      const newProject = {
        projectTitle: projectTitle,
        description: description,
        objectives: objectives,
        department: department,
        category: category,
        projectBudget: projectBudget,
        prjectEthics: prjectEthics,
        startDate: startDate,
        endDate: endDate,
        mandatorySkills: mandatorySkills,
        niceToHaveSkills: niceToHaveSkills,
        organization: organization,
        location: location,
        contact: contact,
        agree: agree,
      };
      const { data } = await axios.post(
        `${API}/projects/new-project`,
        newProject
      );

      dispatch(ActionProject.postProjectSuccess(data.project));
      toast.success(data.message);
      reset();
    } catch (err) {
      dispatch(ActionProject.postProjectFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-project-modal">
      <section className="add-project-popup-box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-project-title"> Create New Project</h2>
        <form action="" onSubmit={handleSubmit} className="add-project-form">
          <div className="inputs-wrapper">
            {/* Project Title */}
            <div className="input-container">
              <span className="input-icon"> {projectIcon} </span>
              <input
                type="text"
                name={'projectTitle'}
                id={'projectTitle'}
                autoComplete="projectTitle"
                value={projectTitle}
                onChange={handleChange}
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
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'description'}
                id={'description'}
                autoComplete="description"
                value={description}
                onChange={handleChange}
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
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'objectives'}
                id={'objectives'}
                autoComplete="objectives"
                value={objectives}
                onChange={handleChange}
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
              <span className="input-icon"> {depIcon} </span>
              <select
                name="department"
                id="department"
                value={department}
                onChange={handleChange}
                className="input-field"
              >
                <option value="Default">Select a Department</option>
                {departments &&
                  departments.map((dep) => {
                    return (
                      <option key={dep._id} value={dep._id}>
                        {dep.departmentName}
                      </option>
                    );
                  })}
              </select>

              <label htmlFor={'department'} className="input-label">
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
                onChange={handleChange}
                className="input-field"
              >
                <option value="Default">Select a Category</option>

                {categories &&
                  categories.map((cat) => {
                    return (
                      <option key={cat._id} value={cat._id}>
                        {cat.categoryName}
                      </option>
                    );
                  })}
              </select>

              <label htmlFor={'category'} className="input-label">
                Select Category
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Project Budget */}
            <div className="input-container">
              <span className="input-icon"> {priceIcon} </span>
              <input
                type="number"
                name={'projectBudget'}
                id={'projectBudget'}
                autoComplete="projectBudget"
                value={projectBudget}
                onChange={handleChange}
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
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'prjectEthics'}
                id={'prjectEthics'}
                autoComplete="prjectEthics"
                value={prjectEthics}
                onChange={handleChange}
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
              <span className="input-icon"> {dateIcon} </span>
              <input
                type="date"
                name={'startDate'}
                id={'startDate'}
                autoComplete="startDate"
                value={startDate}
                onChange={handleChange}
                placeholder="Enter Starting Date"
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
                onChange={handleChange}
                placeholder="Enter End Date"
                className="input-field"
              />

              <label htmlFor={'endDate'} className="input-label">
                Ending Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Mandatory Skills*/}
            <div className="input-container">
              <span className="input-icon"> {profesionIcon} </span>
              <input
                type="text"
                name={'mandatorySkills'}
                id={'mandatorySkills'}
                autoComplete="mandatorySkills"
                value={mandatorySkills}
                onChange={handleChange}
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
              <span className="input-icon"> {profesionIcon} </span>
              <input
                type="text"
                name={'niceToHaveSkills'}
                id={'niceToHaveSkills'}
                autoComplete="niceToHaveSkills"
                value={niceToHaveSkills}
                onChange={handleChange}
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
              <span className="input-icon"> {projectIcon} </span>
              <input
                type="text"
                name={'organization'}
                id={'organization'}
                autoComplete="organization"
                value={organization}
                onChange={handleChange}
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
              <span className="input-icon"> {locationIcon} </span>
              <input
                type="text"
                name={'location'}
                id={'location'}
                autoComplete="location"
                value={location}
                onChange={handleChange}
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
              <span className="input-icon"> {addressIcon} </span>
              <input
                type="text"
                name={'contact'}
                id={'contact'}
                autoComplete="contact"
                value={contact}
                onChange={handleChange}
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
              onChange={() => setAgree(!agree)}
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-project-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddProject;
