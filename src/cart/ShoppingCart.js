const ProductCatalog = require('../product/ProductCatalog');

class ShoppingCart {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.productCodes = [];
    this.promoCodes = new Set();
  }

  add(item, promoCode) {
    const productCode = this.resolveProductCode(item);

    if (!ProductCatalog[productCode]) {
      throw new Error(`Unknown product code: ${productCode}`);
    }

    this.productCodes.push(productCode);

    if (promoCode) {
      this.applyPromoCode(promoCode);
    }
  }

  applyPromoCode(promoCode) {
    if (!this.pricingRules.supportsPromoCode(promoCode)) {
      throw new Error(`Unknown promo code: ${promoCode}`);
    }

    this.promoCodes.add(promoCode);
  }

  get total() {
    return this.pricingRules.calculateTotal(this.productCodes, this.promoCodes, ProductCatalog);
  }

  get items() {
    return this.pricingRules.buildItems(this.productCodes, ProductCatalog);
  }

  resolveProductCode(item) {
    if (typeof item === 'string') {
      return item;
    }

    if (item && item.code) {
      return item.code;
    }

    throw new Error('Item must be a product code or product object.');
  }
}

module.exports = ShoppingCart;
