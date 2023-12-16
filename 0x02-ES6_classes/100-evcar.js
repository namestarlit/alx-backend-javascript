import Car from './10-car';

/* class extending the Car class */
export default class EVCar extends Car {
  /**
   * creates a class object
   * @param {string} brand - The name of the car brand
   * @param {string} motor - The car motor type
   * @param {string} color - The body color of the car
   * @param {string} range - The max speed of the car
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    /* eslint-disable no-underscore-dangle */
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
