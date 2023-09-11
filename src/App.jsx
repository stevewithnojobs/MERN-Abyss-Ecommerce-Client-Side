import { Header } from "./component/layout/Header/Header.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate, redirect } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer1.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.jsx";
import store from "./store.js"
import { loadUser } from "./actions/userActions.js";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";

function App() {
  const {isAuthenticated,user}=useSelector(state=>state.user)
  React.useEffect(function () {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    
 store.dispatch(loadUser())
  }, []);
    
 
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user}/>}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
    
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
