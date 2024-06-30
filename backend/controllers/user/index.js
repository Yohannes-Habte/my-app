import createError from 'http-errors';
import User from '../../models/user/index.js';


//===========================================================
// Get one user from the database
//===========================================================
export const getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(createError(400, 'User could not be accessed. Please try again!'));
  }
};

//===========================================================
// Admin has mandate to get all users from the database
//===========================================================
export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(
      createError(400, 'User unable to access all users. Please try again!')
    );
  }
};

//===========================================================
// Admin has mandate to get all users's count in database
//===========================================================
export const countAllUsers = async (req, res, next) => {
  try {
    const user = await User.countDocuments();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(
      createError(
        400,
        'You are unable to access the size of the users. Please try again!'
      )
    );
  }
};

//===========================================================
// Owner and admin has mandate to delete a user from database
//===========================================================
export const deleteOneUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(`${user.firstName} has been successfully deleted. Welcome back!`);
  } catch (error) {
    console.log(error);
    next(createError(400, 'User could not be deleted. Please try again!'));
  }
};

//===========================================================
// Admin has mandate to delete delete all users from the database
//===========================================================
export const deleteAllUsers = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.status(200).json('All users has been successfully deleted!');
  } catch (error) {
    console.log(error);
    next(createError(400, 'Users could not be deleted. Please try again!'));
  }
};
