const express = require("express");

//using Express Router
const router = express.Router();



  
  //get request test from this route
  router.get("/riskRatingRouter", (req, res) => {
    console.log("/riskRatingRouter");
    res.send("Hello Risk Rating Page");
  });



  // exporting route
module.exports = router;