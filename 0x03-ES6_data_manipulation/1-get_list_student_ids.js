export default function getListStudentIds(objs) {
  if (!Array.isArray(objs)) {
    return [];
  }
  const newArray = objs.map((element) => element.id);
  return newArray;
}
