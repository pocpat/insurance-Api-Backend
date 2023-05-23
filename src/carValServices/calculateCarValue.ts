import validateModel from "./validateModel";
import validateYear from "./validateYear";

interface ValidationResultValue {
  valid: boolean;
  year: number;
  model: string | (string & number);
  message: string | number;
}

// BUSINESS RULES FOR CALCULATING CAR VALUE
function calculateCarValue(model: string, year: number): ValidationResultValue {
  if (!validateModel(model)) {
    return { valid: false, year: year, model: model, message: "Invalid model" };
  }
  if (!validateYear(year)) {
    return { valid: false, year: year, model: model, message: "Invalid year" };
  }
  let modelValue = 0;
  for (let i = 0; i < model.length; i++) {
    modelValue += model.charCodeAt(i) - 96;
  }
  const carValue = modelValue * 100 + year;
  return { valid: true, year: year, model: model, message: carValue + "$" };
}

export default calculateCarValue;
