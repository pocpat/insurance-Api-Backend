const express = require("express");
//using Express Router
const router = express.Router();


 
  //get request test from this route
  router.get("/carValueRouter", (req, res) => {
    console.log("/carValueRouter");
    res.send("Hello Car Value Page");
  });


  // exporting route
module.exports = router;