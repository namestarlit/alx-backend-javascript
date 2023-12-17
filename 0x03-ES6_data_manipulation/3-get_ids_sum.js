/**
 * Gets the sum of student's IDs.
 * @param {Array.<object>}
 * returns {number} The sum of student IDs
 */
export default function getStudentIdsSum(array) {
  return array.reduce((sum, student) => sum + student.id, 0);
}
