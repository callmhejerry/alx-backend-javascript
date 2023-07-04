export default function getStudentsByLocation(students, city) {
  return students.filter((element) => element.location === city);
}
