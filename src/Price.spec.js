import { render, screen } from '@testing-library/react';
import Price from './Price';


describe("price", () => {
    it("transform EUR currency to € symbol", () => {
        const price = {
            amount: 10,
            currency: "EUR",
            locale: "es-ES"
        };
        render(<Price {...price}/>);

        expect(screen.getByText("€", {exact: false})).toBeInTheDocument();
    });

    it("transform USD currency to $ symbol", () => {
        const price = {
            amount: 10,
            currency: "USD",
            locale: "en-US"
        };
        render(<Price {...price}/>);
    
        expect(screen.getByText("$", {exact: false})).toBeInTheDocument();
    });

    it("transform GBP currency to £ symbol", () => {
        const price = {
            amount: 10,
            currency: "GBP",
            locale: "en-GB"
        };
        render(<Price {...price}/>);
    
        expect(screen.getByText("£", {exact: false})).toBeInTheDocument();
    });
});
