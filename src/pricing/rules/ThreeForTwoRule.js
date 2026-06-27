const { toCents } = require('../../common/utils');

class ThreeForTwoRule {
  constructor({ productCode, buyQuantity, payQuantity }) {
    this.productCode = productCode;
    this.buyQuantity = buyQuantity;
    this.payQuantity = payQuantity;
  }

  appliesTo(productCode) {
    return productCode === this.productCode;
  }

  calculateLineTotal(product, quantity) {
    const discountedGroups = Math.floor(quantity / this.buyQuantity);
    const remainder = quantity % this.buyQuantity;
    const chargeableQuantity = discountedGroups * this.payQuantity + remainder;

    return chargeableQuantity * toCents(product.price);
  }
}

module.exports = ThreeForTwoRule;
