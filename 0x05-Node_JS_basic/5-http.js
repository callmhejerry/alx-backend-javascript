const http = require('http');

const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (request, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (request.url === '/' && request.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (request.url === '/students' && request.method === 'GET') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(process.argv[2].toString());
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end('Page not found');
});

app.listen(port, hostname, () => { });

module.exports = app;
