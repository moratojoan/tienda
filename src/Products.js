import Product from './Product';

import './Products.css';


function Products({products}) {
    return (
        <ul className="products-container">
            {products.map(({id, name, image, price}) => (
                <Product
                    key={id}
                    name={name}
                    image={image}
                    price={price}
                />
            ))}
        </ul>
    );
}

export default Products;
