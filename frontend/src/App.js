import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';





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
              <Route path="/" component={HomePage} exact></Route>
              <Route path="/product/:id" component={ProductPage}></Route>
                
            </main>
            <footer className="rowFlexJustify center">
                <p>All right reserved</p>
            </footer >
          </div>
    </BrowserRouter>
    
  );
}
export default App;
