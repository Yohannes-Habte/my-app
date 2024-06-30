import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../../controllers/category/index.js";

const categoryRouter = express.Router();

// departments Routes
categoryRouter.post("/new-category", createCategory);
categoryRouter.get("/", getAllCategories);

// Export Router
export default categoryRouter;
