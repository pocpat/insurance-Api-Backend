import { Request } from "express";
import { carValueData } from "./carValueData";
import { QueryParams } from "../types/typesCarValue";

export function getQueryParams(req: Request): QueryParams {
  console.log("req.query from getQuqretyParams:", req.query);

  if (!carValueData.CarInfo || carValueData.CarInfo.length === 0) {
    return {};
  }
  const model = carValueData.CarInfo[0].model as string;
  const year = carValueData.CarInfo[0].year as number;
  return { model, year };
}