import express from "express";
import { getQueryParams } from "../src/carValServices/getQueryParams";
import calculateCarValue from "../src/carValServices/calculateCarValue";
import validateModel from "../src/carValServices/validateModel";
import { carValueData } from "../routes/carValueRouter";

// const getCarValueController = (req: express.Request, res: express.Response) => {
//     const { model, year } = getQueryParams(req);
//     console.log("model from get CNTRL:", model, "year from get CNTRL:", year);

//     if (model === undefined || year === undefined) {
//       res.status(400).send("Invalid query parameters");
//       return;
//     }
  
//     const validationResult = validateModel(model);
//     console.log("validationResult:", validationResult);
//     if (!validationResult.valid) {
//       res.status(400).send(validationResult.message);
//       return;
//     }
  
//     const modelname = validationResult.modelname as string;
//     console.log("modelname:", modelname);
//     const carValue = calculateCarValue(modelname, year);
//     console.log("carValue:", carValue);
//     res.send(carValue.message);
  
//   //  let CarInfo: CarInfoElement[] =[];
   
//     };
//     export default getCarValueController;

const getCarValueController = (req: express.Request, res: express.Response) => {
  console.log("Data in carValueData:", carValueData);
  const model = carValueData.CarInfo[0].model;
  const year = carValueData.CarInfo[0].year;
  console.log("model from get CNTRL:", model, "year from get CNTRL:", year);

  if (model === undefined || year === undefined) {
    res.status(400).send("Invalid query parameters");
    return;
  }

  const validationResult = validateModel(model);
  console.log("validationResult:", validationResult);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  }

  const modelname = validationResult.modelname as string;
  console.log("modelname:", modelname);
  const carValue = calculateCarValue(modelname, year);
  console.log("carValue:", carValue);
  console.log("Sending response:", carValue.message);
  res.send(carValue.message);
};
export default getCarValueController;
