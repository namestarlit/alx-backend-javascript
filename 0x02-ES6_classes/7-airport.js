/* class representing Airport class */
export default class Airport {
  /**
   * Create Airport
   * @param {string} - name
   * @param {string} - code
   */
  constructor(name, code) {
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._code = code;
  }

  // [Symbol.toStringTag] is overridden to return the airport code as a string
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
