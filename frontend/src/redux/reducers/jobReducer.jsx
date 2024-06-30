import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  job: null,
  jobs: [],
  error: '',
  j_postLoading: false,
  j_getLoading: false,
  j_editLoading: false,
  j_deleteLoading: false,
};

const jobReducer = createSlice({
  name: 'job',
  initialState,
  reducers: {
    // Post Job
    postJobStart: (state) => {
      state.j_postLoading = false;
    },
    postJobSuccess: (state, action) => {
      state.job = action.payload;
      state.j_postLoading = false;
    },
    postJobFailure: (state, action) => {
      state.error = action.payload;
      state.j_postLoading = false;
    },

    // Edit Job
    editJobStart: (state) => {},
    editJobSuccess: (state, action) => {},
    editJobFailure: (state, action) => {},

    // Get Jobs
    getJobsStart: (state) => {},
    getJobsSuccess: (state, action) => {},
    getJobsFailure: (state, action) => {},

    // Delete Job
    deleteJobStart: (state) => {},
    deleteJobSuccess: (state, action) => {},
    deleteJobFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postJobStart,
  postJobSuccess,
  postJobFailure,

  editJobStart,
  editJobSuccess,
  editJobFailure,

  getJobsStart,
  getJobstSuccess,
  getJobsFailure,

  deleteJobStart,
  deleteJobSuccess,
  deleteJobFailure,
  clearErrors,
} = jobReducer.actions;

export default jobReducer.reducer;
