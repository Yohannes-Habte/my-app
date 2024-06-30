import createError from 'http-errors';
import Request from '../../models/request/index.js';

//===========================================================
// Create Request
//===========================================================
export const createRequest = async (req, res, next) => {
  try {
    const sendEmail = new Request(req.body);

    // Save Request in the database
    try {
      await sendEmail.save();
    } catch (error) {
      return next(createError(500, 'Request could not be saved'));
    }

    // Response will be
    res.status(201).json({
      success: true,
      send: sendEmail,
      message: 'Request is successfully sent!',
    });
  } catch (error) {
    return next(createError(500, 'Request could not be sent'));
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
