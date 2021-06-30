// initial state et reducer need to be define in Store.js
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// Redux Thunk middleware allows you to write action creators that return 
// a function instead of an action. The thunk can be used to delay 
// the dispatch of an action, or to dispatch only if a certain condition 
// is met. The inner function receives the store methods dispatch and 
// getState as parameters.
// import data from './data';
import { productListReducer } from './reducers/productReducers';

const initialState = {};

// 1rst case : we use datas from teh data.js file within the frontend folder
// const reducer = (state, action) => {
//     //  the reducer return the list of products as orginal state
//     return { products: data.products };
// };

// 2nd Case : we use datas from redux Store
const reducer =  combineReducers({
    productList: productListReducer,
})

// via composeEnhancer the react App is connected to the redux  Store & the redux devtool in Chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
    reducer, 
    initialState, 
    // compose(applyMiddleware(thunk))
    composeEnhancer(applyMiddleware(thunk))
);


export default store;