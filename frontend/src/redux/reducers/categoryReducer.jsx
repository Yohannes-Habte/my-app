import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  categories: [],
  error: '',
  categoryPostLoading: false,
  categoryGetLoading: false,
  categoryEditLoading: false,
  categoryDeleteLoading: false,
};

const categoryReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Post Category
    postCategoryStart: (state) => {
      state.categoryPostLoading = true;
    },
    postCategorySuccess: (state, action) => {
      state.category = action.payload;
      state.categoryPostLoading = false;
    },
    postCategoryFailure: (state, action) => {
      state.error = action.payload;
      state.categoryPostLoading = false;
    },

    // Edit Category
    editCategoryStart: (state) => {},
    editCategorySuccess: (state, action) => {},
    editCategoryFailure: (state, action) => {},

    // Get All Categories
    getCategoriesStart: (state) => {
      state.categoryGetLoading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.categoryGetLoading = false;
    },
    getCategoriesFailure: (state, action) => {
      state.error = action.payload;
      state.categoryGetLoading = false;
    },

    // Delete Category
    deleteCategoryStart: (state) => {},
    deleteCategorySuccess: (state, action) => {},
    deleteCategoryFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postCategoryStart,
  postCategorySuccess,
  postCategoryFailure,

  editCategoryStart,
  editCategorySuccess,
  editCategoryFailure,

  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,

  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  clearErrors,
} = categoryReducer.actions;

export default categoryReducer.reducer;
