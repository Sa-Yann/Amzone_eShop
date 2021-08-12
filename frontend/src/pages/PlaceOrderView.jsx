import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function PlaceOrderView(props) {

    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const  { loading, success, error, order } = orderCreate;

    const numToPrice = (num) => Number(num.toFixed(2)); // 5.123 => ""5,12" via toFixed => 5.12 string to num via num

    cart.allItemsCost = numToPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    // Shipping Cost
    cart.shippingCost = 
        // for each allItemsCost more expensive less 200 the shippingCost is 0 otherwise it s 10€
        cart.itemsPrice > 200 ?
        numToPrice(0) :
        numToPrice(10);

    cart.taxCost = numToPrice(0.15 * cart.allItemsCost);

    cart.totalPriceToPay = cart.allItemsCost + cart.shippingCost + cart.taxCost;

    const dispatch = useDispatch()
    const processPaymentHandler = () => {
        // dispatching place order action renaming orderItems: cart.cartItems
        dispatch(createOrder({...cart, orderItems: cart.cartItems}))
    }

    useEffect(() => {
        if(success) {
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }

    }, [dispatch, order, props.history, success])

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4/>
            <div className="rowFlexJustify rowTop">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card__Body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:{' '}</strong>{cart.shippingAddress.fullName}
                                    <br/>
                                    <strong>Address:</strong>
                                    {' '}{cart.shippingAddress.address},
                                    {' '}{cart.shippingAddress.city},
                                    {' '}{cart.shippingAddress.postalCode},
                                    {' '}{cart.shippingAddress.country}                                    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card__Body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Payment Method:{' '}</strong>{' '}{cart.paymentMethod}   
                                    <br/>                               
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card__Body">
                                <h2>Ordered Itemes</h2>
                                <ul>
                    {
                        cart.cartItems.map((item) => (
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
                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card__Body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div>Items</div>
                                    <div>€{cart.allItemsCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div>Shipping</div>
                                    <div>€{cart.shippingCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div>Taxes</div>
                                    <div>€{cart.taxCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div><strong>Total Price</strong></div>
                                    <div><strong>€{cart.totalPriceToPay.toFixed(2)}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button
                                type="button"
                                onClick={processPaymentHandler}
                                className="primary block"
                                disabled={cart.cartItems.lenght === 0}
                                >
                                Proceed to Payment    
                                </button>
                            </li>
                            {loading && <LoadingBox/>}
                            {error && <MessageBox variant="danegr">{error}</MessageBox>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
