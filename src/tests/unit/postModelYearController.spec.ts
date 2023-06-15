import postModelYearController from "../../controllers/postModelYearController";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { carValueData } from "../../carValServices/carValueData";

describe("postModelYearController", () => {
  test("returns 200 for valid input", () => {
    //arrange
    const reqMock = getMockReq({
      body: {
        model: "BMW",
        year: "2022",
      },
    });
    const { res } = getMockRes();
    carValueData.CarInfo.push({ model: "BMW", year: 2022 });

    //act
    postModelYearController(reqMock, res);

    //assert
    expect(res.send).toBeCalledTimes(1);
  });
});
