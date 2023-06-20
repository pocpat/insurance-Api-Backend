import { Request } from "express";
import { carValueData } from "./carValueData";
import { QueryParams } from "../types/typesCarValue";

export function getQueryParams(req: Request): QueryParams {
  if (!carValueData.CarInfo || carValueData.CarInfo.length === 0) {
    return {};
  }
  const model = carValueData.CarInfo[0].model as string;
  const year = carValueData.CarInfo[0].year as number;
  return { model, year };
}
