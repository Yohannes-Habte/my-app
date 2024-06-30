import createError from 'http-errors';
import Course from '../../models/course/index.js';

//===========================================================
// Create Course
//===========================================================
export const createCourse = async (req, res, next) => {
  const {
    courseName,
    description,
    originalPrice,
    discountPrice,
    department,
    category,
    startDate,
    endDate,
    language,
    tags,
    agree,
  } = req.body;
  try {
    const course = await Course.findOne({ courseName });

    if (course) {
      return next(createError(400, 'Course already exists!'));
    }

    if (!course) {
      const newCourse = new Course({
        courseName: courseName,
        description: description,
        originalPrice: originalPrice,
        discountPrice: discountPrice,
        department: department,
        category: category,
        startDate: startDate,
        endDate: endDate,
        language: language,
        tags: tags,
        agree: agree,
      });

      // Save Category in the database
      try {
        await newCourse.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, 'Course could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        course: newCourse,
        message: 'Course is successfully created!',
      });
    }
  } catch (error) {}
};

//===========================================================
// Update Course
//===========================================================
export const updateCourse = async (req, res, next) => {};

//===========================================================
// Get Single Course
//===========================================================
export const getSingleCourse = async (req, res, next) => {};

//===========================================================
// Get All Courses
//===========================================================
export const getAllCourses = async (req, res, next) => {};

//===========================================================
// Delete Single Course
//===========================================================
export const deleteSingleCourse = async (req, res, next) => {};
