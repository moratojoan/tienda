

export function formatPriceAmount(amount, {currency, locale}) {
    const priceAmountFormated = new Intl.NumberFormat(locale, {
        style: "currency",
        currency
    }).format(amount);

    return priceAmountFormated;
}
