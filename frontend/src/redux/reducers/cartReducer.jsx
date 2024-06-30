import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  error: '',
  cartLoading: false,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find(
        (product) => product._id === item._id
      );
      if (isItemExist) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product._id === isItemExist._id ? item : product
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const { addToCart, removeFromCart, clearErrors } = cartReducer.actions;

export default cartReducer.reducer;
