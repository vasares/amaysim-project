const { toCents } = require('../../common/utils');

class BulkDiscountRule {
  constructor({ productCode, minimumQuantity, discountedPrice }) {
    this.productCode = productCode;
    this.minimumQuantity = minimumQuantity;
    this.discountedPrice = discountedPrice;
  }

  appliesTo(productCode) {
    return productCode === this.productCode;
  }

  calculateLineTotal(product, quantity) {
    const price = quantity >= this.minimumQuantity ? this.discountedPrice : product.price;

    return quantity * toCents(price);
  }
}

module.exports = BulkDiscountRule;
