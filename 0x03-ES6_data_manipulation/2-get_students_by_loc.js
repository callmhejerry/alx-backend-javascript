export default function getStudentsByLocation(students, city) {
    return students.filter((element) => {
        return element.location === city;
    })
}