import React from 'react';
// Set  "proxy": "http://localhost:5000", to link any request from this project to the backend API
import { BrowserRouter, Route } from 'react-router-dom'
import HomePageRedux from './pages/HomePageRedux';
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
              <Route path="/" component={HomePageRedux} exact></Route>
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
