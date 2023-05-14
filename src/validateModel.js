function validateModel(model) {
    if (/^[a-zA-Z\s]+$/.test(model)) {
      return model.replace(/\s+/g, '').toLowerCase();
    } else {
      return false;
    }
  }
  module.exports = validateModel;