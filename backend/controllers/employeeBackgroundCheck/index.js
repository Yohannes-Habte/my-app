import createError from "http-errors";
import BackgroundCheck from "../../models/employeeBackgroundCheck/index.js";

export const createBackgroundCheck = async (req, res, next) => {
  try {
    const employee = await BackgroundCheck.findOne();
  } catch (error) {}
};
