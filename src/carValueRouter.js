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
  const input1 = req.body.input1;
  const input2 = req.body.input2;

  // random function for testing API POST request
  function calculate(input1, input2) {
    const result = input1 * (input1 + input2) / input2;
    return result;
  }

  const result = calculate(input1, input2);
  res.json({ result: result });
});


// exporting route
module.exports = router;
