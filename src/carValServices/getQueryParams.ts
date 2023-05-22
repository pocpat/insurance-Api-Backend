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
import { QueryParams } from "../../types/typesCarValue";
import { CarInfo } from "./carInfo";

export function getQueryParams(req: Request): QueryParams {
  const model =req.body.model as string;
  const year = parseInt(req.body.year as string);


  if (model === undefined || isNaN(year)) {
    console.log("model from getQueryParams:", model, "year from getQueryParams:", year);
    return {};
  }
console.log("model from getQueryParams:", model, "year from getQueryParams:", year);
  return { model, year };
}