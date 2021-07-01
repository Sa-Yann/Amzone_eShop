import React from 'react';
// Set  "proxy": "http://localhost:5000", to link any request from this project to the backend API
import { BrowserRouter, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePageRedux from './pages/HomePageRedux';
import ProductPageRedux from './pages/ProductPageRedux';
import Test from './pages/Test';





function App() {

  

  return (
    <BrowserRouter>
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
              <Route path="/test" component={Test}/>
              <Route path="/cart/:id?" component={CartPage} />   
              <Route path="/" component={HomePageRedux} exact />
              <Route path="/product/:id" component={ProductPageRedux} />
              {/* path="product/id?: ? cause cart should be accessible directly*/}
              
            </main>
            <footer className="rowFlexJustify center" >
                <p>All right reserved</p>
            </footer >
          </div>
    </BrowserRouter>
    
  );
}
export default App;
