import React from 'react'
import "./homePage.scss"
import ChooseUsTile from '../../components/chooseUsTile/chooseUsTile'
import ServiceTile from '../../components/serviceTile/serviceTile'
import Detailer from "../../assets/images/slimz.jpg"
import ReviewSlider from '../../components/reviewSlider/reviewSlider'
import Gallery from '../../components/gallery/gallery'
import Ford from '../../assets/images/Animated Cars Website car.png'

const HomePage = () => {
  return (
    <div className='homePage'>
        <section className="homePage__hero no-padding">
            <div className="homePage__hero-container">
                <div className="homePage__hero__left">
                    <h1 className="homePage__hero__left-header">Car Detailing Experience.</h1>
                    <h3 className="homePage__hero__left-subheader">Redefined!</h3>
                    <p className="homePage__hero__left-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis est illo nisi  magni ea distinctio ab quibusdam rem qui ex? Quisquam ipsum quaear <br/> sint eos alias rem sequi repellendus culpa?
                    </p>
                    <a href="" className="btn">Explore Cars</a>
                </div>
                <div className="homePage__hero__right">
                    <div className="homePage__hero__right-box">
                        <img className="homePage__hero__right-image" src={Ford} alt="" />
                    </div>
                </div>
            </div>
            <div className="homePage__hero__right-box2"></div>
        </section>
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
                    <br className="homePage__detailer-description-break"/>
                    In 2023, Slimz Detailing was established, marking the fruition of Shaan's technical prowess and unwavering dedication to excellence in service and customer contentment.
                    <br className="homePage__detailer-description-break"/>
                    Shaan's personal dedication and pursuit of perfection haven't just garnered a devoted clientele but have also crafted a reputation for infusing genuine "care" into the realm of car maintenance.
                </p>
            </div>
        </section>
        <section className="homePage__reviews">
            <p className="homePage__chooseUs-title">
                Our Happy <span className='coloredText'>Customers</span>
            </p>
            <p className="homePage__reviews-text">
                Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
            </p>
            <ReviewSlider />
        </section>
        <section className="homePage__gallery">
            <Gallery />
        </section>
    </div>
  )
}

export default HomePage