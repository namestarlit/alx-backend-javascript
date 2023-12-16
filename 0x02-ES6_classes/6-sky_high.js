import Building from './5-building';

/* class representing SkyHighBuilding class */
export default class SkyHighBuilding extends Building {
  /**
   * Initializes Building
   * @param {number} sqft
   * @param {number} floors
   */
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') throw new TypeError('Square feet must be a number');
    else if (typeof floors !== 'number') throw new TypeError('Floors must be in numbers');
    super(sqft);
    /* eslint-disable no-underscore-dangle */
    this._floors = floors;
  }

  /**
   * Getter method for sqft.
   * @returns {number} - sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Getter method for floors.
   * @returns {number} - floors
   */
  get floors() {
    return this._floors;
  }

  /**
   * evacuationWarningMessage method for SkyHighBuilding class.
   * @returns {string} - Evacuation warning message for sky high building.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
