import Price from './Price';

import './Product.css';


function Product({name, image, price}) {
    return (
        <li>
            <div className="product-container">
                <img
                    className="product-image"
                    src={image}
                    alt={name}
                />
                <div className="product-info-container">
                    <h2 className="product-title">{name}</h2>
                    <Price {...price} />
                </div>
            </div>
        </li>
    )
}

export default Product;
