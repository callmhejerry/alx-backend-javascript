class AppController {
  static getHomePage(request, response) {
    console.log('getting home page');
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
