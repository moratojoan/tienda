import Products from './Products';

import { products } from './data/fake-data';


function App() {
  return (
    <div>
       <Products products={products} />
    </div>
  );
}

export default App;
