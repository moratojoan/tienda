import Product from "./Product";

import './Products.css';


export default function Products({products}) {
    return <ul>
        {products.map(({id, name, image}) => (
            <Product key={id} name={name} image={image}/>
        ))}
    </ul>
}
