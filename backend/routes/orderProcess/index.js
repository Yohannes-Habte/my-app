import express from "express";
import { createOrderProcedure } from "../../controllers/orderProcess/index.js";

const orderProcessRouter = express.Router();

// Role Routes
orderProcessRouter.post("/new-step", createOrderProcedure);

// Export Router
export default orderProcessRouter;
