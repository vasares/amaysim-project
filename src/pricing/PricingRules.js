const { toCents, fromCents } = require('../common/utils');

class PricingRules {
  constructor({ pricingRules = [], itemRules = [], promoRules = [] } = {}) {
    this.pricingRules = pricingRules;
    this.itemRules = itemRules;
    this.promoRules = promoRules;
  }

  calculateTotal(productCodes, promoCodes, catalog) {
    const quantities = countProductCodes(productCodes);
    let totalInCents = 0;

    for (const [productCode, quantity] of Object.entries(quantities)) {
      const product = catalog[productCode];
      const rule = this.pricingRules.find((pricingRule) => pricingRule.appliesTo(productCode));
      if (rule) {
        totalInCents += rule.calculateLineTotal(product, quantity);
      } else {
        totalInCents += quantity * toCents(product.price);
      }
    }

    for (const promoRule of this.promoRules) {
      if (promoRule.appliesTo(promoCodes)) {
        totalInCents = promoRule.apply(totalInCents);
      }
    }

    return fromCents(totalInCents);
  }

  buildItems(productCodes, catalog) {
    const items = productCodes.map((productCode) => ({ ...catalog[productCode] }));

    for (const itemRule of this.itemRules) {
      items.push(...itemRule.buildItems(productCodes, catalog));
    }
    return items;
  }

  supportsPromoCode(promoCode) {
    return this.promoRules.some((promoRule) => promoRule.code === promoCode);
  }
}

function countProductCodes(productCodes) {
  return productCodes.reduce((counts, productCode) => {
    counts[productCode] = (counts[productCode] || 0) + 1;
    return counts;
  }, {});
}

module.exports = PricingRules;
