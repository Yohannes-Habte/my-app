import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  project: null,
  projects: [],
  error: '',
  projectPostLoading: false,
  projectGetLoading: false,
  projectEditLoading: false,
  projectDeleteLoading: false,
};

const projectReducer = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // Post Project
    postProjectStart: (state) => {
      state.projectPostLoading = true;
    },
    postProjectSuccess: (state, action) => {
      state.project = action.payload;
      state.projectPostLoading = false;
    },
    postProjectFailure: (state, action) => {
      state.error = action.payload;
      state.projectPostLoading = false;
    },

    // Edit Project
    editProjectStart: (state) => {},
    editProjectSuccess: (state, action) => {},
    editProjectFailure: (state, action) => {},

    // Get Projects
    getProjectStart: (state) => {},
    getProjectSuccess: (state, action) => {},
    getProjectFailure: (state, action) => {},

    // Delete Project
    deleteProjectStart: (state) => {},
    deleteProjectSuccess: (state, action) => {},
    deleteProjectFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postProjectStart,
  postProjectSuccess,
  postProjectFailure,

  editProjectStart,
  editProjectSuccess,
  editProjectFailure,

  getProjectStart,
  getProjecttSuccess,
  getProjectFailure,

  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
  clearErrors,
} = projectReducer.actions;

export default projectReducer.reducer;
