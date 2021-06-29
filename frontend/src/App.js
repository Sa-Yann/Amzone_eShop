import React from 'react';
import data from './data';


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
                       
                        <div key={product._id} className="card">
                          {/* linking the targeted product to its specific description page */}
                             <a href={`/product./${product._id}`}>
                                 <img className="medium" src={product.images} alt={product.name}/>
                             </a>
                          <div className="card__Body rating">
                            <a href={`/product./${product._id}`}>
                                <h2>{product.name}</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star-halfo"></i></span>
                                <span><i className="fa fa-star-o"></i></span>
                            </div>
                            <div className="price">€{product.price}</div>
                        </div>
                    </div>
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
