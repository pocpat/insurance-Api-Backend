const validateModel = require("../src/validateModel");

test("returns 'toyota' for model with string", () => {
  expect(validateModel("toyota")).toBe("toyota");
});
test("returns false for empty input", () => {
  expect(validateModel("")).toEqual({
    valid: false,
    message:
      "Model must be a non-empty string containing only letters, numbers, and spaces",
  });
});

test('returns false for model with numbers only', () => {
  expect(validateModel('8739')).toEqual({
    valid: false,
    message: 'Model cannot contain only numbers',
  });
});
test("returns 'toyota' for model with string and numbers", () => {
  expect(validateModel("toyota 798")).toBe("toyota");
});
test("returns 'toyotamores' for model with string and space", () => {
  expect(validateModel("toyota mores")).toBe("toyotamores");
});
test("returns 'toyota' for model with numbers and string", () => {
  expect(validateModel("2085 toyota")).toBe("toyota");
});
test("returns 'toyota' for model with numbers and string and space", () => {
  expect(validateModel("20toyota 798")).toBe("toyota");
});
test("returns 'toyota' for model with numbers and string no space", () => {
  expect(validateModel("1toyota1798")).toBe("toyota");
});

test("returns false for disallowed symbols", () => {
    expect(validateModel("toyot@")).toEqual({
      valid: false,
      message:
      "Model contains disallowed symbols",
    });
  });
// Path: src\validateYear.js
