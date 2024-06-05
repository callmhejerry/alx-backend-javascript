import * as fs from 'fs';

function sortStudent(data, by) {
  const csStudent = [];
  const firstNames = [];
  data.forEach((element) => {
    if (element.includes(by)) {
      csStudent.push(element);
    }
  });

  csStudent.forEach((student) => {
    const firstName = student.split(',')[0];
    firstNames.push(` ${firstName}`);
  });

  return firstNames;
}

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const dataArr = data.trim().split('\n');
        const csFirstNames = sortStudent(dataArr, 'CS');
        const sweFirstNames = sortStudent(dataArr, 'SWE');

        resolve({
          cs: csFirstNames,
          swe: sweFirstNames,
        });
      }
    });
  });
}

export default readDatabase;
