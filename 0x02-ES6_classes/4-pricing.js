import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, converstionRate) {
    return amount * converstionRate;
  }
}
