import validateYear from "../../../src/carValServices/validateYear";

test("returns 2020 for year with 4 numbers", () => {
  //arrange
  let year = 2020;
  const expected = {
    valid: true,
    year: year,
  };
  //act
  let result = validateYear(year);
  //assert
  expect(result).toEqual(expected);
});

test("returns undefined for year not between 1900-2023", () => {
  //arrange
  let year = 1899;
  const expected = {
    valid: false,
    message: "Invalid year. Year must be between 1900-2023.",
  };
  //act
  let result = validateYear(year);
  //assert
  expect(result).toEqual(expected);
});

test(" returns 1999 for year  between 1900-2023", () => {
  //arrange
  let year = 1899;
  const expected = {
    valid: false,
    message: "Invalid year. Year must be between 1900-2023.",
  };
  //act
  let result = validateYear(year);
  //assert
  expect(result).toEqual(expected);
});
test(" returns 2005 for year  between 1900-2023", () => {
  //arrange
  let year = 2005;
  const expected = {
    valid: true,
    year: year,
  };
  //act
  let result = validateYear(year);
  //assert
  expect(result).toEqual(expected);
});

test(" returns undefined for numbers length more then 4", () => {
  //arrange
  let year = 20203;
  const expected = {
    valid: false,
    message: "Invalid year format.",
  };
  //act
  let result = validateYear(year);
  //assert
  expect(result).toEqual(expected);
});