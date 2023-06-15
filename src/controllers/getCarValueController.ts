import express from "express";
import calculateCarValue from "../carValServices/calculateCarValue";
import validateModel from "../carValServices/validateModel";
import { carValueData } from "../carValServices/carValueData";

const getCarValueController = (req: express.Request, res: express.Response) => {
  console.log(" line 10 : Data in carValueData:", carValueData);

  let model = carValueData.CarInfo[carValueData.CarInfo.length - 1]
    .model as string;
  let year = carValueData.CarInfo[carValueData.CarInfo.length - 1]
    .year as number;

  console.log(
    " line 17 : model from get CNTRL:",
    model,
    "year from get CNTRL:",
    year
  );

  if (model === undefined || year === undefined) {
    res.status(400).send("Invalid query parameters");
    return;
  }

  const validationResult = validateModel(model);
  console.log("line 25: validationResult:", validationResult);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  }

  const modelname = validationResult.modelname as string;
  console.log("line 32 : modelname:", modelname);
  const carValue = calculateCarValue(modelname, year);
  console.log("line 34: carValue:", carValue);
  console.log("line 35: Sending response:", carValue.message);
  res.status(200).send(carValue.message);
};
export default getCarValueController;
