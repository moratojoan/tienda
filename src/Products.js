import Product from "./Product";


export default function Products({products}) {
    return <ul>
        {products.map(({id, name}) => (
            <Product key={id} name={name} />
        ))}
    </ul>
}
