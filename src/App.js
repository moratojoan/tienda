import Products from './Products';


const products = [
  {
      id: "product-1",
      name: "Product 1",
      image: "/image.jpg",
      price: 10
  }
];

function App() {
  return (
    <div>
       <Products products={products} />
    </div>
  );
}

export default App;
