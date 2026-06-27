const PricingRules = require('./PricingRules');
const ThreeForTwoRule = require('./rules/ThreeForTwoRule');
const BulkDiscountRule = require('./rules/BulkDiscountRule');
const FreeBundleRule = require('./rules/FreeBundleRule');
const PromoCodeRule = require('./rules/PromoCodeRule');

const defaultPricingRules = new PricingRules({
  pricingRules: [
    new ThreeForTwoRule({
      productCode: 'ult_small',
      buyQuantity: 3,
      payQuantity: 2,
    }),
    new BulkDiscountRule({
      productCode: 'ult_large',
      minimumQuantity: 4,
      discountedPrice: 39.90,
    }),
  ],
  itemRules: [
    new FreeBundleRule({
      productCode: 'ult_medium',
      bundledProductCode: '1gb',
      bundledQuantity: 1,
    }),
  ],
  promoRules: [
    new PromoCodeRule({
      promoCode: 'I<3AMAYSIM',
      discountPercentage: 10,
    }),
  ],
});

module.exports = defaultPricingRules;