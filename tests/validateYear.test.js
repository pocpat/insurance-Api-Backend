const validateYear = require('../src/validateYear');

test("returns '2020' for year with 4 numbers",() =>{
    //arrange
    let year = '2020';
    const expected = '2020';
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns fale for empty input",() =>{
    //arrange
    let year = '';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert    
    expect(result).toBe(expected);
});
test("returns false for year not between 1900-2023",() =>{
    //arrange
    let year = '1899';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns false for string with numbers",() =>{
    //arrange
    let year = 'toyota 798';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns false for strings",() =>{
    //arrange
    let year = 'toyota';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns false for numbers with string",() =>{
    //arrange
    let year = '2085 toyota';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test(" returns false for numbers with string and space",() =>{
    //arrange
    let year = '20toyota 798';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns false for numbers with string no space",() =>{
//arrange
let year = '1toyota1798';
const expected = false;
//act
let result = validateYear(year);
//assert
expect(result).toBe(expected);
});
test(" returns '1999' for year  between 1900-2023",() =>{
        //arrange
        let year = '1999';
        const expected = '1999';
        //act
        let result = validateYear(year);
        //assert
        expect(result).toBe(expected);
});
test(" returns '2005' for year  between 1900-2023",() =>{
    //arrange
    let year = '2005';
    const expected = '2005';
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test("returns false for a string",() =>{
    //arrange
    let year = 'two thousend and five';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});
test(" returns false for numbers length less then 4",() =>{
        //arrange
        let year = '202';
        const expected = false;
        //act
        let result = validateYear(year);
        //assert
        expect(result).toBe(expected);
});
test(" returns false for numbers length more then 4",() =>{
    //arrange
    let year = '20203';
    const expected = false;
    //act
    let result = validateYear(year);
    //assert
    expect(result).toBe(expected);
});