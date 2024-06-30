import express from "express";
import {
  countAllUsers,
  deleteAllUsers,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  logoutUser,
} from "../../controllers/user/index.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.delete("/", deleteAllUsers);
userRouter.get("/logout", logoutUser);
userRouter.get("/count/allUsers", countAllUsers);
userRouter.get("/:id", getOneUser);
userRouter.delete("/:id", deleteOneUser);


// Export Router
export default userRouter;
