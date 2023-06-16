import { Request, Response } from "express";

export const getRiskRatingController = (req: Request, res: Response) => {
  res.send("Hello Risk Rating Page");
};
