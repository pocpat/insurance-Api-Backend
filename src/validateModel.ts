import { ValidationResultModel } from "../types/typesCarValue";

function validateModel(model: string): ValidationResultModel {
  if (
    model === "" ||
    !/^[a-zA-Z0-9 ]+$/.test(model) ||
    /^[0-9]+$/.test(model)
  ) {
    if (/[^a-zA-Z0-9 ]/.test(model)) {
      return { valid: false, message: "Model contains disallowed symbols" };
    } else if (/^[0-9]+$/.test(model)) {
      return { valid: false, message: "Model cannot contain only numbers" };
    } else {
      return {
        valid: false,
        message:
          "Model must be a non-empty string containing only letters, numbers, and spaces",
      };
    }
  }
  const modelname = model.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return { valid: true, modelname };
}
export default validateModel;
