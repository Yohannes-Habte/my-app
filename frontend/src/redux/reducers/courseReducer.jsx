import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: null,
  courses: [],
  error: '',
  c_postLoading: false,
  c_getLoading: false,
  c_editLoading: false,
  c_deleteLoading: false,
};

const courseReducer = createSlice({
  name: 'course',
  initialState,
  reducers: {
    // Post course
    postCouseStart: (state) => {
      state.c_postLoading = true;
    },
    postCouseSuccess: (state, action) => {
      state.course = action.payload;
      state.c_postLoading = false;
    },
    postCouseFailure: (state, action) => {
      state.error = action.payload;
      state.c_postLoading = false;
    },

    // Edit course
    editCouseStart: (state) => {},
    editCouseSuccess: (state, action) => {},
    editCouseFailure: (state, action) => {},

    // Get course
    getCouseStart: (state) => {},
    getCouseSuccess: (state, action) => {},
    getCouseFailure: (state, action) => {},

    // Delete course
    deleteCouseStart: (state) => {},
    deleteCouseSuccess: (state, action) => {},
    deleteCouseFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postCouseStart,
  postCouseSuccess,
  postCouseFailure,

  editCouseStart,
  editCouseSuccess,
  editCouseFailure,

  getCouseStart,
  getCouseSuccess,
  getCouseFailure,

  deleteCouseStart,
  deleteCouseSuccess,
  deleteCouseFailure,
  clearErrors,
} = courseReducer.actions;
export default courseReducer.reducer;
