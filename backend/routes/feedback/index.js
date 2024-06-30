import express from "express";
import { createFeedback } from "../../controllers/feedback/index.js";

const feedbackRouter = express.Router();

// Role Routes
feedbackRouter.post("/new-feedback", createFeedback);

// Export Router
export default feedbackRouter;
