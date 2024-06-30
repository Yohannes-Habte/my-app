import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: null,
  todos: [],
  error: '',
  todoPostLoading: false,
  todoGetLoading: false,
  todosGetLoading: false,
  todoUpdateLoading: false,
  todoDeleteLoading: false,
};

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Post todo
    postTodoStart: (state) => {
      state.todoPostLoading = true;
    },
    postTodoSuccess: (state, action) => {
      state.todo = action.payload;
      state.todoPostLoading = false;
    },
    postTodoFailure: (state, action) => {
      state.error = action.payload;
      state.todoPostLoading = false;
    },

    // Update todo
    updateTodoStart: (state) => {
      state.todoUpdateLoading = true;
    },
    updateTodoSuccess: (state, action) => {
      state.todo = action.payload;
      state.todoUpdateLoading = false;
    },
    updateTodoFailure: (state, action) => {
      state.error = action.payload;
      state.todoUpdateLoading = false;
    },

    // Get Single todo
    getTodoStart: (state) => {
      state.todoGetLoading = true;
    },
    getTodoSuccess: (state, action) => {
      state.todo = action.payload;
      state.todoGetLoading = false;
    },
    getTodoFailure: (state, action) => {
      state.error = action.payload;
      state.todoGetLoading = false;
    },

    // Get todos
    getTodosStart: (state) => {
      state.todosGetLoading = true;
    },
    getTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.todosGetLoading = false;
    },
    getTodosFailure: (state, action) => {
      state.error = action.payload;
      state.todosGetLoading = false;
    },

    // Delete todo
    deleteTodoStart: (state) => {
      state.todoDeleteLoading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.todo = action.payload;
      state.todoDeleteLoading = false;
    },
    deleteTodoFailure: (state, action) => {
      state.error = action.payload;
      state.todoDeleteLoading = false;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postTodoStart,
  postTodoSuccess,
  postTodoFailure,

  updateTodoStart,
  updateTodoSuccess,
  updateTodoFailure,

  getTodosStart,
  getTodosSuccess,
  getTodosFailure,

  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  clearErrors,
} = todoReducer.actions;

export default todoReducer.reducer;
