import React from 'react'
import "./servicesPage.scss"
import ServiceBanner from '../../components/serviceBanner/serviceBanner'
import Faq from '../../components/faq/faq'

const ServicesPage = () => {
  return (
    <div className="servicePage">
        <p className="servicePage-title">
            Services & Prices
        </p>
        <p className="servicePage-subHeading">
            Select a service that’s right for <span className='textHighlight'>you</span>
        </p>
        <div className="servicePage__banners">
            <ServiceBanner />
            <ServiceBanner />
            <ServiceBanner />
            <ServiceBanner />
        </div>
        <div className="servicePage__faq">
            <p className="servicePage-title">
                Frequently Asked Questions
            </p>
            <div className="servicePage__faq-container">
                <Faq />
                <Faq />
                <Faq />
                <Faq />
                <Faq />
            </div>
        </div>
    </div>
  )
}

export default ServicesPage