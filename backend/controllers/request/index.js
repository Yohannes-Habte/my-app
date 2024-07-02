import createError from "http-errors";
import Request from "../../models/request/index.js";
import { validationResult } from "express-validator";

//===========================================================
// Create Request
//===========================================================
export const createRequest = async (req, res, next) => {
  let { requestTo, subject, textMessage, image } = req.body;

  const errors = validationResult(req); // Get validation errors, if any

  // Check if there are validation errors
  if (!errors.isEmpty()) {
    // If there are errors, send a 400 status response with the errors
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log("Uploaded image:", req.file.filename);

    // Create a new Request object
    const sendEmail = new Request({
      requestTo: requestTo,
      subject: subject,
      textMessage: textMessage,
      image: `http://localhost:9000/request/${req.file.filename}`,
    });

    // Save Request in the database
    try {
      await sendEmail.save();
    } catch (error) {
      console.log(error);
      return next(createError(500, "Request could not be saved"));
    }

    // Response will be
    res.status(201).json({
      success: true,
      request: sendEmail,
      message: "Request is successfully sent!",
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, "Server Error"));
  }
};

//===========================================================
// Update Request
//===========================================================
export const updateRequest = async (req, res, next) => {};

//===========================================================
// Get Single Request
//===========================================================
export const getSingleRequest = async (req, res, next) => {};

//===========================================================
// Get All Request
//===========================================================
export const getAllRequests = async (req, res, next) => {};

//===========================================================
// Delete Single Request
//===========================================================
export const deleteSingleRequest = async (req, res, next) => {};
