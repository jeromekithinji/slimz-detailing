import React, { useState } from 'react'
import "./gallery.scss"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxDot, RxDotFilled } from "react-icons/rx";

import galleryData from "../../assets/data/galleryData"


const Gallery = () => {
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentGalleryIndex(index);
    };

    return (
        <div className="gallery">
            {/* <div className="gallery__image-container"> */}
                <img src={galleryData[currentGalleryIndex].image} alt={galleryData[currentGalleryIndex].altText} className="gallery__image" />
            {/* </div> */}
            <div className="gallery__dots">
                {galleryData.map((item, index) => (
                    <span key={index} onClick={() => handleDotClick(index)}>
                        {index === currentGalleryIndex ? <RxDotFilled className="gallery__dots-dot"/> : <RxDot className="gallery__dots-dot"/>}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Gallery