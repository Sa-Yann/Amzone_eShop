import React from 'react';

function CartPage(props) {


    const productId = props.match.params.id
    console.log("🚀 ~ file: CartPage.js ~ line 7 ~ CartPage ~ productId", productId)
    
    const qty = 
        props.location.search ?
        // split used to only take the second [1] piece of what is after the = of qty={qty} in the url sent 
        Number(props.location.search.split('=')[1]) :
        // if props/location.serach doesn texist teh amount of articl defautl value is 1
        1;
    console.log("🚀 ~ file: CartPage.js ~ line 10 ~ CartPage ~ qty", qty)
    
    return (
        <div>
            <h1>Cart Page</h1>
            <p>
                ADD TO CART: ProductId: {productId} Qty: {qty}
            </p>
        </div>
    )
}

export default CartPage
