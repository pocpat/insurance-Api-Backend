import express from "express";
import calculateCarValue from "../carValServices/calculateCarValue";
import validateModel from "../carValServices/validateModel";
import { carValueData } from "../carValServices/carValueData";


const getCarValueController = (req: express.Request, res: express.Response) => {

  let model = carValueData.CarInfo[carValueData.CarInfo.length - 1]
    .model as string;
  let year = carValueData.CarInfo[carValueData.CarInfo.length - 1]
    .year as number;

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
    res.status(200).send(carValue.message);
  
  };
  export default getCarValueController;
