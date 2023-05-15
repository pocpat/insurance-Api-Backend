function validateModel(model) {
  if (model === '' || /^[0-9]+$/.test(model)) {
    return { valid: false, message: 
      "Model must be a non-empty string containing only letters, numbers, and spaces" };
  }
  return model.replace(/[^a-zA-Z]/g, '').toLowerCase();
}
module.exports = validateModel;
