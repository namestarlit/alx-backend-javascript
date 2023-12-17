/**
 * Gets a list of student's based on location.
 * @param {Array.<object>} - An array of students
 * @param {string} city - The city name
 * returns {Array.<object>} The students objects at the given location
 */
export default function getStudentsByLocation(array, city) {
  return array.filter((student) => student.location === city);
}
