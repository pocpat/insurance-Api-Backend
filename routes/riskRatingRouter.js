const express = require("express");
const calculateRiskRating = require("../src/calculateRiskRating");
//using Express Router
const router = express.Router();
const app = express();
app.use(express.json());

//get request test from this route
router.get("/riskRatingRouter", (req, res) => {
  console.log("/riskRatingRouter");
  res.send("Hello Risk Rating Page");
});

//post request test from this route
router.post("/riskRatingRouter", (req, res) => {
  const claimHistory = req.body.claimHistory;
  const riskRating = calculateRiskRating(claimHistory);
  //const riskRating = calculateRiskRating('./validateClaimHistory');
  res.json({ risk_rating: riskRating });
});

// exporting route
module.exports = router;
