import express from "express";
import {
  getCourseData,
  getFooterData,
  getHomePageInvestmentSystems,
  getHomePageTitleData,
  getProcedures,
  getResearchData,
} from "../../controllers/staticData/index.js";

// Router for the frontend pages data
const staticDataRouter = express.Router();

// Routes
staticDataRouter.get("/homePageTitle", getHomePageTitleData);
staticDataRouter.get("/investments", getHomePageInvestmentSystems);
staticDataRouter.get("/procedures", getProcedures);
staticDataRouter.get("/courses", getCourseData);
staticDataRouter.get("/researches", getResearchData);
staticDataRouter.get("/footer", getFooterData);

// Export Router
export default staticDataRouter;
