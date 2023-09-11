import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { clearErrors, getProduct } from "../../actions/productAction";
import image from "../../images/shoes.png"
import ProductCards from "./ProductCard.js";



const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  console.log(products)
  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct({keyword:"",currentPage:1,price:[0,100000],category:1}));
  }, [dispatch,error]);
  
  return (
    <Fragment>
      {loading? <Loader/>:
      <Fragment >
      <MetaData title="Abyss" />
      <div className="banner">
        
        <p>Welcome to Abyss</p>
        <h1>FIND AMAZING KICKS BELOW</h1>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>
      <h2 className="homeHeading"> Featured Product</h2>
      <div className="container" id="container">
      {products &&
              products.map((product) => <ProductCards product={product} />)}
      </div>
    </Fragment>
      }
    </Fragment>
    
  );
};

export default Home;
