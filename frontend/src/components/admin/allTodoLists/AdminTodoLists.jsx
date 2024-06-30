import  { useEffect, useState } from 'react';
import './AdminTodoLists.scss';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionTodo from '../../../redux/reducers/todoReducer';
import AddTodo from '../../forms/todoForm/AddTodo';
import ReactIcons from '../../reactIcons/ReactIcons';
import { Link } from 'react-router-dom';
import { URL } from '../../../utils/security/secreteKey';

const AdminTodoLists = () => {
  // Global react icons
  const { editIcon, trashIcon } = ReactIcons();
  // Gloabl state variables
  const { todoGetLoading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log('Todos =', todos);

  // Local state variable
  const [openTodo, setOpenTodo] = useState(false);

  // Get all todos
  useEffect(() => {
    const getAllTodos = async () => {
      try {
        dispatch(ActionTodo.getTodosStart());
        const { data } = await axios.get(`${URL}/todos`);

        dispatch(ActionTodo.getTodosSuccess(data.todos));
      } catch (error) {
        dispatch(error.response.data.message);
      }
    };
    getAllTodos();
  }, []);

  // Header
  const columns = [
    { field: 'id', headerName: 'Task ID', width: 250 },
    { field: 'task', headerName: 'Task', width: 400 },
    { field: 'status', headerName: 'Task Status', width: 100 },
    { field: 'agree', headerName: 'Consent', width: 100 },
    { field: 'createdAt', headerName: 'Created At', width: 150 },
    { field: 'updatedAt', headerName: 'Updated At', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <div className="action-wrapper">
            <Link to={`/todos/update/${params.id}`}>
              <span className="update-icon"> {editIcon} </span>{' '}
            </Link>
            <span className="trash-icon"> {trashIcon} </span>
          </div>
        );
      },
    },
  ];

  // Rows

  const rows = [];

  todos &&
    todos.forEach((todo) => {
      rows.push({
        id: todo._id,
        task: todo.task,
        status: todo.status,
        agree: todo.agree,
        createdAt: todo.createdAt.slice(0, 10),
        updatedAt: todo.updatedAt.slice(0, 10),
      });
    });

  return (
    <section className="department-todos-wrapper">
      <h2 className="department-todos-title"> Department X Todos</h2>

      <aside className="add-department-todo-wrapper">
        <h3 className="add-department-todo-title">Add New Todo</h3>
        <button
          onClick={() => setOpenTodo(true)}
          className="add-department-todo-btn"
        >
          Add Todo
        </button>
      </aside>
      <DataGrid
        // Rows
        rows={rows}
        // Columns
        columns={columns}
        // Initial state
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // Create search bar
        slots={{ toolbar: GridToolbar }}
        // Search a specific user
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // Page size optons
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        //
      />

      {openTodo && <AddTodo setOpenTodo={setOpenTodo} />}
    </section>
  );
};

export default AdminTodoLists;
