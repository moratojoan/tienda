


export default function Products({products}) {
    return <ul>
        {products.map(({id, name}) => (
            <li key={id}>{name}</li>
        ))}
    </ul>
}
