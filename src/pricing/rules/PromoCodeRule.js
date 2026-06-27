class PromoCodeRule {
  constructor({ promoCode, discountPercentage }) {
    this.code = promoCode;
    this.discountPercentage = discountPercentage;
  }

  appliesTo(promoCodes) {
    return promoCodes.has(this.code);
  }

  apply(totalInCents) {
    return Math.round(totalInCents * ((100 - this.discountPercentage) / 100));
  }
}

module.exports = PromoCodeRule;
