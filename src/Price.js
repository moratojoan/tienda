import { formatPriceAmount } from './utils/formatPriceAmount';


function Price({amount, currency, locale}) {
    const price = formatPriceAmount(amount, {currency, locale});
    return (
        <p>
            {price}
        </p>
    );
}

export default Price;
