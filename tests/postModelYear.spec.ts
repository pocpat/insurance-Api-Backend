import postModelYearController from "../controllers/postModelYearController";
import { CarInfo } from "../routes/carValueRouter";

describe("postModelYearController", () => {
    test("returns 200 for valid input", () => {
        //arrange
        let model = "toyota";
        let year = 2005;
        const expected = CarInfo;
        //act
        let result = postModelYearController(model, year);
        //assert
        expect(result).toEqual(expected);
    }