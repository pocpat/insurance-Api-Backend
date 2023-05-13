const express = require("express");
//using Express Router
const router = express.Router();

//get request test from this route
router.get("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  // res.send("Hello Car Value Page");
  const data = req.body;
  res.json(data);
});

// POST request for this endpoint
router.post("/carValueRouter", (req, res) => {
  console.log("/carValueRouter");
  const data = req.body;
  res.json(data);
});

// exporting route
module.exports = router;
