/**
 * Gets a list of student's IDs.
 * @param {Array.<object>} array - an array of student IDs
 * returns {Array.<number>}
 */
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];
  return array.map((student) => student.id);
}
