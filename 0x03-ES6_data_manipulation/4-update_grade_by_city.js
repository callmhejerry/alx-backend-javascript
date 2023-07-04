/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentInCity = students.filter((student) => student.location === city);
  return studentInCity.map((student) => {
    const [studentGrade] = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrade) {
      student.grade = studentGrade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
