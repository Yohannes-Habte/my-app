import express from "express";
import {
  createTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
} from "../../controllers/todo/index.js";

const todoRouter = express.Router();

// Role Routes
todoRouter.post("/new-todo", createTodo);
todoRouter.put("/update/:id", updateTodo);
todoRouter.put("/todo/:id", getSingleTodo);
todoRouter.get("/", getAllTodos);

// Export Router
export default todoRouter;
