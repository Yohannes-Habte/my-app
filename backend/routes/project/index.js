import express from 'express';
import { createProject } from '../../controllers/project/index.js';


const projectRouter = express.Router();

// Role Routes
projectRouter.post('/new-project', createProject);

// Export Router
export default projectRouter;
