export default function createReportObject(employeesList) {
  const newObj = {};

  for (const [key, value] of Object.entries(employeesList)) {
    newObj[key] = value;
  }

  return {
    allEmployees: newObj,
    getNumberOfDepartments(departments) {
      return Object.entries(departments).length;
    },
  };
}
