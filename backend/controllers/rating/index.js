import createError from 'http-errors';
import Rating from '../../models/rating/index.js';

//===========================================================
// Create Rating
//===========================================================
export const createRating = async (req, res, next) => {
  try {
    const rating = await Rating.findOne({ ratingNo: req.body.ratingNo });

    if (rating) {
      return next(createError(400, 'Rating already exists!'));
    }

    if (!rating) {
      const newRating = new Rating({
        ratingNo: req.body.ratingNo,
        agree: req.body.agree,
      });

      // Save it
      try {
        await newRating.save();
      } catch (error) {
        return next(createError(500, 'Rating could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        rating: newRating,
        message: 'Rating is successfully created!',
      });
    }
  } catch (error) {
    console.log(error);
    return next(createError(500, 'Rating could not be created'));
  }
};

//===========================================================
// Update Rating
//===========================================================
export const updateRating = async (req, res, next) => {};

//===========================================================
// Get Single Rating
//===========================================================
export const getSingleRating = async (req, res, next) => {};

//===========================================================
// Get All Rating
//===========================================================
export const getAllRatings = async (req, res, next) => {};

//===========================================================
// Delete Single Rating
//===========================================================
export const deleteSingleRating = async (req, res, next) => {};
