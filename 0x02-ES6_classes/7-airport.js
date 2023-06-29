export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string' && typeof code === 'string') {
      this._code = code;
      this._name = name;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
