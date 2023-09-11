import React from "react";
import ReactStars from "react-rating-stars-component";
import UserIcon from "../../images/Profile.png"
function ReviewCard({review}){
    
  const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:review.ratings,
    isHalf:true
  }
    return <div className="reviewCard">
        <img src={UserIcon} alt="User"/>
        <p>{review.name}</p>
        <ReactStars {...options} />
        <span>{review.comment}</span>
    </div>
}

export default ReviewCard