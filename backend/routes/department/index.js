import express from "express";
import {
  createDepartment,
  getAllDepartment,
} from "../../controllers/department/index.js";

const departmentRouter = express.Router();

// departments Routes
departmentRouter.post("/new-department", createDepartment);
departmentRouter.get("/", getAllDepartment);

// Export Router
export default departmentRouter;
