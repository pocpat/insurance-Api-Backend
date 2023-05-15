const express = require("express");
const calculateCarValue = require("../src/calculateCarValue");
const validateModel = require("../src/validateModel");
const validateYear = require("../src/validateYear");
//using Express Router
const router = express.Router();

router.post("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  const model = req.body.model;
  const year = req.body.year;
  res.send('Model and Year is ' + model + ' ' + year);
});

// router.get("/carValueRouter", (req, res) => {
//   console.log("/carValueRouter");
//   const model = req.query.model;
//   const year = req.query.year;
//   console.log("model:", model);
//   console.log("year:", year);
//   const modelname = validateModel(model);
//   const caryear = validateYear(year);
//   const carValue = calculateCarValue(modelname, caryear);
//   console.log("carValue:", carValue);
//   res.send(carValue + '$');
//  });

router.get("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  const model = req.query.model;
  const year = req.query.year;
  console.log("model:", model);
  console.log("year:", year);
  
  // Call the validateModel function and pass in the model query parameter
  const validationResult = validateModel(model);
  
  // Check if the model is valid
  if (!validationResult.valid) {
  // If the model is not valid, send an error message to the client
  res.status(400).send(validationResult.message);
  return;
  }
  
  const modelname = validationResult.modelname;
  const caryear = validateYear(year);
  const carValue = calculateCarValue(modelname, caryear);
  console.log("carValue:", carValue);
  res.send (carValue) ;
 });

module.exports = router;
