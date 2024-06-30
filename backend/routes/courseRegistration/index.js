import express from "express";
import {
  countRegisteredCourses,
  courseRegistration,
  deleteRegisteredCourse,
  deleteRegisteredCourses,
  getRegisteredCourse,
  getRegisteredCourses,
  updateRegistration,
} from "../../controllers/courseRegistration/index.js";

// Course Router
const courseRegistrationRouter = express.Router();

// Routes
courseRegistrationRouter.post("/", courseRegistration);
courseRegistrationRouter.put("/update/:id", updateRegistration);
courseRegistrationRouter.get("/:id", getRegisteredCourse);
courseRegistrationRouter.get("/", getRegisteredCourses);
courseRegistrationRouter.get("/count", countRegisteredCourses);
courseRegistrationRouter.delete("/:id", deleteRegisteredCourse);
courseRegistrationRouter.delete("/", deleteRegisteredCourses);
// Export Router
export default courseRegistrationRouter;
