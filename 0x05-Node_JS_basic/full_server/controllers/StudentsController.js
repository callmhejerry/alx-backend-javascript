import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      response.status(200);
      response.set('Content-Type', 'text/plain');
      const msg = 'This is the list of our students';
      const results = await readDatabase(process.argv[2].toString());

      const csMessage = `Number of students in CS: ${results.cs.length}. List:${results.cs}`;
      const sweMessage = `Number of students in SWE: ${results.swe.length}. List:${results.swe}`;
      response.send(`${msg}\n${csMessage}\n${sweMessage}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      response.status(200);
      const results = await readDatabase(process.argv[2].toString());
      response.set('Content-Type', 'text/plain');
      const { major } = request.params;

      if (major === 'SWE') {
        response.send(`List:${results.swe}`);
      } else if (major === 'CS') {
        response.send(`List:${results.cs}`);
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
