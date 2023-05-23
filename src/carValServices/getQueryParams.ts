// import { Request } from "express";
// import { QueryParams } from "../../types/typesCarValue";

// export function getQueryParams(req: Request): QueryParams {
//   const model = req.query.model as string;
//   const year = parseInt(req.query.year as string);

//   if (model === undefined || isNaN(year)) {
//     return {};
//   }

//   return { model, year };
// }

import { Request } from "express";
// import { CarInfo } from "../../routes/carValueRouter";
import { carValueData } from "./carValueData";
import { QueryParams } from "../../types/typesCarValue";
import { CarInfo } from "./carInfo";

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