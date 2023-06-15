import getCarValueController from "../../controllers/getCarValueController";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { carValueData } from "../../../src/carValServices/carValueData";
describe("getCarValueController", () => {
  test("returns 200 for valid input", () => {
    //arrange
    carValueData.CarInfo = [];
    carValueData.CarInfo.push({ model: "BMW", year: 2020 });
    const req = getMockReq({
      body: {
        model: "BMW",
        year: "2020",
      },
    });
    const { res } = getMockRes();
    //act
    getCarValueController(req, res);
    //assert
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe("getCarValueController", () => {
  test("returns 400 for invalid input", () => {
    //arrange
    carValueData.CarInfo = [];
    carValueData.CarInfo.push({ model: "345", year: 2020 });
    const req = getMockReq({
      body: {},
    });
    const { res } = getMockRes();
    //act
    getCarValueController(req, res);
    //assert
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

describe("getCarValueController", () => {
  test("returns 200 for invalid input", () => {
    //arrange
    carValueData.CarInfo = [];
    carValueData.CarInfo.push({ model: "BMW", year: 2020 });
    const req = getMockReq({
      body: {
        model: "Toyota 22",
        year: "2020",
      },
    });
    const { res } = getMockRes();
    //act
    getCarValueController(req, res);
    //assert
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
