import createError from 'http-errors';
import Feedback from '../../models/feedback/index.js';

//===========================================================
// Create Feedback
//===========================================================
export const createFeedback = async (req, res, next) => {
  try {
    const sendEmail = new Feedback(req.body);

    // Save feedback in the database
    try {
      await sendEmail.save();
    } catch (error) {
      return next(createError(500, 'Feedback could not be saved'));
    }

    // Response will be
    res.status(201).json({
      success: true,
      send: sendEmail,
      message: 'Feedback is successfully sent!',
    });
  } catch (error) {
    return next(createError(500, 'Feedback could not be sent'));
  }
};

//===========================================================
// Update Feedback
//===========================================================
export const updateFeedback = async (req, res, next) => {};

//===========================================================
// Get Single Feedback
//===========================================================
export const getSingleFeedback = async (req, res, next) => {};

//===========================================================
// Get All Feedback
//===========================================================
export const getAllFeedbacks = async (req, res, next) => {};

//===========================================================
// Delete Single Feedback
//===========================================================
export const deleteSingleFeedback = async (req, res, next) => {};
