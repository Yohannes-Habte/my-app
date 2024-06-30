import express from "express";
import {
  countAllUsers,
  deleteAllUsers,
  deleteOneUser,
  getAllUsers,
  getOneUser,
} from "../../controllers/user/index.js";

const userRouter = express.Router();

userRouter.get("/:id", getOneUser);
userRouter.get("/", getAllUsers);
userRouter.get("/count/allUsers", countAllUsers);
userRouter.delete("/:id", deleteOneUser);
userRouter.delete("/", deleteAllUsers);

// Export Router
export default userRouter;
