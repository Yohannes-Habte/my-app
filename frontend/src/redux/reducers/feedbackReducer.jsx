import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedback: null,
  feedbacks: [],
  error: '',
  feedbackPostLoading: false,
  feedbackGetLoading: false,
  feedbackEditLoading: false,
  feedbackDeleteLoading: false,
};

const feedbackReducer = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    // Post Feedback
    postFeedbackStart: (state) => {
      state.feedbackPostLoading = true;
    },
    postFeedbackSuccess: (state, action) => {
      state.feedback = action.payload;
      state.feedbackPostLoading = false;
    },
    postFeedbackFailure: (state, action) => {
      state.error = action.payload;
      state.feedbackPostLoading = false;
    },

    // Edit Feedback
    editFeedbackStart: (state) => {},
    editFeedbackSuccess: (state, action) => {},
    editFeedbackFailure: (state, action) => {},

    // Get Feedbacks
    getFeedbacksStart: (state) => {},
    getFeedbacksSuccess: (state, action) => {},
    getFeedbacksFailure: (state, action) => {},

    // Delete Feedback
    deleteFeedbackStart: (state) => {},
    deleteFeedbackSuccess: (state, action) => {},
    deleteFeedbackFailure: (state, action) => {},

    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  postFeedbackStart,
  postFeedbackSuccess,
  postFeedbackFailure,

  editFeedbackStart,
  editFeedbackSuccess,
  editFeedbackFailure,

  getFeedbacksStart,
  getFeedbackstSuccess,
  getFeedbacksFailure,

  deleteFeedbackStart,
  deleteFeedbackSuccess,
  deleteFeedbackFailure,
  clearErrors,
} = feedbackReducer.actions;

export default feedbackReducer.reducer;
