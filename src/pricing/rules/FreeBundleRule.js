class FreeBundleRule {
  constructor({ productCode, bundledProductCode, bundledQuantity }) {
    this.productCode = productCode;
    this.bundledProductCode = bundledProductCode;
    this.bundledQuantity = bundledQuantity;
  }

  buildItems(productCodes, catalog) {
    const purchasedQuantity = productCodes.filter((code) => code === this.productCode).length;
    const freeQuantity = purchasedQuantity * this.bundledQuantity;
    const bundledProduct = catalog[this.bundledProductCode];
    const bundledItems = [];

    for (let index = 0; index < freeQuantity; index += 1) {
      bundledItems.push({
        ...bundledProduct,
        price: 0,
        bundled: true,
      });
    }

    return bundledItems;
  }
}

module.exports = FreeBundleRule;
