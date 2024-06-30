import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  event: null,
  events: [],
  error: '',
  e_postLoading: false,
  e_getLoading: false,
  e_editLoading: false,
  e_deleteLoading: false,
};

const eventReducer = createSlice({
  name: 'event',
  initialState,
  reducers: {
    // Post course
    postEventStart: (state) => {
      state.e_postLoading = true;
    },
    postEventSuccess: (state, action) => {
      state.event = action.payload;
      state.e_postLoading = false;
    },
    postEventFailure: (state, action) => {
      state.error = action.payload;
      state.e_postLoading = false;
    },

    // Edit course
    editEventStart: (state) => {},
    editEventSuccess: (state, action) => {},
    editEventFailure: (state, action) => {},

    // Get course
    getEventStart: (state) => {},
    getEventSuccess: (state, action) => {},
    getEventFailure: (state, action) => {},

    // Delete course
    deleteEventStart: (state) => {},
    deleteEventSuccess: (state, action) => {},
    deleteEventFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postEventStart,
  postEventSuccess,
  postEventFailure,

  editEventStart,
  editEventSuccess,
  editEventFailure,

  getEventStart,
  getEventSuccess,
  getEventFailure,

  deleteEventStart,
  deleteEventSuccess,
  deleteEventFailure,
  clearErrors,
} = eventReducer.actions;

export default eventReducer.reducer;
