import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from './../constants/addToCartConstant'

export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type) {
        case BASKET_ADD_ITEM:
            // we want to add an item to the cart
            const item = action.payload;
            // for each item x we compare the the id of the product (x.product) 
            //  and compare it with id of the product we re going to add item.product
            //  we compare the item.proudct id of the item we re going to add with the id of the product in the card
            const existItem = state.cartItems.find(x => x.product === item.product)
            // if we already have the item in the cart then we replace the old one with the new one
            // like this we can also update the new qty information
            if(existItem) {
                return {
                    ...state,
                    cartItems : state.cartItems.map ( 
                        x => x.product === existItem.product ?
                        item : // new Item Value replace old item Value
                        x //previous Item value
                        )
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, item]};
            }
        case BASKET_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)}
        default:
            return state;
    }
}