import React from 'react'
import "./chooseUsTile.scss"
import { GiSandsOfTime } from "react-icons/gi";


const ChooseUsTile = ({ icon, header, description }) => {
  return (
    <div className='chooseTile'>
        <GiSandsOfTime className="chooseTile__icon"/>
        <p className="chooseTile__title">
            Lorem ipsum dolor
        </p>
        <p className="chooseTile__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo debitis nulla et quae voluptate modi! Omnis sunt, doloribus fugiat, hic earum aspernatur consequatur officiis dicta recusandae culpa libero amet.
        </p>
    </div>
  )
}

export default ChooseUsTile