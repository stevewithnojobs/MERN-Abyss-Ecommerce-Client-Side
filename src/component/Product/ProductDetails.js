import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";



function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  const ourProduct = { ...products };
  console.log(ourProduct,"herre")

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: ourProduct.rating,
    isHalf: true,
  };

 
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment >
        
          <MetaData title={`${ourProduct.name} -- Abyss`}/>
          <div className="ProductDetails">
            <Carousel>
              {ourProduct.images &&
                ourProduct.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={item.url}
                    src={item.url}
                    alt={`${i} slide`}
                  />
                ))}
            </Carousel>
            <div>
              <div className="detailsBlock-1">
                <h2>{ourProduct.name}</h2>
                <p>Product # {ourProduct._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({ourProduct.numberofReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`$${ourProduct.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value={1} type="number" />
                    <button>+</button>
                  </div>
                  <button>ADD TO CART</button>
                </div>
                <p>
                  {" "}
                  Status:
                  <b
                    className={
                      ourProduct.Stock < 1 ? "redColor" : "greeenColor"
                    }
                  >
                    {ourProduct.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description:<p>{ourProduct.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>
          {ourProduct.reviews && ourProduct.reviews[0] ? (
            <div className="reviews">
              {ourProduct.reviews &&
                ourProduct.reviews.map((review) => (
                  <ReviewCard review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews"> No Reviews Yet :/ </p>
          )}
          
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductDetails;
