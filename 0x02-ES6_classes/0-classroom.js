/* class representing a class room */
export default class classRoom {
  /**
   * create a class room
   * @param {number} maxStudentsSize - The max number of students per class
   */
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
