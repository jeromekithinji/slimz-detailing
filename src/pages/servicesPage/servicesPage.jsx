import React, { useState } from "react";
import "./servicesPage.scss";
import ServiceBanner from "../../components/serviceBanner/serviceBanner";
import Faq from "../../components/faq/faq";

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceSelect = (index) => {
        setSelectedService(index);
    };
    return (
        <div className="servicePage">
            <p className="servicePage-title">Services & Prices</p>
            <p className="servicePage-subHeading">
                Select a service that’s right for{" "}
                <span className="textHighlight">you</span>
            </p>
            <div className="servicePage__banners">
                <ServiceBanner
                    selected={selectedService === 0}
                    onClick={() => handleServiceSelect(0)}
                />
                <ServiceBanner
                    selected={selectedService === 1}
                    onClick={() => handleServiceSelect(1)}
                />
                <ServiceBanner
                    selected={selectedService === 2}
                    onClick={() => handleServiceSelect(2)}
                />
                <ServiceBanner
                    selected={selectedService === 3}
                    onClick={() => handleServiceSelect(3)}
                />
            </div>
            <div className="servicePage__faq">
                <p className="servicePage-title">Frequently Asked Questions</p>
                <div className="servicePage__faq-container">
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
