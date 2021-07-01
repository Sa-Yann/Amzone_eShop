// import React , { useState, useEffect }from 'react';
import React , {  useEffect }from 'react';
// import axios from 'axios';
// import data from './../data'; //was used when datas were fetch from frontend
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomePage() {


    const dispatch =  useDispatch();
    // useSelector : function that has redux state as parameter and return any specific data form the state we demand
    const productList = useSelector( state => state.productList);

    const { loading, error, products } = productList;
    // const [products, setProducts] = useState([]);

    // const [loading, setLoading] = useState(true);

    // const [error, setError] = useState(false)
    // using try catch in const fetchData to check errors

    // useEffect fire when the component using it mount to the web page
    //  [] makes useEffect run only one time
    useEffect(()=> {

            dispatch(listProducts());

            // const fetchData = async () => {
            //     try {
            //         // by running axios.get('/api/products' the array in backend get transfered to {data} in frontend
            //         const { data } = await axios.get('/api/products');
            //         setLoading(true);
            //         // then we update the state with the received {data}
            //         setProducts(data);
            //         // now that we define the action we can stop the loader and make it happen:
            //         setLoading(false);
            //     } catch(err) {
            //         console.log("🚀 ~ file: HomePage.jsx ~ line 29 ~ fetchData ~ err", err);
            //         setError(err.message);
            //         setLoading(false);
            //     }
            // }
            // fetchData();
    },[dispatch])

    return (
        <div>
            <div className="rowFlexJustify center">
                {
                    loading ? 
                    (<LoadingBox></LoadingBox> ):
                    error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (
                        //data.products.map((product) => (
                        products.map((product) => (
                        <Product  key={product._id} product={product}/>
                        ))
                    ) 
                }
            </div>
        </div>
    )
}

export default HomePage
