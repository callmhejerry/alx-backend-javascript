export default function createIteratorObject(report) {
  let newArray = [];
  for (const value of Object.values(report.allEmployees)) {
    newArray = [...newArray, ...value];
  }
  return newArray;
}
