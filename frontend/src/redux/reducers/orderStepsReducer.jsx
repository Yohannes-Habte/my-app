import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderStep: null,
  orderSteps: [],
  error: '',
  stepPostLoading: false,
  stepGetLoading: false,
  stepEditLoading: false,
  stepDeleteLoading: false,
};

const orderStepsReducer = createSlice({
  name: 'orderProcess',
  initialState,
  reducers: {
    // Post course
    postOrderStepStart: (state) => {
      state.stepPostLoading = true;
    },
    postOrderStepSuccess: (state, action) => {
      state.orderStep = action.payload;
      state.stepPostLoading = false;
    },
    postOrderStepFailure: (state, action) => {
      state.error = action.payload;
      state.stepPostLoading = false;
    },

    // Edit course
    editOrderStepStart: (state) => {},
    editOrderStepSuccess: (state, action) => {},
    editOrderStepFailure: (state, action) => {},

    // Get course
    getOrderStepStart: (state) => {},
    getOrderStepSuccess: (state, action) => {},
    getOrderStepFailure: (state, action) => {},

    // Delete course
    deleteOrderStepStart: (state) => {},
    deleteOrderStepSuccess: (state, action) => {},
    deleteOrderStepFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postOrderStepStart,
  postOrderStepSuccess,
  postOrderStepFailure,

  editOrderStepStart,
  editOrderStepSuccess,
  editOrderStepFailure,

  getOrderStepStart,
  getOrderSteptSuccess,
  getOrderStepFailure,

  deleteOrderStepStart,
  deleteOrderStepSuccess,
  deleteOrderStepFailure,
  clearErrors,
} = orderStepsReducer.actions;

export default orderStepsReducer.reducer;
