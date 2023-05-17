import express from "express";
import cors from "cors";
//enable express
const app = express();

import path from "path";

app.use(express.static(path.join(__dirname,'..', 'public')));

// Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();

import validateModel from "./validateModel";

// Route Imports
import carValueRouter from "../routes/carValueRouter";
import riskRatingRouter from "../routes/riskRatingRouter";
// Routes
app.use(carValueRouter);
app.use(riskRatingRouter);

// =================GET=======================
app.get("/", (req, res) => {
  res.send("Hello Main Page :)");
});

// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
 
  console.log(`Server Connected! Listening at http://localhost:${PORT}`);
});
