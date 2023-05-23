import validateModel from "../carValServices/validateModel";

test("returns 'toyota' for model with string", () => {
  //arrange
  let model = "toyota";
  const expected = { modelname: "toyota", valid: true };

  //act
  let result = validateModel(model);

  //assert
  expect(result).toStrictEqual(expected);
});
test("returns 'Mazda&' for model with string", () => {
  //arrange
  let model = "Mazda&";
  const expected = {
    modelname: undefined,
    valid: false,
    message: "Model contains disallowed symbols",
  };

  //act
  let result = validateModel(model);

  //assert
  expect(result).toEqual(expected);
});

test("returns false for empty input", () => {
  //arrange
  let model = " ";
  const expected = {
    valid: false,
    message:
      "Model must be a non-empty string containing only letters, numbers, and spaces",
  };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toEqual(expected);
});

test("returns false for model with numbers only", () => {
  //arrange
  let model = "8739";
  const expected = {
    valid: false,
    message: "Model cannot contain only numbers",
  };

  //act
  let result = validateModel(model);
  //assert
  expect(result).toEqual(expected);
});

test("returns 'toyota' for model with string and numbers", () => {
  //arrange
  let model = "toyota 798";
  const expected = { modelname: "toyota", valid: true };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toStrictEqual(expected);
});

test("returns 'toyotamores' for model with string and space", () => {
  //arrange
  let model = "toyota mores";
  const expected = { modelname: "toyotamores", valid: true };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toStrictEqual(expected);
});

test("returns 'toyota' for model with numbers and string", () => {
  //arrange
  let model = "2085 toyota";
  const expected = { modelname: "toyota", valid: true };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toStrictEqual(expected);
});
test("returns 'toyota' for model with numbers and string and space", () => {
  //arrange
  let model = "20toyota 798";
  const expected = { modelname: "toyota", valid: true };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toStrictEqual(expected);
});

test("returns 'toyota' for model with numbers and string no space", () => {
  //arrange
  let model = "1toyota1798";
  const expected = { modelname: "toyota", valid: true };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toStrictEqual(expected);
});

test("returns false for disallowed symbols", () => {
  //arrange
  let model = "toyot@";
  const expected = {
    valid: false,
    message: "Model contains disallowed symbols",
  };
  //act
  let result = validateModel(model);
  //assert
  expect(result).toEqual(expected);
});
// // Path: src\validateYear.js
