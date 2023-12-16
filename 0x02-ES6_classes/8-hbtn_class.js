/* a class representing HolbertonClass class */
export default class HolbertonClass {
  /**
   * Constructor for the HolbertonClass.
   * @param {Number} size
   * @param {String} location
   */
  constructor(size, location) {
    /* eslint-disable no-underscore-dangle */
    this._size = size;
    this._location = location;
  }

  /**
   * Conversion to Number.
   * @description The valueOf method is overridden to provide,
   * the behavior when the class is cast into a Number.
   * @returns {Number} size
   */
  valueOf() {
    return this._size;
  }

  /**
   * Conversion to String.
   * @description The toString method is overridden to provide,
   * the behavior when the class is cast into a String.
   * @returns {String} location
   */
  toString() {
    return this._location;
  }
}
