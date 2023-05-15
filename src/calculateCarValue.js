const validateModel = require('./validateModel');
const validateYear = require('./validateYear');


function calculateCarValue(model, year) {
    if (!validateModel(model)) {
        return "Invalid model";
    }
    if (!validateYear(year)) {
        return "Invalid year";
    }
    let modelValue = 0;
    for (let i = 0; i < model.length; i++) {
        modelValue += model.charCodeAt(i) - 96;
    }
    const carValue = modelValue * 100 + parseInt(year);
    return carValue;
}


module.exports = calculateCarValue;