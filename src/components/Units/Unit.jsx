import React from 'react'
import './Unit.css'
import Adovacy_img from '../../assets/Adovacy.jpg'
import climate_img from '../../assets/climate.jpg'
import community_img from '../../assets/community.jpg'
import education_img from '../../assets/Education.jpg'
import health_img from '../../assets/health.jpg'
import socio_img from '../../assets/socio-economic.jpg'
import women_img from '../../assets/women.jpg'


const Unit = () => {
  return (
    <section className='units-section' id='Units'>
      <div className="units">
        <div className="unit">
          <img src={community_img} alt="" />
          <p>Community Development</p>
        </div>
        <div className="unit">
          <img src={education_img} alt="" />
          <p>Educational Interventions</p>
        </div>
        <div className="unit">
          <img src={climate_img} alt="" />
          <p>Climate Education </p>
        </div>
        <div className="unit">
          <img src={health_img} alt="" />
          <p>Health</p>
        </div>
        <div className="unit">
          <img src={socio_img} alt="" />
          <p>Socio-Economic Support</p>
        </div>
        <div className="unit">
          <img src={women_img} alt="" />
          <p>Women & Girls Protection</p>
        </div>
        <div className="unit">
          <img src={Adovacy_img} alt="" />
          <p>Advocacy & Access to Justice</p>
        </div>
      </div>
    </section>
  )
}

export default Unit