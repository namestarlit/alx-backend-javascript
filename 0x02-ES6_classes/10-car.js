/* class representing a Car class */
export default class Car {
  /**
   * create a Car class
   * @param {string} brand - The name of the car brand
   * @param {string} motor - The type of motor
   * @param {string} color - The car body color
   */
  constructor(brand, motor, color) {
    /* eslint-disable no-underscore-dangle */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
