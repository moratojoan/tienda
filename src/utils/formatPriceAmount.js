

export function formatPriceAmount(amount, {currency, locale}) {
    const priceAmountFormatted = new Intl.NumberFormat(locale, {
        style: "currency",
        currency
    }).format(amount);

    return priceAmountFormatted;
}
