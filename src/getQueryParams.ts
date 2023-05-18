import { Request } from "express";
import { CarInfo } from "../routes/carValueRouter";
import { QueryParams } from "../types/typesCarValue";
// import { CarInfoElement } from "../types/typesCarValue";

export function getQueryParams(req: Request): QueryParams {
  const model = CarInfo[0].model as string;
  const year = CarInfo[0].year as number;

  if (model === undefined || isNaN(year)) {
    return {};
  }

  return { model, year };
}
