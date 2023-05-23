import request from "supertest";
import express from "express";
import app from "../../src/app";
import getCarValueController from "../../controllers/getCarValueController";
import { carValueData } from "../../routes/carValueRouter";
// import { model } from "mongoose";

// describe("Car Value routes", () => {
//   test("Get value from the given model and year", async () => {
//     const res = await request(app)
//       .get("/carValueRouter")
//       .query({ model: "BMW", year: "2020" });
//     expect(res.body).toEqual(5820);
//   });
// });

// ====================> something wrong . . . <====================
//      expected: "5820$", Received: {}

// describe("Car Value routes", () => {
//   test("Get value from the given model and year", async () => {
//     // Send a POST request to store the data in carValueData
//     await request(app)
//       .post("/carValueRouter")
//       .send({ model: "BMW", year: "2020" });

//     // Wait for the POST request to complete
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Send a GET request to calculate the car value using the data stored in carValueData
//     const res = await request(app).get("/carValueRouter");
//     console.log("Received response:", res.body);
//     expect(res.body).toEqual("5820$");
//   });
// });


//  ====================> something wrong . . . <====================
//       carValueRouter is the problem  (needs 2 inputs)
// test("it should return 5820$", async () => {
//   const controller = carValueRouter( model, year);
//   const input = { model: "BMW", year: "2020" };
//   const result = await controller.getCarValueController(input);
//   expect(result).toEqual("5820$");
// });
 
//  ====================> something wrong . . . <====================
//   res.status is 500 not 200
describe("Car Value routes API ", () => {
  test ("Get value from the given model and year", async () => {
  //arrange
  const expected = [
  {
  module: "BMW",
  year: "2020",
  message: {
  message: 5820 + "$",
  }
  },
  ];
 
  //act
  const res = await request(app).get("/carValueRouter");
 
  //assert
  expect(res.status).toEqual(200);
  expect(res.body).toEqual(expected);
  });
 });