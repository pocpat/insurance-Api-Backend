// function validateModel(model) {
//   if (typeof model === 'undefined') {
//  return { valid: false, message: "Model is required" };
//  }
//   if (model === '' || /^[0-9]+$/.test(model)) {
//     return { valid: false, message:
//       "Model must be a non-empty string containing only letters, numbers, and spaces" };
//   }
//   const modelname = model.replace(/[^a-zA-Z]/g, '').toLowerCase();
//   return modelname;
// }
// module.exports = validateModel;

function validateModel(model) {
  if (model === '' || !/^[a-zA-Z0-9 ]+$/.test(model) || /^[0-9]+$/.test(model)) {
    if (/[^a-zA-Z0-9 ]/.test(model)) {
      return { valid: false, message: "Model contains disallowed symbols" };
    } else if (/^[0-9]+$/.test(model)) {
      return { valid: false, message: "Model cannot contain only numbers" };
    } else {
      return { valid: false, message: "Model must be a non-empty string containing only letters, numbers, and spaces" };
    }
  }
  const modelname = model.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return { valid: true, modelname };
}
module.exports = validateModel;