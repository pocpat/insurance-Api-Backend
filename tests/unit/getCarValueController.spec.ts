import getCarValueController from "../../controllers/getCarValueController";
import { getMockReq, getMockRes } from '@jest-mock/express';

describe("getCarValueController", () => {
 test("returns 200 for valid input", () => {
 //arrange
 const req = getMockReq({
 body: {
 model: "BMW",
 year: "2020"
 }
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
    const req = getMockReq({
    body: {
    model: "345",
    year: "2020"
    }
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
    const req = getMockReq({
    body: {
    model: "Toyota 22",
    year: "2020"
    }
    });
    const { res } = getMockRes();
    //act
    getCarValueController(req, res);
    //assert
    expect(res.status).toHaveBeenCalledWith(200);
    });
   });