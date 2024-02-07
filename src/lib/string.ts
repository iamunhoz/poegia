export function isNumber(str: string | number): boolean {
  if (typeof str === "number") return true
  // Use parseFloat or parseInt to convert the string to a number
  // and then use isNaN to check if it's a valid number
  return !isNaN(parseFloat(str)) && isFinite(parseFloat(str))
}
