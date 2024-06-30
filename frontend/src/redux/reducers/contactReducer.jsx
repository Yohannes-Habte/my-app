import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: null,
  contacts: [],
  error: '',
  contactPostLoading: false,
  contactGetLoading: false,
  contactDeleteLoading: false,
};

const contactReducer = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Post course
    postContactStart: (state) => {
      state.contactPostLoading = true;
    },
    postContactSuccess: (state, action) => {
      state.contact = action.payload;
      state.contactPostLoading = false;
    },
    postContactFailure: (state, action) => {
      state.error = action.payload;
      state.contactPostLoading = false;
    },

    // Get course
    getContactStart: (state) => {},
    getContactSuccess: (state, action) => {},
    getContactFailure: (state, action) => {},

    // Delete course
    deleteContactStart: (state) => {},
    deleteContactSuccess: (state, action) => {},
    deleteContactFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postContactStart,
  postContactSuccess,
  postContactFailure,

  getContactStart,
  getContacttSuccess,
  getContactFailure,

  deleteContactStart,
  deleteContactSuccess,
  deleteContactFailure,
  clearErrors,
} = contactReducer.actions;

export default contactReducer.reducer;
