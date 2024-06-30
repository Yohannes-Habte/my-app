import express from 'express';
import { createRating } from '../../controllers/rating/index.js';

const ratingRouter = express.Router();

// Rating Routes
ratingRouter.post('/new-rating', createRating);

// Export Router
export default ratingRouter;