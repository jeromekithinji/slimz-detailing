import React, { useState } from 'react'
import "./reviewSlider.scss"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import reviewData from "../../assets/data/reviewData"


const ReviewSlider = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentReviewIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        return newIndex < 0 ? reviewData.length - 1 : newIndex;
        });
    };

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex >= reviewData.length ? 0 : newIndex;
        });
    };

    const review = reviewData[currentReviewIndex];

    if (!review) {
        return null; 
    }
    return (
        <div className="reviewSlider">
            <MdArrowBackIos className="reviewSlider-icon" onClick={handlePrevious}/>
            <div className="reviewSlider__content">
                <img src={review.image} alt={review.name} className="reviewSlider__content-image"/>
                <div className="reviewSlider__content-text">
                    <p className="reviewSlider__content-text-name">
                        {review.name}
                    </p>
                    <p className="reviewSlider__content-text-location">
                        {review.location}
                    </p>
                    <p className="reviewSlider__content-text-description">
                        {review.description}
                    </p>
                </div>
            </div>
            <MdArrowForwardIos className="reviewSlider-icon" onClick={handleNext}/>
        </div>
    )
}

export default ReviewSlider