import axios from "axios"
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/addToCartConstant";

// NB: dispacth, getState are methodes from thunk allowing us to dispatch actions and set the result of the action in the component State using the action
export const addToCart = (productId, qty) => async(dispatch, getState) => {
    // send ajax request to server to get information of a specific product in function of its id
    const { data } = await axios.get(`/api/products/${productId}`);
    // Here data is our product
    dispatch({
        // the action is to add the product described in payload to the card via teh CARD_ADD_ITEM type of action
        type: BASKET_ADD_ITEM,
        payload:  {
            name: data.name,
            image: data.images,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            // product_id is the _id build by the data base when inserting the product in the colection and not the id from the product details
            qty
        
        }
    });
    // NB: to be able to keep states info in our app we need to send them to localStorage
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => async(dispatch, getState) => {
    dispatch({
        type: BASKET_REMOVE_ITEM,
        payload: productId
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });
    localStorage.setItem('shippingAdress', JSON.stringify(data))
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })
}