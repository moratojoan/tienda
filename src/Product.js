
import './Product.css';

export default function Product({name, image}) {
    return (
        <li>
            <div>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
        </li>
    )
}
