import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  department: null,
  departments: [],
  error: '',
  depPostLoading: false,
  depGetLoading: false,
  depEditLoading: false,
  depDeleteLoading: false,
};

const depReducer = createSlice({
  name: 'department',
  initialState,
  reducers: {
    // Post Department
    postDepartmentStart: (state) => {
      state.depPostLoading = true;
    },
    postDepartmentSuccess: (state, action) => {
      state.department = action.payload;
      state.depPostLoading = false;
    },
    postDepartmentFailure: (state, action) => {
      state.error = action.payload;
      state.depPostLoading = false;
    },

    // Edit Department
    editDepartmentStart: (state) => {},
    editDepartmentSuccess: (state, action) => {},
    editDepartmentFailure: (state, action) => {},

    // Get All Departments
    getDepartmentsStart: (state) => {
      state.depGetLoading = true;
    },
    getDepartmentsSuccess: (state, action) => {
      state.departments = action.payload;
      state.depGetLoading = false;
    },
    getDepartmentsFailure: (state, action) => {
      state.error = action.payload;
      state.depGetLoading = false;
    },

    // Delete Department
    deleteDepartmentStart: (state) => {},
    deleteDepartmentSuccess: (state, action) => {},
    deleteDepartmentFailure: (state, action) => {},

    // Error Department
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postDepartmentStart,
  postDepartmentSuccess,
  postDepartmentFailure,

  editDepartmentStart,
  editDepartmentSuccess,
  editDepartmentFailure,

  getDepartmentsStart,
  getDepartmentsSuccess,
  getDepartmentsFailure,

  deleteDepartmentStart,
  deleteDepartmentSuccess,
  deleteDepartmentFailure,
  clearErrors,
} = depReducer.actions;

export default depReducer.reducer;
