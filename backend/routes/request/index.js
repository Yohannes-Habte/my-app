import express from 'express';
import { createRequest } from '../../controllers/request/index.js';


const requestRouter = express.Router();

// Request Routes
requestRouter.post('/new-request', createRequest);

// Export Router
export default requestRouter;
