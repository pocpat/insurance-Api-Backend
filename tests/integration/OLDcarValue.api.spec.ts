import { Server } from "http";
import request from "supertest";
import app from "../../src/app";
import carValue from "../../src/carValServices/calculateCarValue";
import { getMockReq, getMockRes } from "@jest-mock/express";

// test("returns status 200 if model and year are valid", async () => {
//   //arrange
//   const { res, next } = getMockRes({
//     locals: {
//       model: "BMW",
//       year: 2020,
//       valid: true,
//     },
//   });


//   test("will respond with the entity from the service", async () => {
//     // generate a mock request with params
//     const req = getMockReq({ params: { model: "BMW", year: "2020" } });

//     // provide the mock req, res, and next to assert
//     await app.getEntity(req, res, next);

//     expect(res.json).toHaveBeenCalledWith(
//       expect.objectContaining({
//         id: "abc-def",
//       })
//     );
//     expect(next).toBeCalled();
//   });
// });

// describe("Car Value API", () => {
//   test("GET /carValue returns status 200", async () => {
//     //arrange
//     const expected = [
//       {
//         model: "BMW",
//         year: "2020",
//         message: {
//           valid: true,
//           year: 2020,
//           model: "BMW",
//           message: carValue + "$",
//         },
//       },
//     ];
//     //act
//     const res = await request(app).get("/carValueRouter");
//     // const res = await request(app).get('/carValueRouter?model=BMW&year=2020');
//     //assert
//     expect(res.status).toEqual(200);
//     expect(res.body).toEqual(expected);
//   });
// });

// describe("GET / carValue", () => {
//     test("returns status 400 if model is missing", async () => {
//         //arrange
//         const expected = "Invalid query parameters";
//         //act
//         const res = await request(app).get("/carValueRouter?year=2020");
//         //assert
//         expect(res.status).toEqual(400);
//         expect(res.text).toEqual(expected);
//     });
//     test("returns status 400 if year is missing", async () => {
//         //arrange
//         const expected = "Invalid query parameters";
//         //act
//         const res = await request(app).get("/carValueRouter?model=BMW");
//         //assert
//         expect(res.status).toEqual(400);
//         expect(res.text).toEqual(expected);
//     }
//     );
//     test("returns status 400 if model is invalid", async () => {
//         //arrange
//         const expected = "Invalid model";
//         //act
//         const res = await request(app).get("/carValueRouter?model=20&year=2020");
//         //assert
//         expect(res.status).toEqual(400);
//         expect(res.text).toEqual(expected);
//     }
//     );
//     test("returns status 400 if year is invalid", async () => {
//         //arrange
//         const expected = "Invalid year";
//         //act
//         const res = await request(app).get("/carValueRouter?model=BMW&year=2025");
//         //assert
//         expect(res.status).toEqual(400);
//         expect(res.text).toEqual(expected);
//     }
//     );

