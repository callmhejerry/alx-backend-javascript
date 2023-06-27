export default function createReportObject(employeesList) {
  const newObj = {};

  for (const ent of Object.entries(employeesList)) {
    newObj[ent[0]] = ent[1];
  }

  return {
    allEmployees: newObj,
    getNumberOfDepartments(departments) {
      return Object.entries(departments).length;
    },
  };
}
