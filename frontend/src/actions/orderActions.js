import Axios from "axios";
import { CART_EMPTY } from "../constants/addToCartConstant";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try {
        const {
            // we extract userInfos from userSigin present in the store state
            // to be able to extract the Token info in autorisation
            userSignin: { userInfos },
        } = getState();
        const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorisation: `Bearer ${userInfos.token}`,
            },
        });
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order});
        // The cart shoud be emptied in the store state
        dispatch({type: CART_EMPTY})
        // The cart shoud be emptied in the localStorage too
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: 
            error.response && error.response.data.message ?
            error.response.data.message :
            error.response
        })
    }
}

// export const orderdetails = (orderId) => async(dispatch, getState) => {
//     dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
//         const { userSignin: { userInfos }} = getState();
//         try {
//             const { data } = await Axios.get(
//                 // here the data is all the order infos
//                 `/api/orders/${orderId}`, 
//                 { headers: { Authorisation: `Bearer ${userInfos.token}`}}
//                 );
//                 dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
//             } catch (error) {
//                 const message = 
//                     error.response && error.response.data.message ?
//                     error.response.data.message :
//                     error.response;
//                 dispatch({ type: ORDER_DETAILS_FAIL, payload: message })
//             } 
// }



export const orderDetails = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignin: { userInfos },
    } = getState();
    try {
      const { data } = await Axios.get(`/api/orders/${orderId}`, {
        headers: { Authorisation: `Bearer ${userInfos.token}` },
      });
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
  };