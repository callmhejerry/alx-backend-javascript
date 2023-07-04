export default function getListStudentIds(objs) {
    if (!Array.isArray(objs)) {
        return [];
    }
    let newArray = objs.map((element) => {
        return element.id;
    });
    return newArray;
}