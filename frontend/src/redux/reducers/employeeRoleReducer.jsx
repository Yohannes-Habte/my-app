import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employeeRole: null,
  employeeRoles: [],
  error: '',
  rolePostLoading: false,
  roleGetLoading: false,
  roleEditLoading: false,
  roleDeleteLoading: false,
};

const employeeRoleReducer = createSlice({
  name: 'employeeRole',
  initialState,
  reducers: {
    // Post Employee Role
    postEmployeeRoleStart: (state) => {
      state.rolePostLoading = true;
    },
    postEmployeeRoleSuccess: (state, action) => {
      state.employeeRole = action.payload;
      state.rolePostLoading = false;
    },
    postEmployeeRoleFailure: (state, action) => {
      state.error = action.payload;
      state.rolePostLoading = false;
    },

    // Edit EmployeeRole
    editEmployeeRoleStart: (state) => {
      state.roleEditLoading = true;
    },
    editEmployeeRoleSuccess: (state, action) => {
      state.roleEditLoading = false;
    },
    editEmployeeRoleFailure: (state, action) => {
      state.roleEditLoading = false;
    },

    // Get All Employee Roles
    getEmployeeRolesStart: (state) => {
      state.roleGetLoading = true;
    },
    getEmployeeRolesSuccess: (state, action) => {
      state.employeeRoles = action.payload;
      state.roleGetLoading = false;
    },
    getEmployeeRolesFailure: (state, action) => {
      state.error = action.payload;
      state.roleGetLoading = false;
    },

    // Delete EmployeeRole
    deleteEmployeeRoleStart: (state) => {},
    deleteEmployeeRoleSuccess: (state, action) => {},
    deleteEmployeeRoleFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postEmployeeRoleStart,
  postEmployeeRoleSuccess,
  postEmployeeRoleFailure,

  editEmployeeRoleStart,
  editEmployeeRoleSuccess,
  editEmployeeRoleFailure,

  getEmployeeRolesStart,
  getEmployeeRolesSuccess,
  getEmployeeRolesFailure,

  deleteEmployeeRoleStart,
  deleteEmployeeRoleSuccess,
  deleteEmployeeRoleFailure,
  clearErrors,
} = employeeRoleReducer.actions;

export default employeeRoleReducer.reducer;
