const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
//enable express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();


const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 2,
  database: process.env.MYSQL_DATABASE,
});

// Route Imports
const carValueRouter = require("./routes/carValueRoute");
const riskRatingRouter = require("./routes/riskRatingRoute");
// Routes
app.use(carValueRouter);
app.use(riskRatingRouter);


// ----------------------------------------
// copy from Mission X 
// ----------------------------------------
// console.log("DB_HOST", process.env.DB_HOST);
// console.log("port", port);
// =================GET=======================
// app.get("/", (req, res) => {
//   res.send("hello MAIN PAGE");
// });

 // app.get("/teacher", (req, res) => {
  //   res.send("hello teacher");
  // });



//------------------------------------------    
// ----------------------------------------


// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else console.log(`Server Connected! Listening at http://localhost:${PORT}`);
    }
);

