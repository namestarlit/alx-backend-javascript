/**
 * Checks for an array within a set.
 * @param {Set.<number>} set - A set of numbers
 * @param {Array.<number>} array - an array of numbers
 * @returns {boolean} true or false
 */
export default function hasValuesFromArray(set, array) {
  return array.every((elem) => set.has(elem));
}
