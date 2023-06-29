export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('length must be a number');
    }
    if (!(students instanceof Array)) {
      throw new TypeError('students must be an Array');
    }
    this._length = length;
    this._name = name;
    this._students = students;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('students must be an Array');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }
  }
}
