import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
  error: '',
  cartLoading: false,
};

const wishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Add to wishlist
    addToWishlist: (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find(
        (product) => product._id === item._id
      );
      if (isItemExist) {
        return {
          ...state,
          wishlist: state.wishlist.map((product) =>
            product._id === isItemExist._id ? item : product
          ),
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, item],
        };
      }
    },

    // Remove from which
    removeFromWishlist: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload
        ),
      };
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearErrors } =
  wishlistReducer.actions;

export default wishlistReducer.reducer;
