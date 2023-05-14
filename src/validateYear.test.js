const validateYear = require('./validateYear');

test("returns '2020' for year with 4 numbers",() =>{
    expect(validateYear('2020')).toBe('2020')
});
test("returns fale for empty input",() =>{
    expect(validateYear('')).toBe(false)
});
test("returns false for year not between 1900-2023",() =>{
    expect(validateYear('8739')).toBe(false)
});
test("returns false for string with numbers",() =>{
    expect(validateYear('toyota 798')).toBe(false)
});
test("returns false for strings",() =>{
    expect(validateYear('toyota mores')).toBe(false)
});
test("returns false for numbers with string",() =>{
    expect(validateYear('2085 toyota')).toBe(false)
});
test(" returns false for numbers with string and space",() =>{
    expect(validateYear('20toyota 798')).toBe(false)
});
test("returns false for numbers with string no space",() =>{
    expect(validateYear('1toyota1798')).toBe(false)
});
test(" returns '1999' for year  between 1900-2023",() =>{
    expect(validateYear('1999')).toBe('1999')
});
test(" returns '2005' for year  between 1900-2023",() =>{
    expect(validateYear('2005')).toBe('2005')
});
test("returns false for a string",() =>{
    expect(validateYear('sabcd')).toBe(false)
});
test(" returns false for numbers length less then 4",() =>{
    expect(validateYear('202')).toBe(false)
});
test(" returns false for numbers length more then 4",() =>{
    expect(validateYear('20203')).toBe(false)
});