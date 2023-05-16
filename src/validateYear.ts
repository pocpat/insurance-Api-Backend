import { ValidationResultYear } from '../types/typesCarValue';

function validateYear(year: number): ValidationResultYear {
  if (/^\d{4}$/.test(year.toString())) {
    const yearNumber = year;
    if (yearNumber >= 1900 && yearNumber <= 2023) {
      return { valid: true, year: year };
    }
  }
  return { valid: false, year: year };
}
export default validateYear;
