import { useEffect, useState } from 'react';
import './AddJob.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionJob from '../../../redux/reducers/jobReducer';
import * as Category from '../../../redux/reducers/categoryReducer';
import * as Department from '../../../redux/reducers/depReducer';
import * as ActionRole from '../../../redux/reducers/employeeRoleReducer';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  jobTitle: '',
  description: '',
  department: '',
  category: '',
  education: '',
  experience: '',
  mandatorySkills: '',
  niceToHaveSkills: '',
  roleTitle: '',
  responsibilites: '',
  location: '',
  contact: '',
  benefits: '',
  salary: '',
};

const AddJob = ({ setOpen }) => {
  // Global icons
  const {
    closeIcon,
    depIcon,
    categoryIcon,
    messageIcon,
    jobIcon,
    profesionIcon,
    roleIcon,
    addressIcon,
    locationIcon,
    userIcon,
    priceIcon,
  } = ReactIcons();

  // Gloabl state variables
  const { stepPostLoading, error } = useSelector((state) => state.orderProcess);
  const { categories } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const { employeeRoles } = useSelector((state) => state.employeeRole);
  const dispatch = useDispatch();

  console.log('Employee role:', employeeRoles);
  // Local state variables
  const [jobInfos, setJobsInfos] = useState(initialState);
  const [agree, setAgree] = useState();

  // Destructuing
  const {
    jobTitle,
    description,
    department,
    category,
    education,
    experience,
    mandatorySkills,
    niceToHaveSkills,
    roleTitle,
    responsibilites,
    location,
    contact,
    benefits,
    salary,
  } = jobInfos;

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobsInfos({ ...jobInfos, [name]: value });
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

  // Get all Employee roles
  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        dispatch(ActionRole.getEmployeeRolesStart());
        const { data } = await axios.get(`${API}/roles`);

        dispatch(ActionRole.getEmployeeRolesSuccess(data.roles));
      } catch (error) {
        dispatch(
          ActionRole.getEmployeeRolesFailure(error.response.data.message)
        );
      }
    };
    getAllDepartments();
  }, []);

  // handle rest
  const reset = () => {
    setJobsInfos({
      jobTitle: '',
      description: '',
      department: '',
      category: '',
      education: '',
      experience: '',
      mandatorySkills: '',
      niceToHaveSkills: '',
      roleTitle: '',
      responsibilites: '',
      location: '',
      contact: '',
      benefits: '',
      salary: '',
    });

    setAgree(false);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(ActionJob.postJobStart());
      const newJob = {
        jobTitle: jobTitle,
        description: description,
        department: department,
        category: category,
        education: education,
        experience: experience,
        mandatorySkills: mandatorySkills,
        niceToHaveSkills: niceToHaveSkills,
        roleTitle: roleTitle,
        responsibilites: responsibilites,
        location: location,
        contact: contact,
        benefits: benefits,
        salary: salary,
        agree:agree
      };
      const { data } = await axios.post(`${API}/jobs/new-job`, newJob);

      dispatch(ActionJob.postJobSuccess(data.job));
      toast.success(data.message);
      reset();
    } catch (err) {
      dispatch(ActionJob.postJobFailure(err.response.data.message));
    }
  };
  
  return (
    <article className="add-job-modal">
      <section className="add-job-popup-box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-job-title"> Add New Job </h2>
        <form action="" onSubmit={handleSubmit} className="add-job-form">
          <div className="inputs-wrapper">
            {/* Job title */}
            <div className="input-container">
              <span className="input-icon"> {jobIcon} </span>
              <input
                type="text"
                name={'jobTitle'}
                id={'jobTitle'}
                autoComplete="jobTitle"
                value={jobTitle}
                onChange={handleChange}
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

            {/* Select Job Role tile */}
            <div className="input-container">
              <span className="input-icon"> {roleIcon} </span>
              <select
                name="roleTitle"
                id="roleTitle"
                value={roleTitle}
                onChange={handleChange}
                className="input-field"
              >
                <option value="Default">Select a Role</option>

                {employeeRoles &&
                  employeeRoles.map((role) => {
                    return (
                      <option key={role._id} value={role._id}>
                        {role.roleName}
                      </option>
                    );
                  })}
              </select>

              <label htmlFor={'roleTitle'} className="input-label">
                Select Job Role
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Education */}
            <div className="input-container">
              <span className="input-icon"> {profesionIcon} </span>
              <input
                type="text"
                name={'education'}
                id={'education'}
                autoComplete="education"
                value={education}
                onChange={handleChange}
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
              <span className="input-icon"> {profesionIcon} </span>
              <input
                type="text"
                name={'experience'}
                id={'experience'}
                autoComplete="experience"
                value={experience}
                onChange={handleChange}
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
              <span className="input-icon"> {userIcon} </span>
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

            {/* Responsibilities */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={'responsibilites'}
                id={'responsibilites'}
                autoComplete="responsibilites"
                value={responsibilites}
                onChange={handleChange}
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

            {/* Benefits */}
            <div className="input-container">
              <span className="input-icon"> {messageIcon} </span>
              <input
                type="text"
                name={'benefits'}
                id={'benefits'}
                autoComplete="benefits"
                value={benefits}
                onChange={handleChange}
                placeholder="Enter Benefits"
                className="input-field"
              />

              <label htmlFor={'benefits'} className="input-label">
                Benefits
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Salary */}
            <div className="input-container">
              <span className="input-icon"> {priceIcon} </span>
              <input
                type="text"
                name={'salary'}
                id={'salary'}
                autoComplete="salary"
                value={salary}
                onChange={handleChange}
                placeholder="Enter Salary"
                className="input-field"
              />

              <label htmlFor={'salary'} className="input-label">
                Salary
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

          <button className="add-new-job-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddJob;
