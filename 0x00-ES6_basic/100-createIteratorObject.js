export default function createIteratorObject(report) {
  const allNames = [];
  for (const namesArray of Object.values(report.allEmployees)) {
    for (const name of namesArray) allNames.push(name);
  }
  return allNames;
}
