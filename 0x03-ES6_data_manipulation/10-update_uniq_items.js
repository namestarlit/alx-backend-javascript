/**
 * Update the quantity to 100 for all items with initial quantity at 1 in the map.
 * @param {Map} inputMap - The input map to be updated.
 * @returns {Map} - The updated map.
 * @throws {Error} - Throws an error if the input is not a map.
 */
export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of inputMap) {
    if (quantity === 1) {
      inputMap.set(item, 100);
    }
  }

  return inputMap;
}
