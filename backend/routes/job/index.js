import express from "express";
import { createJob, getAllJobs } from "../../controllers/job/index.js";

const jobRouter = express.Router();

// Role Routes
jobRouter.post("/new-job", createJob);
jobRouter.get("/", getAllJobs);

// Export Router
export default jobRouter;
