import createError from 'http-errors';
import Department from '../../models/department/index.js';

//===========================================================
// Create department
//===========================================================
export const createDepartment = async (req, res, next) => {
  const { departmentName, description, keywords, agree } = req.body;
  try {
    const department = await Department.findOne({ departmentName });

    if (department) {
      return next(createError(400, 'Category already exists!'));
    }

    if (!department) {
      const newDepartment = new Department({
        departmentName: departmentName,
        description: description,
        keywords: keywords,
        agree: agree,
      });

      // Save department in the database
      try {
        await newDepartment.save();
      } catch (error) {
        return next(createError(500, 'Department could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        department: newDepartment,
        message: 'Department is successfully created!',
      });
    }
  } catch (error) {
    return next(createError(500, 'Department could not be created'));
  }
};

//===========================================================
// Update department
//===========================================================
export const updateDepartment = async (req, res, next) => {};

//===========================================================
// Get Single department
//===========================================================
export const getSingleDepartment = async (req, res, next) => {};

//===========================================================
// Get All departments
//===========================================================
export const getAllDepartment = async (req, res, next) => {
  try {
    const departments = await Department.find();

    if (!departments) {
      return next(createError(400, 'Departments do not exists!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      departments: departments,
    });
  } catch (error) {
    return next(createError(500, 'Departments could not be accessed!'));
  }
};

//===========================================================
// Delete Single department
//===========================================================
export const deleteSingleDepartment = async (req, res, next) => {};
