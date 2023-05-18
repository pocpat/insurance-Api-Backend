const express = require("express");
const calculateRiskRating = require("../src/calculateRiskRating");
//using Express Router
const router = express.Router();
const app = express();
app.use(express.json());

// Define a GET route for the /riskRatingRouter path
router.get("/riskRatingRouter", (req, res) => {
  console.log("/riskRatingRouter");
  res.send("Hello Risk Rating Page");
});

// Define a POST route for the /riskRatingRouter path
router.post("/riskRatingRouter", (req, res) => {
  // Retrieve the claimHistory value from the request body
  const claimHistory = req.body.claimHistory;
  // Calculate the risk rating using the calculateRiskRating function
  const riskRating = calculateRiskRating(claimHistory);
  // Send a JSON response to the client with the calculated risk rating
  res.json({ risk_rating: riskRating });
});

// exporting route
module.exports = router;
