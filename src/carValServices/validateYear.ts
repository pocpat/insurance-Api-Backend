import { ValidationResult } from "../types/typesCarValue";
("../types/typesCarValue");
function validateYear(year: number): ValidationResult {
  if (/^\d{4}$/.test(year.toString())) {
    const yearNumber = year;
    if (yearNumber >= 1900 && yearNumber <= 2023) {
      return { valid: true, year: year };
    } else {
      return {
        valid: false,
        message: "Invalid year. Year must be between 1900-2023.",
      };
    }
  } else {
    return { valid: false, message: "Invalid year format." };
  }
}
export default validateYear;
