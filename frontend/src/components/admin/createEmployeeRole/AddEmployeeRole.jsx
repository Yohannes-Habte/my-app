import { useEffect, useState } from 'react';
import './AddEmployeeRole.scss';
import { Link, useNavigate } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionRole from '../../../redux/reducers/employeeRoleReducer';
import * as ActionDep from '../../../redux/reducers/depReducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  roleName: '',
  description: '',
  keywords: '',
  department: '',
};
const AddEmployeeRole = ({ setOpen }) => {
  // Navigate to
  const navigate = useNavigate();

  // Global react icons
  const { closeIcon, roleIcon, paragraphIcon, depIcon } = ReactIcons();

  // Gloabl state variables
  const { depPostLoading } = useSelector((state) => state.category);
  const { departments } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Local state variables
  // Local state variables
  const [employeeRoleInfos, setEmployeeRoleInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing data
  const { roleName, description, keywords, department } = employeeRoleInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeRoleInfos({ ...employeeRoleInfos, [name]: value });
  };

  // Get all Departments
  useEffect(() => {
    const getAllDepartments = async () => {
      try {
        dispatch(ActionDep.getDepartmentsStart());
        const { data } = await axios.get(`${URL}/departments`);

        dispatch(ActionDep.getDepartmentsSuccess(data.departments));
      } catch (error) {
        dispatch(ActionDep.getDepartmentsFailure(error.response.data.message));
      }
    };
    getAllDepartments();
  }, []);

  // Reset the variables to their initial value or state
  const reset = () => {
    setEmployeeRoleInfos({
      roleName: '',
      description: '',
      keywords: '',
      department: '',
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionRole.postEmployeeRoleStart());
      const newRole = {
        roleName: roleName,
        description: description,
        keywords: keywords,
        department: department,
        agree: agree,
      };
      const { data } = await axios.post(`${API}/roles/new-role`, newRole);

      dispatch(ActionRole.postEmployeeRoleSuccess(data.user));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionRole.postEmployeeRoleFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-employment-role-wrapper">
      <section className="add-employe-role-popup-box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-employe-role-title"> Add New Category</h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className="add-employe-role-form"
        >
          {/* Category Name */}
          <div className="input-container">
            <span className="icon"> {roleIcon} </span>
            <input
              type="text"
              name={'roleName'}
              id={'roleName'}
              autoComplete="roleName"
              value={roleName}
              onChange={handleChange}
              placeholder="Enter Employee Role Name"
              className="input-field"
            />

            <label htmlFor={'roleName'} className="input-label">
              Employee Role Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Role Description */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="8"
              placeholder="Enter Description"
              className="input-field"
            ></textarea>

            <label htmlFor={'description'} className="input-label">
              Role Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Role Keywords */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="keywords"
              id="keywords"
              value={keywords}
              onChange={handleChange}
              cols="30"
              rows="8"
              placeholder="Enter Keywords"
              className="input-field"
            ></textarea>

            <label htmlFor={'keywords'} className="input-label">
              Role Keywords
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {depIcon} </span>
            <select
              name="department"
              id="department"
              value={department}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Default"> Select Department </option>
              {departments &&
                departments.map((dep) => {
                  return (
                    <option value={dep._id}> {dep.departmentName} </option>
                  );
                })}
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
              onChange={(e) => setAgree(e.target.value)}
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-employe-role-btn">Add Role</button>
        </form>
      </section>
    </article>
  );
};

export default AddEmployeeRole;
