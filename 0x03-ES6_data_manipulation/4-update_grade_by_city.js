export default function updateStudentGradeByCity(students, city, newGrades) {
    let studentInCity = students.filter((student) => student.location === city);
    return studentInCity.map((student) => {
        let [studentGrade] = newGrades.filter((grade) => grade.studentId === student.id);
        if (studentGrade) {
            student.grade = studentGrade.grade;

        } else {
            student.grade = 'N/A';

        }
        return student;
    });
}