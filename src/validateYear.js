function validateYear(year) {
    if (/^\d{4}$/.test(year)) {
      const yearNumber = parseInt(year);
      if (yearNumber >= 1900 && yearNumber <= 2023) {
        return year;
      }
    }
    return false;
  }
  module.exports = validateYear;