const express = require("express");
const cors = require("cors");
//enable express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();

 // Route Imports
 const carValueRouter = require("./carValueRouter");
 const riskRatingRouter = require("./riskRatingRouter");
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
    }
);

