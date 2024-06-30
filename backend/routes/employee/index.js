import express from "express";
import {
  createEmployee,
  loginEmployee,
} from "../../controllers/employee/index.js";

const employeeRouter = express.Router();

// Employee Routes
employeeRouter.post("/signup", createEmployee);
employeeRouter.post("/login", loginEmployee);

// Export Router
export default employeeRouter;
