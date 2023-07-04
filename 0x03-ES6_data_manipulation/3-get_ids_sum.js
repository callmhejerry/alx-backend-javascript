export default function getStudentIdsSum(students) {
    return students.reduce((first, second) => {
        return first + second.id;
    }, 0);
}