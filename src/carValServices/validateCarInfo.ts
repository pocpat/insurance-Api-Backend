import validateModel from "./validateModel";
import validateYear from "./validateYear";
import { ValidationResult } from "../types/typesCarValue";

export function validateCarInfo(model: string, year: number): ValidationResult {
  const validationResultModel = validateModel(model);
  if (!validationResultModel.valid) {
    return validationResultModel;
  }

  const validationResultYear = validateYear(year);
  if (!validationResultYear.valid) {
    return validationResultYear;
  }

  return { valid: true };
}
}
