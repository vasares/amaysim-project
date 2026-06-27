const { ShoppingCart, ProductCatalog, defaultPricingRules } = require('./index');

const scenarios = [
  {
    name: 'Scenario 1',
    items: ['ult_small', 'ult_small', 'ult_small', 'ult_large'],
  },
  {
    name: 'Scenario 2',
    items: ['ult_small', 'ult_small', 'ult_large', 'ult_large', 'ult_large', 'ult_large'],
  },
  {
    name: 'Scenario 3',
    items: ['ult_small', 'ult_medium', 'ult_medium'],
  },
  {
    name: 'Scenario 4',
    items: ['ult_small', '1gb'],
    promoCode: 'I<3AMAYSIM',
  },
];

for (const scenario of scenarios) {
  const cart = new ShoppingCart(defaultPricingRules);

  for (const productCode of scenario.items) {
    cart.add(ProductCatalog[productCode]);
  }

  if (scenario.promoCode) {
    cart.applyPromoCode(scenario.promoCode);
  }

  console.log(`${scenario.name}: ${formatCurrency(cart.total)}`);
  console.log(formatItems(cart.items));
  console.log('');
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function formatItems(items) {
  const counts = items.reduce((result, item) => {
    result[item.name] = (result[item.name] || 0) + 1;
    return result;
  }, {});

  return Object.entries(counts)
    .map(([name, quantity]) => `${quantity} x ${name}`)
    .join(', ');
}
