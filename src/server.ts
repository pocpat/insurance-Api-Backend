import express from "express";
const router = express.Router();

import app from "./app";

const PORT = process.env.PORT || 4000;


app.listen(PORT, (): void => console.log(`running on port ${PORT}`));







