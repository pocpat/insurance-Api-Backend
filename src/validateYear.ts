function validateYear(year: number): number | undefined {
  if (/^\d{4}$/.test(year.toString())) {
    const yearNumber = year;
    if (yearNumber >= 1900 && yearNumber <= 2023) {
      return year;
    }
  }
}
export default validateYear;
