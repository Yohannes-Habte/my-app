import  { useState } from 'react';
import './AddTodo.scss';
import ReactIcons from '../../reactIcons/ReactIcons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionTodo from '../../../redux/reducers/todoReducer';
import { Link } from 'react-router-dom';
import { URL } from '../../../utils/security/secreteKey';

const AddTodo = ({ setOpenTodo }) => {
  const { closeIcon, messageIcon, statusIcon } = ReactIcons();

  // Gloabl state variables
  const { todoPostLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // Local state variables
  const [task, setTask] = useState('');
  const [agree, setAgree] = useState(false);

  // Update change
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'task':
        setTask(e.target.value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setTask('');
    setAgree(false)
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(ActionTodo.postTodoStart());
      const newTodo = {
        task: task,
        agree: agree,
      };
      const { data } = await axios.post(`${URL}/todos/new-todo`, newTodo);

      dispatch(ActionTodo.postTodoSuccess(data.toda));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionTodo.postTodoFailure(err.response.data.message));
    }
  };

  return (
    <article className="add-todo-modal">
      <section className="add-todo-popup-box">
        <span onClick={() => setOpenTodo(false)} className="close">
          {closeIcon}
        </span>
        <h2 className="add-todo-title"> Create New Todo</h2>

        <form action="" onSubmit={handleSubmit} className="add-todo-form">
          {/* Task */}
          <div className="input-container">
            <span className="icon"> {messageIcon} </span>
            <input
              type="text"
              name={'task'}
              id={'task'}
              autoComplete="task"
              value={task}
              onChange={handleChange}
              placeholder="Enter Task"
              className="input-field"
            />

            <label htmlFor={'task'} className="input-label">
              Task
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
              onChange={() => setAgree(!agree)}
              className="checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button className="add-new-todo-btn">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default AddTodo;
