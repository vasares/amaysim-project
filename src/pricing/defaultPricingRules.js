const PricingRules = require('./PricingRules');
const ThreeForTwoRule = require('./rules/ThreeForTwoRule');
const BulkDiscountRule = require('./rules/BulkDiscountRule');
const FreeBundleRule = require('./rules/FreeBundleRule');
const PromoCodeRule = require('./rules/PromoCodeRule');
const { PRODUCT_CODES } = require('../product/ProductCatalog');

const defaultPricingRules = new PricingRules({
  pricingRules: [
    new ThreeForTwoRule({
      productCode: PRODUCT_CODES.UNLIMITED_1GB,
      buyQuantity: 3,
      payQuantity: 2,
    }),
    new BulkDiscountRule({
      productCode: PRODUCT_CODES.UNLIMITED_5GB,
      minimumQuantity: 4,
      discountedPrice: 39.90,
    }),
  ],
  itemRules: [
    new FreeBundleRule({
      productCode: PRODUCT_CODES.UNLIMITED_2GB,
      bundledProductCode: PRODUCT_CODES.DATA_PACK_1GB,
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