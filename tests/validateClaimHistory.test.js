const validateClaimHistory = require("../src/validateClaimHistory");

test("returns false for non-string values", () => {
  expect(validateClaimHistory(null)).toBe(false);
  expect(validateClaimHistory(undefined)).toBe(false);
  expect(validateClaimHistory(123)).toBe(false);
  expect(validateClaimHistory(true)).toBe(false);
  expect(validateClaimHistory({})).toBe(false);
  expect(validateClaimHistory([])).toBe(false);
});

test("returns false for empty strings", () => {
  expect(validateClaimHistory("")).toBe(false);
  expect(validateClaimHistory("   ")).toBe(false);
});

test("returns false for strings containing only numbers", () => {
  expect(validateClaimHistory("12345")).toBe(false);
  expect(validateClaimHistory("00000")).toBe(false);
});

test("returns true for non-empty strings that do not contain only numbers", () => {
  expect(validateClaimHistory("abc")).toBe(true);
  expect(validateClaimHistory("123abc")).toBe(true);
  expect(validateClaimHistory("abc123")).toBe(true);
});
