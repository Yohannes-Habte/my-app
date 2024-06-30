import createError from 'http-errors';
import Role from '../../models/employeeRole/index.js';

//===========================================================
// Create Role
//===========================================================
export const createRole = async (req, res, next) => {
  const { roleName, description, keywords, department } = req.body;
  try {
    const role = await Role.findOne({ roleName });

    if (role) {
      return next(createError(400, 'Role already exists!'));
    }

    if (!role) {
      const newRole = new Role({
        roleName: roleName,
        description: description,
        keywords: keywords,
        department: department,
      });

      // Save Role in the database
      try {
        await newRole.save();
      } catch (error) {
        return next(createError(500, 'Role could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        role: newRole,
        message: 'Role is successfully created!',
      });
    }
  } catch (error) {
    return next(createError(500, 'Role could not be created'));
  }
};

//===========================================================
// Update Role
//===========================================================
export const updateRole = async (req, res, next) => {};

//===========================================================
// Get Single Role
//===========================================================
export const getSingleRole = async (req, res, next) => {};

//===========================================================
// Get All Roles
//===========================================================
export const getAllRoles = async (req, res, next) => {
  try {
    const roles = await Role.find();

    if (!roles) {
      return next(createError(400, 'Role already exists!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      roles: roles,
    });
  } catch (error) {
    return next(createError(500, 'Roles could not be accessed!'));
  }
};

//===========================================================
// Delete Single Role
//===========================================================
export const deleteSingleRole = async (req, res, next) => {};
