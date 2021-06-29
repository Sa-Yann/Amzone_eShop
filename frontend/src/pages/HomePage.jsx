import React , { useState, useEffect }from 'react';
import axios from 'axios';
// import data from './../data'; //was used when datas were fetch from frontend
import Product from "./../components/Product";

function HomePage() {


    const [products, setProducts] = useState([]);

    // useEffect fire when the component using it mount to the web page
    //  [] makes useEffect run only one time
    useEffect(()=> {
            const fetchData = async () => {
                // by running axios.get('/api/products' the array in backend get transfered to {data} in frontend
                const { data } = await axios.get('/api/products');
                // then we update the state with the received {data}
                setProducts(data);
                // now that we define the action we can make it happen:
            }
            fetchData();
    },[])

    return (
        <div>
            <div className="rowFlexJustify center">
                {
                    //data.products.map((product) => (
                    products.map((product) => (
                    <Product  key={product._id} product={product}/>
                  ))
                }
            </div>
        </div>
    )
}

export default HomePage
