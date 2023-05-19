import express from "express";
import { CarInfoElement } from "../types/typesCarValue";
import  postModelYearController  from "../controllers/postModelYearController";
import getCarValueController  from "../controllers/getCarValueController";
import {getQueryParams}  from "../src/carValServices/getQueryParams";
import calculateCarValue from "../src/carValServices/calculateCarValue";
import validateModel from "../src/carValServices/validateModel";
const app = express();
const router = express.Router();

export let CarInfo: CarInfoElement[] = [];
console.log("CarInfo from Router:", CarInfo);

router.post("/carValueRouter", postModelYearController);
console.log("CarInfo from Router after POST :", CarInfo);
//================================================
//=====================GET=======================
// router.get("/carValueRouter", (req, res) => {
//   const { model, year } = getQueryParams(req);

//   if (model === undefined || year === undefined) {
//     res.status(400).send("Invalid query parameters");
//     return;
//   }

//   const validationResult = validateModel(model);
//   if (!validationResult.valid) {
//     res.status(400).send(validationResult.message);
//     return;
//   }

//   const modelname = validationResult.modelname as string;
//   const carValue = calculateCarValue(modelname, year);
//   res.send(carValue.message);

  
//   CarInfo = [];
//   console.log("CarInfo:", CarInfo);
// });




 router.get("/carValueRouter", getCarValueController);
// =================================================
// =================================================

export default router;
