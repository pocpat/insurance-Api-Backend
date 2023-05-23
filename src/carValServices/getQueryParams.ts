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
<<<<<<< HEAD
=======
// import { CarInfo } from "../../routes/carValueRouter";
import { carValueData } from "../../routes/carValueRouter";
>>>>>>> elena-ts
import { QueryParams } from "../../types/typesCarValue";
import { CarInfo } from "./carInfo";

export function getQueryParams(req: Request): QueryParams {
<<<<<<< HEAD
  const model =req.body.model as string;
  const year = parseInt(req.body.year as string);


  if (model === undefined || isNaN(year)) {
    console.log("model from getQueryParams:", model, "year from getQueryParams:", year);
    return {};
  }
console.log("model from getQueryParams:", model, "year from getQueryParams:", year);
=======
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
>>>>>>> elena-ts
  return { model, year };
}