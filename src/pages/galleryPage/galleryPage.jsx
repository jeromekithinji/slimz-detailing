import React from 'react'
import "./galleryPage.scss"

import galleryData from "../../assets/data/galleryData"


const GalleryPage = () => {
  return (
    <div className="galleryPage">
        <p className="galleryPage-title">
            Gallery
        </p>
        <div className="galleryPage__container">
                {galleryData.map((item, index) => (
                    <div className="galleryPage__container-item">
                        <img src={galleryData[index].image} alt={galleryData[index].altText} className="galleryPage__container-item-image" />
                    </div>
                ))}
        </div>
    </div>
  )
}

export default GalleryPage