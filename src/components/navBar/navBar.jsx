import React, { useState } from 'react'
import "./navBar.scss"
import Logo from "../../assets/images/Logo.png"
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navBar">
            <img src={Logo} alt="Slimz Detailing" className="navBar__logo" />
            <div className={`navBar__links ${showMenu ? 'showMenu' : ''}`}>
                <a href="#" className="navBar__link">Home</a>
                <a href="#" className="navBar__link">Services</a>
                <a href="#" className="navBar__link">Gallery</a>
                <a href="#" className="navBar__link">Contact</a>
            </div>
            {showMenu ? (
                <MdClose className="navBar__menuIcon" onClick={handleMenuToggle} />
            ) : (
                <FiMenu className="navBar__menuIcon" onClick={handleMenuToggle} />
            )}
        </div>
    )
}

export default NavBar