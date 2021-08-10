import React from 'react';

function Rating(propsRating) {

    const { rating, numReviews } = propsRating

    return (
        <div className="rating">
            <span>
                <i className=
                { 
                    rating >= 1 ? 
                    "fa fa-star" : 
                    rating >= 0.5 ? 
                    "fa fa-star-half-alt" : 
                    // else the only rating value is then : rating is less 0.5 then 
                    "far fa-star"
                    
                }
                ></i>
            </span>
            <span>
                <i className=
                { 
                    rating >= 2 ? 
                    "fa fa-star" : 
                    rating >= 1.5 ? 
                    "fa fa-star-half-alt" : 
                    // else the only rating value is then :rating is less than 1.5
                    "far fa-star"
                }
                ></i>
            </span><span>
                <i className=
                { 
                    rating >= 3 ? 
                    "fa fa-star" : 
                    rating >= 2.5 ?  
                    "fa fa-star-half-alt" : 
                    "far fa-star"
                }
                ></i>
            </span><span>
                <i className=
                { 
                    rating >= 4 ? 
                    "fa fa-star" : 
                    rating >= 3.5 ?  
                    "fa fa-star-half-alt" : 
                    "far fa-star"
                }
                ></i>
            </span><span>
                <i className=
                { 
                    rating >= 5 ? 
                    "fa fa-star" : 
                    rating >= 4.5 ?  
                    "fa fa-star-half-alt" : 
                    "far fa-star"
                }
                ></i>
            </span>
            <span>{numReviews + ' reviews'}</span>
        </div>
    )
}
export default Rating
