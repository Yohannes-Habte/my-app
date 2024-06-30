import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  users: [],
  error: "",
  u_postLoading: false,
  u_getLoading: false,
  u_editLoading: false,
  u_deleteLoading: false,
  logoutLoading: false,
};

const userReducer = createSlice({
  name: "user",
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

    // Logout user
    logoutUserStart: (state) => {
      state.logoutLoading = true;
    },
    logoutUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.logoutLoading = false;
      state.error = null;
    },
    logoutUserFail: (state, action) => {
      state.error = action.payload;
      state.logoutLoading = false;
    },

    // Update user
    updateUserStart: (state) => {
      state.u_editLoading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.u_editLoading = false;
      state.error = null;
    },
    updateUserFail: (state, action) => {
      state.error = action.payload;
      state.u_editLoading = false;
    },

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postUserStart,
  postUserSuccess,
  postUserFailure,

  logoutUserStart,
  logoutUserSuccess,
  logoutUserFail,

  updateUserStart,
  updateUserSuccess,
  updateUserFail,

  clearErrors,
} = userReducer.actions;

export default userReducer.reducer;
