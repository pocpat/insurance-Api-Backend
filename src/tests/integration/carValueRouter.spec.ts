import request from "supertest";
import express from "express";
import app from "../../app";
// import getCarValueController from "../../../controllers/getCarValueController";
import { carValueData } from "../../carValServices/carValueData";
// import { model } from "mongoose";
// import { CarInfo } from "../../carValServices/carInfo";
import { CarInfoElement } from "../../../types/typesCarValue";


describe("Car Value routes API ", () => {
  test("Get value from the given model and year", async () => {
    //arrange
    carValueData.CarInfo.push({ model: "BMW", year: 2020 });
    const expected = "5820$";

    //act
    const res = await request(app).get("/carValueRouter");

    //assert
    expect(res.status).toEqual(200);
    expect(res.text).toEqual(expected);
  });
});
describe("Car Value POST API ", () => {
  test("Post model and year", async () => {
    //arrange
    const expectedElement = { model: "BMW", year: 2020 } as CarInfoElement;

    //act
    const res = await request(app).post("/carValueRouter").send(expectedElement);

    //assert
    expect(res.status).toEqual(200);
    expect(carValueData.CarInfo[carValueData.CarInfo.length-1]).toEqual(expectedElement);
  });
} );