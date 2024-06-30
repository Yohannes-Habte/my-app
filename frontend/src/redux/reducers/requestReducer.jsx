import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  request: null,
  requests: [],
  error: '',
  requestPostLoading: false,
  requestGetLoading: false,
  requestEditLoading: false,
  requestDeleteLoading: false,
};

const requestReducer = createSlice({
  name: 'request',
  initialState,
  reducers: {
    // Post Request
    postRequestStart: (state) => {
      state.requestPostLoading = true;
    },
    postRequestSuccess: (state, action) => {
      state.request = action.payload;
      state.requestPostLoading = false;
    },
    postRequestFailure: (state, action) => {
      state.error = action.payload;
      state.requestPostLoading = false;
    },

    // Edit Request
    editRequestStart: (state) => {},
    editRequestSuccess: (state, action) => {},
    editRequestFailure: (state, action) => {},

    // Get Requests
    getRequestStart: (state) => {},
    getRequestSuccess: (state, action) => {},
    getRequestFailure: (state, action) => {},

    // Delete Request
    deleteRequestStart: (state) => {},
    deleteRequestSuccess: (state, action) => {},
    deleteRequestFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postRequestStart,
  postRequestSuccess,
  postRequestFailure,

  editRequestStart,
  editRequestSuccess,
  editRequestFailure,

  getRequestStart,
  getRequesttSuccess,
  getRequestFailure,

  deleteRequestStart,
  deleteRequestSuccess,
  deleteRequestFailure,
  clearErrors,
} = requestReducer.actions;

export default requestReducer.reducer;
