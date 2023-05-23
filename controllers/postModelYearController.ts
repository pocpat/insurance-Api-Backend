import express from "express";
<<<<<<< HEAD
import { CarInfo } from "../src/carValServices/carInfo";
=======
// import { CarInfo } from "../routes/carValueRouter";
import { carValueData } from "../routes/carValueRouter";
>>>>>>> elena-ts
import { validateCarInfo } from "../src/carValServices/validateCarInfo";
// import { CarInfoElement } from "../types/typesCarValue";

<<<<<<< HEAD
const postModelYearController = (req: express.Request, res: express.Response) => {
  const model = req.body.model;
  const year = req.body.year;
  const validationResult = validateCarInfo(model, year);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  } else {
    CarInfo.push({ model: model, year: year });
    console.log("CarInfo from postMYC:", CarInfo);
    res.send("Model from posrMYC " + model + " and Year from posrMYC is " + year);
  }
}
export default postModelYearController;
=======

const  postModelYearController = (req: express.Request, res: express.Response) => {
    const model = req.body.model;
    const year = req.body.year;
    const validationResult = validateCarInfo(model, year);
    if (!validationResult.valid) {
        res.status(400).send(validationResult.message);
        return;
    } else {
        carValueData.CarInfo.push({ model: model, year: year });
        console.log("data store in carValueData:", carValueData);
        res.send("Model from posrMYC " + model + " and Year from posrMYC is " + year);
    }
    }
    export default postModelYearController;
>>>>>>> elena-ts

