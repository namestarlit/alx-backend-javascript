/* class representing HolbertonCourse class */
export default class HolbertonCourse {
  /**
   * create Holberton course
   * @param {string} name - The name of the course
   * @param {number} length - The duration of the course in years
   * @param {Array.<string>} students - An array of students names
   */
  constructor(name, length, students) {
    /* verify type of the inputs */
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    else if (typeof length !== 'number') throw new TypeError('Length must be a number');
    else if (!Array.isArray(students)) throw new TypeError('Students must be an array');

    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * getter method for name attribute
   * @return {string} The course name
   */
  get name() {
    return this._name;
  }

  /**
   * setter method for the name attribute
   * @param {string} name - The course name
   */
  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  /**
   * getter method for length attribute
   * @return {number} The length of the course in years
   */
  get length() {
    return this._length;
  }

  /**
   * setter method for the length attribute
   * @param {number} length - The length of the course in years
   */
  set length(length) {
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    this._length = length;
  }

  /**
   * getter method for students attribute
   * @return {string} An array of students
   */
  get students() {
    return this._students;
  }

  /**
   * setter method for the students attribute
   * @param {string} students - The stundents array
   */
  set students(students) {
    if (!(students instanceof Array)) throw new TypeError('Students must be an array');
    this._length = students;
  }
}
