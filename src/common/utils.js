function toCents(amount) {
  return Math.round(amount * 100);
}

function fromCents(amount) {
  return Number((amount / 100).toFixed(2));
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

module.exports = {
  toCents,
  fromCents,
  formatCurrency,
  formatItems,
};