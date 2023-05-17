function validateClaimHistory(claimHistory) {
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

module.exports = validateClaimHistory;
