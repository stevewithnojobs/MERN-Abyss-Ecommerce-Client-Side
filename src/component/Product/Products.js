import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCards from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import MetaData from "../layout/MetaData";

const categories=[
  "Nike",
  "Adidas",
  "Puma",
  "Vans",
  "Reebok",
  "Skechers"
]

function Products() {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
  } = useSelector((state) => state.products);

  const { keyword } = useParams();

  const [category, setCategory] = useState(1);
  const [page, setPage] = useState(1);

  const [price, setPrice] = useState([0, 100000]);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if(error){
      dispatch(clearErrors)
    }
    dispatch(getProduct({ keyword: keyword, currentPage: page, price: price,category:category }));
  }, [dispatch, keyword, page, price,category]);

  let count = Math.ceil(productsCount / resultPerPage);
  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Products--Abyss"/>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => <ProductCards product={product} />)}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category)=>(
                <li
                className="category-link"
                key={category}
                onClick={()=>setCategory(category)}
                >
                    {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="paginationBox">
            <Pagination
              color="secondary"
              count={count}
              page={page}
              onChange={handleChange}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
