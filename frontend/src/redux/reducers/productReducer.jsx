import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  products: [],
  error: '',
  p_postLoading: false,
  p_getLoading: false,
  p_editLoading: false,
  p_deleteLoading: false,
};

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Post Product
    postProductStart: (state) => {
      state.p_postLoading = true;
    },
    postProductSuccess: (state, action) => {
      state.product = action.payload;
      state.p_postLoading = false;
    },
    postProductFailure: (state, action) => {
      state.error = action.payload;
      state.p_postLoading = false;
    },

    // Edit Product
    editProductStart: (state) => {},
    editProductSuccess: (state, action) => {},
    editProductFailure: (state, action) => {},

    // Get Product
    getProductStart: (state) => {},
    getProductSuccess: (state, action) => {},
    getProductFailure: (state, action) => {},

    // Delete Product
    deleteProductStart: (state) => {},
    deleteProductSuccess: (state, action) => {},
    deleteProductFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postProductStart,
  postProductSuccess,
  postProductFailure,

  editProductStart,
  editProductSuccess,
  editProductFailure,

  getProductStart,
  getProductSuccess,
  getProductFailure,

  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  clearErrors,
} = productReducer.actions;

export default productReducer.reducer;
