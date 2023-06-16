import validateClaimHistory from "./validateClaimHistory";
import { calculateRiskRating } from "../types/typesRiskRating";

function calculateRiskRating(claimHistory: string): string | number {
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

export default calculateRiskRating;
