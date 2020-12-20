import { render } from '@testing-library/react';
import App from './App';


describe("product list", () => {
    it("render list of products", () => {
        const container = render(<App />)
        expect(container.getByText("Product 1")).toBeInTheDocument()
    })
})
