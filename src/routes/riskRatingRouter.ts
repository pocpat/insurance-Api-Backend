import express from "express";
import { postClaimHistoryController } from "../controllers/postClaimHistoryController";
import { getRiskRatingController } from "../controllers/getRiskRatingController";

const router = express.Router();

router.get("/", getRiskRatingController);
router.post("/", postClaimHistoryController);

export default router;
