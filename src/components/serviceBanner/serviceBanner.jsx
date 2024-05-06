import React, { useState } from "react";
import "./serviceBanner.scss";
import { FaCheckCircle } from "react-icons/fa";

const ServiceBanner = ({ selected, onClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className={`serviceBanner ${selected ? 'selected' : ''}`} onClick={onClick}>
        <div className="serviceBanner__headings">
                <p className="serviceBanner__headings-title">Service Name</p>
                <p className="serviceBanner__headings-subtitle">
                    We provide a wide range of services to help you achieve your
                    goals and dreams. Whether it’s for personal or professional
                    development.
                </p>
            </div>
            <p className="serviceBanner-price">£20</p>
            <div className="serviceBanner__points">
                <div className="serviceBanner__points-container">
                    <FaCheckCircle className="serviceBanner__points-container__icon" />
                    <div className="serviceBanner__points-container__texts">
                        <p className="serviceBanner__points-container__texts-text">
                            20,000+ of PNG & SVG graphics
                        </p>
                    </div>
                </div>
                <div className="serviceBanner__points-container">
                    <FaCheckCircle className="serviceBanner__points-container__icon" />
                    <div className="serviceBanner__points-container__texts">
                        <p className="serviceBanner__points-container__texts-text">
                            20,000+ of PNG & SVG graphics
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
