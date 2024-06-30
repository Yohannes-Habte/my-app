import express from "express";
import {
  createRole,
  getAllRoles,
} from "../../controllers/employeeRole/index.js";

const roleRouter = express.Router();

// Role Routes
roleRouter.post("/new-role", createRole);
roleRouter.get("/", getAllRoles);

// Export Router
export default roleRouter;
