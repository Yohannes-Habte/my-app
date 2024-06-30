import createError from 'http-errors';
import Comment from '../../models/comment/index.js';

//===========================================================
// Create Comment
//===========================================================
export const createComment = async (req, res, next) => {
  try {
    const comment = new Comment(req.body);

    // Save it
    try {
      await comment.save();
    } catch (error) {
      console.log(error);
      return next(createError(500, 'Comment could not be saved'));
    }

    // Response will be
    res.status(201).json({
      success: true,
      comment: comment,
      message: 'Comment is successfully created!',
    });
  } catch (error) {
    console.log(error);
    return next(createError(500, 'Comment could not be created'));
  }
};

//===========================================================
// Get Single Comment
//===========================================================
export const getSingleComment = async (req, res, next) => {};

//===========================================================
// Get All Comments
//===========================================================
export const getAllComment = async (req, res, next) => {};

//===========================================================
// Delete Single Comment
//===========================================================
export const deleteSingleComment = async (req, res, next) => {};
