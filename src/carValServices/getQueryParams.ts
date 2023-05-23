import { Request } from "express";
// import { CarInfo } from "../../routes/carValueRouter";
import { carValueData } from "../../routes/carValueRouter";
import { QueryParams } from "../../types/typesCarValue";
import { CarInfoElement } from "../../types/typesCarValue";

export function getQueryParams(req: Request): QueryParams {
  console.log("req.query from getQuqretyParams:", req.query);
  // const model = CarInfo[0].model as string;
  // const year = CarInfo[0].year as number;
  // console.log("model from getQP:", model, "year from getQP:", year);

  if (!carValueData.CarInfo || carValueData.CarInfo.length === 0) {
    return {};
  }
  const model = carValueData.CarInfo[0].model as string;
  const year = carValueData.CarInfo[0].year as number;
  // const model = req.query.model as string;
  // const year = parseInt(req.query.year as string);
  return { model, year };
}
