import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from './../actions/productActions'
import { Link } from 'react-router-dom';
import './../index.css'
// import data from '../data';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function ProductPage(props) {

    //  we dont fetch products form the data.js file in backend nomore we fetch the from Redux Store
    // const product = data.products.find((item) => item._id === props.match.params.id)
    
    const dispatch = useDispatch();
    // we need the id at the end of the url/route that is fecthing
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    // console.log(qty);
    const productDetails = useSelector((state => state.productDetails));
    const { loading, error, product } = productDetails;


    const addToCardHandler = () => {
        // this function redirect to the cart page via url carrying:
        // the choosen articles qty using location.search. property&method 
        // and the article id after the questionMark that will be extract using match.params.id protocole
        props.history.push(`/cart/${productId}?qty=${qty}`);
        console.log(props)
        console.log(props.history)
    }

    useEffect(() => {
        dispatch(detailsProduct(productId))
    },[dispatch, productId])

    // if(!product) {
    //     return <div>Product Not Found</div>
    // }
    return (
    
            <div className="rowFlexJustify center">
                {
                    loading ? 
                    (<LoadingBox></LoadingBox> ):
                    error ?
                    (<MessageBox variant="danger">{error}</MessageBox>) :
                    (
                    <div>
                        <Link to="/">Back to all products page</Link>
                        <div className="rowFlexJustify rowTop">
                            <div className="col-2">
                                {/* img class large to 100% in order to get theproper responsive behavior on mobile size */}
                                <img className="large" src={product.images} alt={product.name}/>
                            </div>    
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>
                                    </li>
                                    <li>
                                        <Rating
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                        />
                                    </li>
                                    <li>
                                        Price: €{product.price}
                                    </li>
                                    <li>
                                        <p>Description:</p>
                                    </li>
                                    <li>
                                        <p>{product.description}</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="card card__Body">
                                    <ul>
                                        <li>
                                            <div className="rowFlexJustify">
                                                <div>Price</div>
                                                <div className="price">€{product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rowFlexJustify">
                                                <div>Status</div>
                                                <div>
                                                    {
                                                        product.countInStock > 0 ?
                                                        ( <span className="inStock">In Stock</span>) :
                                                        ( <span className="noStock">Unavailable</span>)
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            {
                                                product.countInStock && (
                                                    <>
                                                        <div className="rowFlexJustify">
                                                            <div >
                                                                <h3>Quantity</h3>
                                                            </div>
                                                            <div>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}
                                                                >
                                                                    {/* number of items choosable must match the amount of items in stock*/}
                                                                    {
                                                                        // Making an array from the countInStock row to be abble to map the keys
                                                                        [...Array(product.countInStock).keys()].map(
                                                                            (x) => (
                                                                                <option key={x+1} value={x+1}>
                                                                                    {x+1}
                                                                                </option>
                                                                            )
                                                                        )
                                                                        
                                                                    }
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </li>
                                        <li>
                                            <button 
                                                className="primary block"
                                                onClick={addToCardHandler}
                                            >Add To Cart</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) 
                }
            </div>
        
        
    )
}

export default ProductPage
