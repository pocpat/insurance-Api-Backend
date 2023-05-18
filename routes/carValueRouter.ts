import express from "express";
import calculateCarValue from "../src/calculateCarValue";
import validateModel from "../src/validateModel";
import validateYear from "../src/validateYear";

const router = express.Router();

let CarInfo: any[] = [];

router.post("/carValueRouter", (req, res) => {
  // console.log("CarInfo:", CarInfo, "/carValueRouter");
  const model = req.body.model;
  const year = req.body.year;
  const validationResultModel = validateModel(model);
  const validationResultYear = validateYear(year);
  if (!validationResultModel.valid) {
    res.status(400).send(validationResultModel.message);
    return;
  }else if (!validationResultYear.valid) {
    res.status(400).send(validationResultYear.message);
    return;
  }else
    {
  CarInfo.push({ model: model, year: year });
  res.send("Model " + model + " and Year is " + year);
  }
});

//================================================
//======================GET=======================
 router.get("/carValueRouter", (req, res) => {
 // Get the model and year query parameters from the request
  const model = CarInfo[0].model as string;
  const year = parseInt(CarInfo[0].year as string);

  if (model === undefined || isNaN(year)) {
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
