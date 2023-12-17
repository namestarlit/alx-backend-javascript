/**
 * Updates student's grades from a speciic city.
 * @param {Array.<object>} students - The array of students objects
 * @param {string} city - The name of the city
 * @param {Array.<object>} - students new grades object
 * @returns {Array.<object>} a new students object with grades
 */
export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city) // Filter first by city
    .map((student) => {
      /* Get the grade based on student ID */
      const gradeById = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Populate base student info
        grade: gradeById ? gradeById.grade : 'N/A', // Update grade based on existance
      };
    });
}
