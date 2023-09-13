export default function getStudentIdsSum (students) {
  return students.reduce((first, second) => first + second.id, 0);
}
