// This function validates the claim history input
function validateClaimHistory(claimHistory) {
  // Check if claimHistory is of type string
  if (typeof claimHistory !== "string") {
    return false;
  }
  // Check if claimHistory is an empty string after trimming whitespace
  if (claimHistory.trim() === "") {
    return false;
  }
  // Check if claimHistory consists only of digits
  if (/^\d+$/.test(claimHistory)) {
    return false;
  }
  // If none of the above conditions are met, return true
  return true;
}
// Export the validateClaimHistory function for use in other modules
module.exports = validateClaimHistory;
