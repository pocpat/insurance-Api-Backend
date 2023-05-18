const validateClaimHistory = require("./validateClaimHistory");

function calculateRiskRating(claimHistory) {
  if (!validateClaimHistory(claimHistory)) {
    return "Invalid claim history";
  }
  // Define an array of keywords to search for in the claim history
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  // Initialize the risk rating to 0
  let riskRating = 0;
  // Loop through each keyword and count the number of occurrences in the claim history
  for (const keyword of keywords) {
    riskRating += (claimHistory.match(new RegExp(keyword, "g")) || []).length;
  }
  // Return the calculated risk rating
  return riskRating;
}

module.exports = calculateRiskRating;
