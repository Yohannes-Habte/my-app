import { useEffect, useState } from 'react';
import './UpdateTodo.scss';
import ReactIcons from '../../reactIcons/ReactIcons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionTodo from '../../../redux/reducers/todoReducer';
import { Link } from 'react-router-dom';
import { URL } from '../../../utils/security/secreteKey';


const UpdateTodo = () => {
  const { messageIcon } = ReactIcons();

  // Gloabl state variables
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Local state variables
  const [task, setTask] = useState('');
  const [agree, setAgree] = useState(false);
  const status = 'Complete';

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
    setAgree(false);
  };

  useEffect(() => {
    const getTodo = async () => {
      try {
        dispatch(ActionTodo.updateTodoStart());

        const { data } = await axios.get(`${URL}/todos/todo/${todo._id}`);

        dispatch(ActionTodo.updateTodoSuccess(data.todo));

        toast.success(data.message);
      } catch (err) {
        dispatch(ActionTodo.updateTodoFailure(err.response.data.message));
      }
    };

    getTodo();
  }, []);

  // Handle Submit
  const handleSubmit = async (id) => {
    try {
      dispatch(ActionTodo.updateTodoStart());
      const updateTodo = {
        status: status,
        agree: agree,
      };
      const { data } = await axios.put(`${URL}/todos/update/${id}`, updateTodo);

      dispatch(ActionTodo.updateTodoSuccess(data.update));
      reset();
      toast.success(data.message);
    } catch (err) {
      dispatch(ActionTodo.updateTodoFailure(err.response.data.message));
    }
  };

  return (
    <main className="update-todo-page">
      <section className="update-todo-page-container">
        <h2 className="todo-update-page-title"> Task Is Completed</h2>

        <form action="" onSubmit={handleSubmit} className="update-todo-form">
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

          <button className="add-new-todo-btn">Update</button>
        </form>
      </section>
    </main>
  );
};

export default UpdateTodo;
