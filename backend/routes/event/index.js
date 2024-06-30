import express from "express";
import { createEvent } from "../../controllers/event/index.js";

const eventRouter = express.Router();

// Event Routes
eventRouter.post("/new-event", createEvent);

// Export Router
export default eventRouter;
