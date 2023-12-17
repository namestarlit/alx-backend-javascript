/**
 * Returns a string of all set values that start with a specific string.
 * @param {Set} set - The set to filter values from.
 * @param {String} startString - String to check for at the beginning of values.
 * @returns {String}  String of values separated by '-'.
 */
export default function cleanSet(set, startString) {
  const filteredStrings = [];
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) filteredStrings.push(elem.slice(startString.length));
  }
  return filteredStrings.join('-');
}
