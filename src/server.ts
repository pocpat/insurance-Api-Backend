import express from "express";
const app = express();
const router = express.Router();
// import path from "path";

// Middlewares
app.use(express.json());

// Route Imports
import carValueRouter from "../routes/carValueRouter";
//  import riskRatingRouter from "../routes/riskRatingRouter";
// Routes
app.use(carValueRouter);
//  app.use(riskRatingRouter);

// =================GET=======================
app.get("/", (req, res) => {
  res.send("Hello Main Page :)");
});

app.use(router);
// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Connected! Listening at http://localhost:${PORT}`);
});
//
