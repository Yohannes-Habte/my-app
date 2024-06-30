import createError from 'http-errors';
import OrderProcess from '../../models/orderProcess/index.js';

//===========================================================
// Create Order Procedure
//===========================================================
export const createOrderProcedure = async (req, res, next) => {
  const { orderStepName, department, category, agree } = req.body;
  try {
    const process = await OrderProcess.findOne({
      orderProcessName: orderStepName,
    });

    if (process) {
      return next(createError(400, 'Order process already exists!'));
    }

    if (!process) {
      const newProcess = new OrderProcess({
        orderProcessName: orderStepName,
        department: department,
        category: category,
        agree: agree,
        agree: agree,
      });

      // Save it
      try {
        await newProcess.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, 'Order process could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        process: newProcess,
        message: 'Order process is successfully created!',
      });
    }
  } catch (error) {
    console.log(error);
    return next(createError(500, 'OrderProcedure could not be created'));
  }
};

//===========================================================
// Update Order Procedure
//===========================================================
export const updateOrderProcedure = async (req, res, next) => {};

//===========================================================
// Get Single OrderProcedure
//===========================================================
export const getSingleOrderProcedure = async (req, res, next) => {};

//===========================================================
// Get All OrderProcedures
//===========================================================
export const getAllOrderProcedures = async (req, res, next) => {};

//===========================================================
// Delete Single OrderProcedure
//===========================================================
export const deleteSingleOrderProcedure = async (req, res, next) => {};
