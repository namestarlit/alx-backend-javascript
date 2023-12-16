import Currency from './3-currency';

export default class Pricing {
  /**
   * Create instances of Pricing.
   * @param {number} amount
   * @param {Currency} currency
   */
  constructor(amount, currency) {
    /* eslint-disable no-underscore-dangle */
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter methods for each attribute.
   * Setter methods for each attribute with type validation.
   * @param {number|Currency} value - The value to set.
   */
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') throw new TypeError('Amount must be a number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('Currency must be a Currency instance');
    this._amount = value;
  }

  /**
   * Static method: Convert price using convertion rate.
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number} product
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  /**
   * Instance method: Compute full price.
   * @returns {string} 'amount currency_name (currency_code)'
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
