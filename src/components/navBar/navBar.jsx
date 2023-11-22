import React from 'react'
import "./navBar.scss"
import Logo from "../../assets/images/Logo.png"

const NavBar = () => {
  return (
    <div className="navBar">
        <img src={Logo} alt="Slimz Detailing" className="navBar__logo" />
        <div className="navBar__links">
            <a href="#" className="navBar__link">Home</a>
            <a href="#" className="navBar__link">Services</a>
            <a href="#" className="navBar__link">Gallery</a>
            <a href="#" className="navBar__link">Contact</a>
        </div>
    </div>
  )
}

export default NavBar