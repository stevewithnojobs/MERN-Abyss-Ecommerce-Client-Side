import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ProductCards = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,20,0.1)",
    acticeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.rating,
    isHalf: true,
  };
  // product/64e8d7ba8272832444bda92chttp://localhost:3000/
  return (
    <Link className="productCard" to={`http://localhost:3000/product/${product._id}`}>
      <img
        src ={product.images[0].url}
        alt={product.name}
      />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> <span> ({product.numOfReview} Reviews)</span>
      </div>
      <span>${product.price}</span>
    </Link>
  );
};

export default ProductCards;
