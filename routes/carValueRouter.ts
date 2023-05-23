import express from "express";
import postModelYearController from "../controllers/postModelYearController";
import getCarValueController from "../controllers/getCarValueController";
const router = express.Router();



router.post("/", postModelYearController);
router.get("/", getCarValueController);

export default router;
