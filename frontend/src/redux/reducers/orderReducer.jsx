import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userOrders: [],
  depOrders: [],
  ceoOrders: [],
  error: '',
  userOrderLoading: false,
  depOrderLoading: false,
  ceoOrderLoading: false,
  deleteOrderLoading: false,
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // User Orders
    getUserOrdersStart: (state) => {},
    getUserOrdersSuccess: (state, action) => {},
    getUserOrdersFailure: (state, action) => {},

    // Department orders
    getDepOrdersStart: (state) => {},
    getDepOrdersSuccess: (state, action) => {},
    getDepOrdersFailure: (state, action) => {},

    // CEO Orders
    getCeoOrdersStart: (state) => {},
    geCeoOrderstSuccess: (state, action) => {},
    getCeoOrdersFailure: (state, action) => {},

    // Delete Order
    deleteOrderStart: (state) => {},
    deleteOrderSuccess: (state, action) => {},
    deleteOrderFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  getUserOrdersStart,
  getUserOrdersSuccess,
  getUserOrdersFailure,
  getDepOrdersStart,
  getDepOrdersSuccess,
  getDepOrdersFailure,
  getCeoOrdersStart,
  geCeoOrderstSuccess,
  getCeoOrdersFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  clearErrors,
} = orderReducer.actions;

export default orderReducer.reducer;
