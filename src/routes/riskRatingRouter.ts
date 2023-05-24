import express from "express";
import { postClaimHistoryController } from "../controllers/postClaimHistoryController";
import { getRiskRatingController } from "../controllers/getRiskRatingController";

const riskRatingRouter = express.Router();

riskRatingRouter.get("/", getRiskRatingController);
riskRatingRouter.post("/", postClaimHistoryController);

export default riskRatingRouter;
