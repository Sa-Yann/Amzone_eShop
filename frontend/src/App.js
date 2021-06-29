import React from 'react';
import data from './data';
import Product from "./components/Product";


function App() {

  

  return (
    <div className="grid-container">
            <header className="rowFlexJustify">
                <div>
                    <a className="brand" href="/">Amazone SaiYann</a>
                </div>
                <div>
                    <a href="./Cart">Cart</a>
                    <a href="./Signin">Sing In</a>
                </div>
            </header>
            <main>
                <div className="rowFlexJustify center">
                    {
                      data.products.map((product) => (
                        <Product  key={product._id} product={product}/>
                      ))
                    }
                </div>
            </main>
            <footer className="rowFlexJustify center">
                <p>All right reserved</p>
            </footer >
        </div>
  );
}
export default App;
