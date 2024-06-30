import express from "express";
import {
  countAllOrders,
  deleteAllOrders,
  deleteOneOrder,
  getAllOrders,
  getOneOrder,
  placeOrder,
  singleUserOrders,
  updateOrder,
} from "../../controllers/productOrder/index.js";

// Router
const productOrderRouter = express.Router();

// Order Routes
productOrderRouter.post("/", placeOrder);
productOrderRouter.put("/:id", updateOrder);
productOrderRouter.get("/:id", getOneOrder);
productOrderRouter.get("/user/orders", singleUserOrders);
productOrderRouter.get("/", getAllOrders);
productOrderRouter.get("/countOrder", countAllOrders);
productOrderRouter.delete("/:id", deleteOneOrder);
productOrderRouter.delete("/", deleteAllOrders);

// Export order router
export default productOrderRouter;
