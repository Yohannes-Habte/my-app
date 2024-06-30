import createError from 'http-errors';
import Event from '../../models/event/index.js';

//===========================================================
// Create Event
//===========================================================
export const createEvent = async (req, res, next) => {
  try {
    const event = new Event(req.body);

    // Save Event in the database
    try {
      await event.save();
    } catch (error) {
      console.log(error);
      return next(createError(500, 'Event could not be saved'));
    }

    // Event Response
    res.status(201).json({
      success: true,
      event: event,
      message: 'Event is successfully created!',
    });
  } catch (error) {
    return next(createError(500, 'Event could not be created!'));
  }
};

//===========================================================
// Update Event
//===========================================================
export const updateEvent = async (req, res, next) => {};

//===========================================================
// Get Single Event
//===========================================================
export const getSingleEvent = async (req, res, next) => {};

//===========================================================
// Get All Events
//===========================================================
export const getAllEvents = async (req, res, next) => {};

//===========================================================
// Delete Single Event
//===========================================================
export const deleteSingleEvent = async (req, res, next) => {};
