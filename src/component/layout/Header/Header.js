import React, { useEffect, useState } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";

export const Header = ({ rem }) => {
  const options = {
    burgerColorHover: "#eb4034",
    logo,
    logoWidth: "18vmax",
    // navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Search",
    link4Text: "Login",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/search",
    link4Url: "/login",
    link1Size: "1.8vmax",
    link1Color: "#FFFFFF",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",

    profileIconUrl: "/login",
    profileIconColor: "#FFFFFF",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.navigateSearch = function () {
      navigate("/search");
      document.querySelector(".menuBurger").click();
    };
    document.querySelector(
      ".nav4"
    ).innerHTML = `<b><a class="nav4_1" onClick="navigateSearch()">Cart🛒&nbsp;&nbsp;</a><b><a class="nav4_1" onClick="navigateSearch()">&nbsp;&nbsp;Profile🙋‍♂️</a>`;
  }, []);

  return <ReactNavbar {...options} />;
};
