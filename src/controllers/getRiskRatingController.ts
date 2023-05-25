import { Request, Response } from "express";

export const getRiskRatingController = (req: Request, res: Response) => {
  console.log("/riskRatingRouter");
  res.send("Hello Risk Rating Page");
};
