import express from "express";
import calculateCarValue from "../src/calculateCarValue";
import validateModel from "../src/validateModel";

const router = express.Router();
// make storage for incoming model and year and push new income into the array.
let CarInfo: any[] = [];

router.post("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  const model = req.body.model;
  const year = req.body.year;
  console.log("model:", model);
  console.log("year:", year);
  CarInfo.push({model: model, year: year});
  res.send("Model " + model + " and Year is " + year);

});

router.get("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");

  // Get the model and year query parameters from the request
  const model = CarInfo[0].model as string;
  const year = parseInt(CarInfo[0].year as string);
  console.log("model:", model);
  console.log("year:", year);

  if (model === undefined || isNaN(year)) {
    res.status(400).send("Invalid query parameters");
    return;
  }
  // Call the validateModel function and pass in the model query parameter
  const validationResult = validateModel(model);

  // Check if the model is valid
  if (!validationResult.valid) {
    // If the model is not valid, send an error message to the client
    res.status(400).send(validationResult.message);
    return;
  }

  const modelname = validationResult.modelname as string;
  const carValue = calculateCarValue(modelname, year);
  console.log("carValue:", carValue);
  res.send(carValue.message);
  CarInfo = [];
  console.log("CarInfo:", CarInfo);
});

export default router;
