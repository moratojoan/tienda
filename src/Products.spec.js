import { render } from '@testing-library/react';
import Products from './Products';


const products = [
    {
        id: "product-1",
        name: "Product 1",
        image: "/image.jpg",
        price: 10
    }
];

describe("product list", () => {
    it("render list of products", () => {
        const container = render(<Products products={products} />)
        expect(container.getByText("Product 1")).toBeInTheDocument()
    })
});
