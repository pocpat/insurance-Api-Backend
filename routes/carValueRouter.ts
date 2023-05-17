import express from "express";
import calculateCarValue from "../src/calculateCarValue";
import validateModel from "../src/validateModel";

const router = express.Router();

router.post("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  const model = req.body.model;
  const year = req.body.year;
  res.send("Model and Year is " + model + " " + year);
});

router.get("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");

  // Get the model and year query parameters from the request and defined
  const model = req.query.model as string;
  const year = parseInt(req.query.year as string);
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
});

export default router;
