const ShoppingCart = require('./cart/ShoppingCart');
const { ProductCatalog } = require('./product/ProductCatalog');
const defaultPricingRules = require('./pricing/defaultPricingRules');

module.exports = {
  ShoppingCart,
  ProductCatalog,
  defaultPricingRules,
};
