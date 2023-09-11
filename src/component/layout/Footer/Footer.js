import React from "react";
import playStore from "../../../images/playstore.jpeg"
import appStore from "../../../images/appstore.jpeg"
import "./Footer.css"


const Footer = () => {

    return (
        <footer id="Footer">
            <div className="leftFooter">
                <h1></h1>
                <h4>DOWNLOAD OUR APP</h4>
                <img src={playStore} alt="playstore" />
                
            </div>


            <div className="midFooter">
                <h1>ABYSS.</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2023 &copy; steve</p>


            </div>


            <div className="rightFooter">
                <h4>FOLLOW US</h4>
                <a href="https://instagram.com/stevewithnojobs">Instagram</a>
                <a href="https://www.linkedin.com/in/swayam-kumar-65033a203/">LinkedIn</a>
            </div>
        </footer>

    )
}

export default Footer