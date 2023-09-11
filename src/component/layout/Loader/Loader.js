import React from "react"
import "./Loader.css"
import logo from "../../../images/logo.png"
function Loader(){

    return (
        <div className="Loading">
             
                <div>
                <img src={logo} alt="loading..." />
                </div>
        </div>
    )
}

export default Loader