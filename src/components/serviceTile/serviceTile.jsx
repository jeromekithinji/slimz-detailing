import React from 'react'
import "./serviceTile.scss"
import { GiSandsOfTime } from "react-icons/gi";


const ServiceTile = ({ icon, header, description, buttonLink }) => {
  return (
    <div className="serviceTile">
        <div className="serviceTile__content">
            <GiSandsOfTime className="serviceTile__content-icon"/>
            <p className="serviceTile__content-title">
                Lorem ipsum dolor
            </p>
            <p className="serviceTile__content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat voluptas ipsam.
            </p>
        </div>
        <button className="serviceTile__button">
            More Info
        </button>
    </div>
  )
}

export default ServiceTile