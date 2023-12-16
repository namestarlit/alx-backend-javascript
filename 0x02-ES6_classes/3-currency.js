/* class representing a Currency class */
export default class Currency {
  /**
   * Create a currency class.
   * @param {string} code
   * @param {string} name
   */

  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    else if (typeof name !== 'string') throw new TypeError('Name must be a string');
    /* eslint-disable no-underscore-dangle */
    this._code = code;
    this._name = name;
  }

  /**
   * Getter methods for each attribute.
   * Setter methods for each attribute with type validation.
   * @param {string} value - The value to set.
   */
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('Code must be a string');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  /**
   * Display the currency
   * @returns {string} "name (code))"
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
