import express from "express";
import { CarInfoElement } from "../types/typesCarValue";
import  postModelYearController  from "../controllers/postModelYearController";
import getCarValueController  from "../controllers/getCarValueController";
// const app = express();
const router = express.Router();

// export let CarInfo: CarInfoElement[] = [];
export const carValueData = {
    CarInfo: [] as CarInfoElement[],
  };

router.post("/", postModelYearController);
router.get("/", getCarValueController);

export default router;
