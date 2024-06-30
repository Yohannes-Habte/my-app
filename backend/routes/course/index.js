import express from 'express';
import { createCourse } from '../../controllers/course/index.js';


// Course Router
const courseRouter = express.Router();

// Routes
courseRouter.post('/new-course', createCourse);

// Export Router
export default courseRouter;
