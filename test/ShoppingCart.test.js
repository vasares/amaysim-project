const { ShoppingCart, ProductCatalog, defaultPricingRules } = require('../src');

describe('ShoppingCart', () => {
  test.each([
    [
      'Scenario 1',
      {
        items: ['ult_small', 'ult_small', 'ult_small', 'ult_large'],
        expectedTotal: 94.70,
        expectedItemCounts: {
          ult_small: 3,
          ult_large: 1,
        },
      },
    ],
    [
      'Scenario 2',
      {
        items: ['ult_small', 'ult_small', 'ult_large', 'ult_large', 'ult_large', 'ult_large'],
        expectedTotal: 209.40,
        expectedItemCounts: {
          ult_small: 2,
          ult_large: 4,
        },
      },
    ],
    [
      'Scenario 3',
      {
        items: ['ult_small', 'ult_medium', 'ult_medium'],
        expectedTotal: 84.70,
        expectedItemCounts: {
          ult_small: 1,
          ult_medium: 2,
          '1gb': 2,
        },
      },
    ],
    [
      'Scenario 4',
      {
        items: ['ult_small', '1gb'],
        promoCode: 'I<3AMAYSIM',
        expectedTotal: 31.32,
        expectedItemCounts: {
          ult_small: 1,
          '1gb': 1,
        },
      },
    ],
  ])('%s matches the expected total and items', (_name, scenario) => {
    const cart = new ShoppingCart(defaultPricingRules);

    for (const [index, productCode] of scenario.items.entries()) {
      const promoCode = index === scenario.items.length - 1 ? scenario.promoCode : undefined;

      cart.add(ProductCatalog[productCode], promoCode);
    }

    expect(cart.total).toBe(scenario.expectedTotal);
    expect(countItems(cart.items)).toEqual(scenario.expectedItemCounts);
  });

  test('throws when adding an unknown product code', () => {
    const cart = new ShoppingCart(defaultPricingRules);

    expect(() => cart.add('unknown_product')).toThrow('Unknown product code: unknown_product');
  });

  test('throws when applying an unknown promo code', () => {
    const cart = new ShoppingCart(defaultPricingRules);

    expect(() => cart.applyPromoCode('INVALID')).toThrow('Unknown promo code: INVALID');
  });
});

function countItems(items) {
  return items.reduce((counts, item) => {
    counts[item.code] = (counts[item.code] || 0) + 1;
    return counts;
  }, {});
}
