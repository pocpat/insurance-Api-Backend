const validateModel = require('./validateModel');


test("returns 'toyota' for model with string",() =>{
    expect(validateModel('toyota')).toBe('toyota')
   });
test("returns false for empty input",() =>{
    expect(validateModel('')).toBe(false)
});
test("returns false for model with numbers",() =>{
    expect(validateModel('8739')).toBe(false)
});
test("returns false for model with string and numbers",() =>{
    expect(validateModel('toyota 798')).toBe(false)
});
test("returns true for model with string and space",() =>{
    expect(validateModel('toyota mores')).toBe('toyotamores')
});
test("returns false for model with numbers and string",() =>{
    expect(validateModel('2085 toyota')).toBe(false)
});
test("returns false for model with numbers and string and space",() =>{
    expect(validateModel('20toyota 798')).toBe(false)
});
test("returns false for model with numbers and string no space",() =>{
    expect(validateModel('1toyota1798')).toBe(false)
});


// Path: src\validateYear.js