const validateClaimHistory = require("./validateClaimHistory");

function calculateRiskRating(claimHistory) {
  if (!validateClaimHistory(claimHistory)) {
    return "Invalid claim history";
  }
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  let riskRating = 0;
  for (const keyword of keywords) {
    riskRating += (claimHistory.match(new RegExp(keyword, "g")) || []).length;
  }
  return riskRating;
}

module.exports = calculateRiskRating;
