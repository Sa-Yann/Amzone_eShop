import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { orderDetails } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function CheckingOrderView (props) {

    const orderId = props.match.params.id
    const detailedOrder =  useSelector((state) => state.orderDetails)
    const { order, loading, error } = detailedOrder

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(orderDetails(orderId));

    }, [dispatch, orderId]);

    return loading ? (<LoadingBox/>) :
        error ? (<MessageBox variant="danger">{error}</MessageBox>) :
        (
        <div>
            <h1> Here are your order {order._id} details</h1>
            <div className="rowFlexJustify rowTop">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card__Body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:{' '}</strong>{order.shippingAddress.fullName}
                                    <br/>
                                    <strong>Address:</strong>
                                    {' '}{order.shippingAddress.address},
                                    {' '}{order.shippingAddress.city},
                                    {' '}{order.shippingAddress.postalCode},
                                    {' '}{order.shippingAddress.country}                                    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card__Body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Payment Method:{' '}</strong>{' '}{order.paymentMethod}   
                                    <br/>                               
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card__Body">
                                <h2>Ordered Itemes</h2>
                                <ul>
                    {
                        order.orderItems.map((item) => (
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
                                    <div>€{order.allItemsCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div>Shipping</div>
                                    <div>€{order.shippingCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div>Taxes</div>
                                    <div>€{order.taxCost.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rowFlexJustify">
                                    <div><strong>Total Price</strong></div>
                                    <div><strong>€{order.totalPriceToPay.toFixed(2)}</strong></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
