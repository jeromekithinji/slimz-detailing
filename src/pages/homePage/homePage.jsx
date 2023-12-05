import React from 'react'
import "./homePage.scss"
import ChooseUsTile from '../../components/chooseUsTile/chooseUsTile'
import ServiceTile from '../../components/serviceTile/serviceTile'

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
    </div>
  )
}

export default HomePage