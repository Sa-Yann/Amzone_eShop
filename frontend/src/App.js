import React from 'react';
// Set  "proxy": "http://localhost:5000", to link any request from this project to the backend API
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Test from './pages/Test';
import { useSelector, useDispatch } from 'react-redux';
import CartPage from './pages/CartPage';
import HomePageRedux from './pages/HomePageRedux';
import ProductPageRedux from './pages/ProductPageRedux';
import SigninPage from './pages/SigninPage';
import { signout } from './actions/userActions';
import RegisterPage from './pages/RegisterPage';
import ShippingInfoPage from './pages/ShippingInfoPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderView from './pages/PlaceOrderView';


function App() {

  const cart = useSelector((state => state.cart));
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfos}  = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="rowFlexJustify">
                <div>
                    {/* <a className="brand" href="/">Amazone SaiYann</a> */}
                    <Link className="brand" to="/">Amazone SaiYann</Link>
                </div>
                <div>
                    {/* <a href="./Cart">Cart</a>
                    <a href="./Signin">Sing In</a> */}
                    <Link to="./Cart">Cart
                    {
                      cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                      )
                    }
                    </Link>
                    {
                      userInfos ? (
                        <div className="dropdown">
                        <Link to="#">{userInfos.name} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                          <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                        </ul>
                        </div>
                      ) : (
                        <Link to="./Signin">Sing In</Link>
                      )
                    }
                    
                </div>
            </header>
            <main>
              <Route path="/test" component={Test}/>
              <Route path="/cart/:id?" component={CartPage} />   
              <Route path="/product/:id" component={ProductPageRedux} />
              {/* path="product/id?: ? cause cart should be accessible directly*/}
              <Route path="/signin" component={SigninPage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/shipping" component={ShippingInfoPage}/>
              <Route path="/payment" component={PaymentMethodPage}/>
              <Route path="/placeorder" component={PlaceOrderView}/>
              <Route path="/" component={HomePageRedux} exact />
            </main>
            <footer className="rowFlexJustify center" >
                <p>All right reserved</p>
            </footer >
          </div>
    </BrowserRouter>
    
  );
}
export default App;
