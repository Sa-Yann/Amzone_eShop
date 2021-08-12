import React from 'react';

export default function CheckoutSteps(props) {

    

    return (
        <div >
            <div className="rowFlexJustify checkout-steps">
                <div className={props.step1 ? "active" : " "}>Shipping</div>
                <div className={props.step2 ? "active" : " "}>Sign-In</div>
                <div className={props.step3 ? "active" : " "}>Payment</div>
                <div className={props.step4 ? "active" : " "}>Place Order</div>
            </div>
            
            
        </div>
    )
}
