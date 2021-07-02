import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

function CartPage(props) {

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    // console.log("🚀 ~ file: CartPage.js ~ line 7 ~ CartPage ~ productId", productId)
    
    const qty = 
        props.location.search ?
        // split used to only take the second [1] piece of what is after the = of qty={qty} in the url sent 
        Number(props.location.search.split('=')[1]) :
        // if props/location.serach doesn texist teh amount of articl defautl value is 1
        1;
    // console.log("🚀 ~ file: CartPage.js ~ line 10 ~ CartPage ~ qty", qty)
    //  if productId exist call addToCart to add the respective product to teh cart
    // Since we do it only one time we use useEffect
    const dispatch = useDispatch();

    useEffect (() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    // When using variable in useEffect always add the variable in the [] dependency of useEffect
    },[dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        // delet action
        dispatch(removeFromCart(id))

    }

    const checkoutHandler = () => {
        // sighn in if not already done or redirect to shipping
        props.history.push('/signin?redirect=shipping')
    }

    return (
        // // test Content prior real architecture and styling
        // <div>
        //     <h1>Cart Page</h1>
        //     <p>
        //         ADD TO CART: ProductId: {productId} Qty: {qty}
        //     </p>
        // </div>
        <div className="rowFlexJustify rowTop">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?
                <MessageBox>
                    Cart is empty: <Link to="/">Go Shopping</Link>
                </MessageBox> :
                <ul>
                    {
                        cartItems.map((item) => (
                            <li key={item.product} className="rowFlexJustify">
                                <div >
                                    <div>
                                        <img src={item.image} alt={item.name} className="small" />
                                    </div>
                                </div>
                                {/* showing product name */}
                                <div className="min-30">
                                    <Link to={`product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                    <select 
                                        value= {item.qty} 
                                        onChange={
                                            e => dispatch(
                                            addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                    >
                                        {
                                            [...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x+1} value={x+1}>
                                                    {x+1}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>${item.price}</div>
                                <div>
                                    <button 
                                        type="button" 
                                        onClick={() => removeFromCartHandler(item.product)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                }
            </div>
            <div className="col-1">
                <div className="card card__Body">
                    <ul>
                        <li>
                            <h2>
                                {/* a : acculator  / c : curent content */}
                                Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items) : 
                                € {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                onClick={checkoutHandler} 
                                className="primary block"
                                disable={cartItems.lenght === 0}
                            >
                               Proceed to CheckOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        

    )
}

export default CartPage
