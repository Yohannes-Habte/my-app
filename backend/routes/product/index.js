import express from "express";
import { createProduct } from "../../controllers/product/index.js";

const productRouter = express.Router();

// Product Routes
productRouter.post("/new-product", createProduct);

// Export Router
export default productRouter;
