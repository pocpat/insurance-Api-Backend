import express from "express";
import calculateCarValue from "../src/carValServices/calculateCarValue";
import validateModel from "../src/carValServices/validateModel";
import { validateCarInfo } from "../src/carValServices/validateCarInfo";
import { getQueryParams } from "../src/carValServices/getQueryParams";
import { CarInfoElement } from "../types/typesCarValue";

const app = express();
const router = express.Router();

export let CarInfo: CarInfoElement[] = [];

//================================================
//=====================POST=======================
router.post("/carValueRouter", (req, res) => {
  const model = req.body.model;
  const year = req.body.year;
  const validationResult = validateCarInfo(model, year);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  } else {
    CarInfo.push({ model: model, year: year });
    res.send("Model " + model + " and Year is " + year);
  }
});
// =================================================
// =================================================

//================================================
//=====================GET=======================
router.get("/carValueRouter", (req, res) => {
  const { model, year } = getQueryParams(req);

  if (model === undefined || year === undefined) {
    res.status(400).send("Invalid query parameters");
    return;
  }

  const validationResult = validateModel(model);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  }

  const modelname = validationResult.modelname as string;
  const carValue = calculateCarValue(modelname, year);
  res.send(carValue.message);

  
  CarInfo = [];
  console.log("CarInfo:", CarInfo);
});
// =================================================
// =================================================

export default router;
