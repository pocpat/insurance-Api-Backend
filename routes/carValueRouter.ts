import express from "express";
import postModelYearController from "../controllers/postModelYearController";
import getCarValueController from "../controllers/getCarValueController";

<<<<<<< HEAD
const router = express.Router();
=======
// export let CarInfo: CarInfoElement[] = [];
export const carValueData = {
    CarInfo: [] as CarInfoElement[],
  };
>>>>>>> elena-ts

router.post("/", postModelYearController);
router.get("/", getCarValueController);

export default router;
