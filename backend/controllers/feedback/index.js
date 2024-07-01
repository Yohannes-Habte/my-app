import createError from "http-errors";
import Feedback from "../../models/feedback/index.js";
import { validationResult } from "express-validator";

//===========================================================
// Create Feedback
//===========================================================
export const createFeedback = async (req, res, next) => {
  let { feedbackTo, subject, textMessage, image } = req.body;
  const errors = validationResult(req); // Get validation errors, if any

  // Check if there are validation errors
  if (!errors.isEmpty()) {
    // If there are errors, send a 400 status response with the errors
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log("Uploaded image:", req.file.filename);

    const sendEmail = new Feedback({
      feedbackTo: feedbackTo,
      subject: subject,
      textMessage: textMessage,
      image: `http://localhost:9000/images/${req.file.filename}`,
    });

    // Save feedback in the database
    try {
      await sendEmail.save();
    } catch (error) {
      console.log(error);
      return next(createError(500, "Feedback could not be saved"));
    }

    // Response will be
    res.status(201).json({
      success: true,
      send: sendEmail,
      message: "Feedback is successfully sent!",
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server error!"));
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
