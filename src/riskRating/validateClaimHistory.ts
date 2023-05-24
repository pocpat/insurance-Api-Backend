import { validateClaimHistory } from "../types/typesRiskRating";

function validateClaimHistory(claimHistory: string): boolean {
  if (typeof claimHistory !== "string") {
    return false;
  }
  if (claimHistory.trim() === "") {
    return false;
  }
  if (/^\d+$/.test(claimHistory)) {
    return false;
  }
  return true;
}

export default validateClaimHistory;
