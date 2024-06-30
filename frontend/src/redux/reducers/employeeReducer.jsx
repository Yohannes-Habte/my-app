import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: null,
  employees: [],
  error: '',
  employeePostLoading: false,
  employeeGetLoading: false,
  employeeEditLoading: false,
  employeeDeleteLoading: false,
};

const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    // Post course
    postEmployeeStart: (state) => {
      state.employeePostLoading = true;
    },
    postEmployeeSuccess: (state, action) => {
      state.employeePostLoading = false;
      state.employee = action.payload;
    },
    postEmployeeFailure: (state, action) => {
      state.employeePostLoading = false;
      state.error = action.payload;
    },

    // Edit course
    editEmployeeStart: (state) => {},
    editEmployeeSuccess: (state, action) => {},
    editEmployeeFailure: (state, action) => {},

    // Get course
    getEmployeeStart: (state) => {},
    getEmployeeSuccess: (state, action) => {},
    getEmployeeFailure: (state, action) => {},

    // Delete course
    deleteEmployeeStart: (state) => {},
    deleteEmployeeSuccess: (state, action) => {},
    deleteEmployeeFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postEmployeeStart,
  postEmployeeSuccess,
  postEmployeeFailure,

  editEmployeeStart,
  editEmployeeSuccess,
  editEmployeeFailure,

  getEmployeeStart,
  getEmployeeSuccess,
  getEmployeeFailure,

  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  clearErrors,
} = employeeReducer.actions;

export default employeeReducer.reducer;
