import React from 'react'
import "./reviewSlider.scss"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Mercedes from "../../assets/images/mercedes.jpeg"


const ReviewSlider = () => {
  return (
    <div className="reviewSlider">
        <MdArrowBackIos className="reviewSlider-icon"/>
        <div className="reviewSlider__content">
            <img src={Mercedes} alt="Clean mercedes" className="reviewSlider__content-image"/>
            <div className="reviewSlider__content-text">
                <p className="reviewSlider__content-text-name">
                    Shaniqua
                </p>
                <p className="reviewSlider__content-text-location">
                    London, UK
                </p>
                <p className="reviewSlider__content-text-description">
                    Slimz detailing is the most convenient and delightful mobile car detailing service that comes to you, rain or shine!
                </p>
            </div>
        </div>
        <MdArrowForwardIos className="reviewSlider-icon"/>
    </div>
  )
}

export default ReviewSlider