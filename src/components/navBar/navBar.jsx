import React, { useState } from 'react'
import "./navBar.scss"
import Logo from "../../assets/images/Logo.png"
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navBar">
            <img src={Logo} alt="Slimz Detailing" className="navBar__logo" />
            <div className={`navBar__links ${showMenu ? 'showMenu' : ''}`}>
                {/* <a href="#" className="navBar__link">Home</a> */}
                <Link to="/" className="navBar__link">
                    Home
                </Link>
                <Link to="/services" className="navBar__link">
                    Services
                </Link>
                <Link to="/gallery" className="navBar__link">
                    Gallery
                </Link>
                <Link to="/contact" className="navBar__link">
                    Contact
                </Link>
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