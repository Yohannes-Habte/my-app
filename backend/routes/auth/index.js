import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
  updateUserProfile,
} from "../../controllers/auth/index.js";

const authRouter = express.Router();

// User Routes
authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);
authRouter.put("/:id/profile/update", updateUserProfile);
authRouter.put("/update/:id", updateUser);

// Export Router
export default authRouter;
