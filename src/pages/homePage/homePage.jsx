import React from 'react'
import "./homePage.scss"
import ChooseUsTile from '../../components/chooseUsTile/chooseUsTile'
import ServiceTile from '../../components/serviceTile/serviceTile'
import Detailer from "../../assets/images/slimz.jpg"

const HomePage = () => {
  return (
    <div className='homePage'>
        <section className="homePage__chooseUs">
            <p className="homePage__chooseUs-title">
                Why choose us?
            </p>
            <div className="homePage__chooseUs-container">
                <ChooseUsTile className="homePage__chooseUs-item" />
                <ChooseUsTile className="homePage__chooseUs-item" />
                <ChooseUsTile className="homePage__chooseUs-item" />
                <ChooseUsTile className="homePage__chooseUs-item" />
            </div>
        </section>
        <section className="homePage__services">
            <p className="homePage__chooseUs-title">
                Our services
            </p>
            <div className="homePage__chooseUs-container">
                <ServiceTile className="homePage__chooseUs-item" />
                <ServiceTile className="homePage__chooseUs-item" />
                <ServiceTile className="homePage__chooseUs-item" />
                <ServiceTile className="homePage__chooseUs-item" />
            </div>
        </section>
        <section className="homePage__detailer">
            <p className="homePage__chooseUs-title">
                Meet the <span className='coloredText'>detailer</span>
            </p>
            <div className="homePage__detailer-container" >
                <img src={Detailer} alt="Picture of Shaan (the detailer) holding a branded bucket standing near a clean car." className="homePage__detailer-image" />
                <p className="homePage__detailer-description">
                    Shaan, the visionary behind Slimz Detailing in London, has turned his lifelong love for automobiles into a flourishing enterprise that defines the pinnacle of car maintenance.
                    <br/>
                    In 2023, Slimz Detailing was established, marking the fruition of Shaan's technical prowess and unwavering dedication to excellence in service and customer contentment.
                    <br/>
                    Shaan's personal dedication and pursuit of perfection haven't just garnered a devoted clientele but have also crafted a reputation for infusing genuine "care" into the realm of car maintenance.
                </p>
            </div>
        </section>
    </div>
  )
}

export default HomePage