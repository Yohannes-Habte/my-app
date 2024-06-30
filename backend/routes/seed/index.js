import express from 'express';
import createProducts from '../../controllers/seed/index.js';

const seedRouter = express.Router();

seedRouter.get('/', createProducts);

export default seedRouter;
