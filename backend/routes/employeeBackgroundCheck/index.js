import express from "express";
import { createBackgroundCheck } from "../../controllers/employeeBackgroundCheck/index.js";

const backgroundRouter = express.Router();

// Role Routes
backgroundRouter.post("/new-role", createBackgroundCheck);

// Export Router
export default backgroundRouter;
