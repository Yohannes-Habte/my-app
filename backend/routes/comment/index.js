import express from "express";

import { createComment } from "../../controllers/comment/index.js";

const commentRouter = express.Router();

// Comment Routes
commentRouter.post("/new-comment", createComment);

// Export Router
export default commentRouter;
