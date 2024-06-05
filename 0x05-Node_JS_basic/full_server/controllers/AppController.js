class AppController {
  static getHomePage(request, response) {
    response.set('Content-Type', 'text/plain');
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
