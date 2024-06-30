import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  users: [],
  error: '',
  u_postLoading: false,
  u_getLoading: false,
  u_editLoading: false,
  u_deleteLoading: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Post course
    postUserStart: (state) => {
      state.u_postLoading = true;
    },
    postUserSuccess: (state, action) => {
      state.u_postLoading = false;
      state.currentUser = action.payload;
    },
    postUserFailure: (state, action) => {
      state.u_postLoading = false;
      state.error = action.payload;
    },

    // Edit course
    editUserStart: (state) => {},
    editUserSuccess: (state, action) => {},
    editUserFailure: (state, action) => {},

    // Get course
    getUserStart: (state) => {},
    getUserSuccess: (state, action) => {},
    getUserFailure: (state, action) => {},

    // Delete course
    deleteUserStart: (state) => {},
    deleteUserSuccess: (state, action) => {},
    deleteUserFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postUserStart,
  postUserSuccess,
  postUserFailure,

  editUserStart,
  editUserSuccess,
  editUserFailure,

  getUserStart,
  getUserSuccess,
  getUserFailure,

  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  clearErrors,
} = userReducer.actions;

export default userReducer.reducer;
