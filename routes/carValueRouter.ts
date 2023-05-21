import express from "express";
import { CarInfoElement } from "../types/typesCarValue";
import  postModelYearController  from "../controllers/postModelYearController";
import getCarValueController  from "../controllers/getCarValueController";
// const app = express();
const router = express.Router();

export let CarInfo: CarInfoElement[] = [];

router.post("/carValueRouter", postModelYearController);
router.get("/carValueRouter", getCarValueController);

export default router;
