import { Request, Response } from "express";
import calculateRiskRating from "../riskRating/calculateRiskRating";

export const postClaimHistoryController = (req: Request, res: Response) => {
  const claimHistory = req.body.claimHistory;
  const riskRating = calculateRiskRating(claimHistory);
  res.json({ risk_rating: riskRating });
};
