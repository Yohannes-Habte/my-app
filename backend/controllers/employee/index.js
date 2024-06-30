import createError from 'http-errors';
import bcrypt from 'bcryptjs';
import Employee from '../../models/employee/index.js';

//===========================================================
// Create Employee
//===========================================================
export const createEmployee = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    employeeRole,
    image,
    agree,
  } = req.body;
  try {
    const employee = await Employee.findOne({ email: email });

    if (employee) {
      return next(createError(500, 'Employee already exist!'));
    }

    if (!employee) {
      const newEmployee = new Employee({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender,
        birthDate: birthDate,
        profession: profession,
        language: language,
        phoneNumber: phoneNumber,
        role: employeeRole,
        image: image,
        agree: agree,
      });

      // Save it
      try {
        await newEmployee.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, 'Employee could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        employee: newEmployee,
        message: 'Employee Account is successfully created!',
      });
    }
  } catch (error) {
    console.log(error);
    return next(createError(500, 'Employee Account could not be created'));
  }
};

//===========================================================
// Login Employee
//===========================================================
export const loginEmployee = async (req, res, next) => {
  const { email, password, keepMe } = req.body;
  try {
    const employee = await Employee.findOne({ email: email });

    if (!employee) {
      return next(createError(500, 'Employee not found! Please sign up!'));
    }

    // Validate password
    const validPassword = bcrypt.compare(password, employee.password);

    if (!validPassword) {
      return next(createError(400, 'Invalid password! Please try again.'));
    }

    // If employee exist and password is valid, then ...
    if (employee && validPassword) {
      const { password, ...otherDetails } = employee._doc;

      res.status(200).json({
        success: true,
        employee: otherDetails,
        message: 'Employee has successfully logged in!',
      });
    }
  } catch (error) {
    console.log(error)
    next(createError(500, 'Employee could not log in. Please try again!'));
  }
};

//===========================================================
// Update Employee
//===========================================================
export const updateEmployee = async (req, res, next) => {};

//===========================================================
// Get Single Employee
//===========================================================
export const getSingleEmployee = async (req, res, next) => {};

//===========================================================
// Get All Employees
//===========================================================
export const getAllEmployee = async (req, res, next) => {};

//===========================================================
// Delete Single Employee
//===========================================================
export const deleteSingleEmployee = async (req, res, next) => {};
