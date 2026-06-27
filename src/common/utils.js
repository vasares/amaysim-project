function toCents(amount) {
  return Math.round(amount * 100);
}

function fromCents(amount) {
  return Number((amount / 100).toFixed(2));
}

module.exports = {
  toCents,
  fromCents,
};