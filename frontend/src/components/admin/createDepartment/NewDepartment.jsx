import  { useState } from 'react';
import './NewDepartment.scss';
import { Link, useNavigate } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';
import * as Action from '../../../redux/reducers/depReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../../utils/security/secreteKey';

const initialState = {
  departmentName: '',
  description: '',
  keywords: '',
};

const NewDepartment = ({ setOpen }) => {
  // Navigate to
  const navigate = useNavigate();

  // Gloabl state variables
  const { depPostLoading } = useSelector((state) => state.department);
  const dispatch = useDispatch();

  // Global icons
  const { closeIcon, depIcon, paragraphIcon } = ReactIcons();
  // Local state variables
  const [depInfos, setDepInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructing department data
  const { departmentName, description, keywords } = depInfos;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepInfos({ ...depInfos, [name]: value });
  };

  // Reset the variables to their initial value or state
  const reset = () => {
    setDepInfos({
      departmentName: '',
      description: '',
      keywords: '',
      agree: false,
    });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(Action.postDepartmentStart());
      const newDepartment = {
        departmentName: departmentName,
        description: description,
        keywords: keywords,
      };
      const { data } = await axios.post(
        `${URL}/departments/new-department`,
        newDepartment
      );

      dispatch(Action.postDepartmentSuccess(data.department));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(Action.postDepartmentFailure(err.response.data.message));
    }
  };

  return (
    <article className="ceo-department-modal">
      <section className="new-department-popup-Box">
        <span onClick={() => setOpen(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-department-title"> Add New Department</h2>

        <form action="" onSubmit={handleSubmit} className="add-department-form">
          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {depIcon} </span>
            <input
              type="text"
              name={'departmentName'}
              id={'departmentName'}
              autoComplete="departmentName"
              value={departmentName}
              onChange={handleChange}
              placeholder="Enter Department Name"
              className="input-field"
            />

            <label htmlFor={'departmentName'} className="input-label">
              Department Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Description */}
          <div className="input-container">
            <span className="icon"> {paragraphIcon} </span>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="8"
              placeholder="Enter Paragraph"
              className="input-field"
            ></textarea>

            <label htmlFor={'description'} className="input-label">
              Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Department Keywords */}
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
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-department-btn">Add Department</button>
        </form>
      </section>
    </article>
  );
};

export default NewDepartment;
