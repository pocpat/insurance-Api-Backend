const express = require("express");
const cors = require("cors");
//enable express
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname,'..', 'public')));

// Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();

const validateModel = require("./validateModel");

// Route Imports
const carValueRouter = require("../routes/carValueRouter");
const riskRatingRouter = require("../routes/riskRatingRouter");
// Routes
app.use(carValueRouter);
app.use(riskRatingRouter);

// =================GET=======================
app.get("/", (req, res) => {
  res.send("Hello Main Page :)");
});

// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`Server Connected! Listening at http://localhost:${PORT}`);
});
