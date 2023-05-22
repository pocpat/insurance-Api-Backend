import express from "express";
import postModelYearController from "../controllers/postModelYearController";
import getCarValueController from "../controllers/getCarValueController";

const router = express.Router();

router.post("/carValueRouter", postModelYearController);
router.get("/carValueRouter", getCarValueController);

export default router;
