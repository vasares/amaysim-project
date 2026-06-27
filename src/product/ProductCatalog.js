const PRODUCT_CODES = {
  UNLIMITED_1GB: 'ult_small',
  UNLIMITED_2GB: 'ult_medium',
  UNLIMITED_5GB: 'ult_large',
  DATA_PACK_1GB: '1gb',
};

const ProductCatalog = {
  [PRODUCT_CODES.UNLIMITED_1GB]: {
    code: PRODUCT_CODES.UNLIMITED_1GB,
    name: 'Unlimited 1GB',
    price: 24.90,
  },
  [PRODUCT_CODES.UNLIMITED_2GB]: {
    code: PRODUCT_CODES.UNLIMITED_2GB,
    name: 'Unlimited 2GB',
    price: 29.90,
  },
  [PRODUCT_CODES.UNLIMITED_5GB]: {
    code: PRODUCT_CODES.UNLIMITED_5GB,
    name: 'Unlimited 5GB',
    price: 44.90,
  },
  [PRODUCT_CODES.DATA_PACK_1GB]: {
    code: PRODUCT_CODES.DATA_PACK_1GB,
    name: '1 GB Data-pack',
    price: 9.90,
  },
};

module.exports = {
  PRODUCT_CODES,
  ProductCatalog,
};