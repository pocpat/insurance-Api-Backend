import express from "express";
import { carValueData } from "../carValServices/carValueData";
import { validateCarInfo } from "../carValServices/validateCarInfo";

const postModelYearController = (
  req: express.Request,
  res: express.Response
) => {
  const model = req.body.model;
  const year = req.body.year;
  const validationResult = validateCarInfo(model, year);
  if (!validationResult.valid) {
    res.status(400).send(validationResult.message);
    return;
  } else {
    carValueData.CarInfo.push({ model: model, year: year });
    res.send(
      "Model from posrMYC " + model + " and Year from posrMYC is " + year
    );
  }
};
export default postModelYearController;
