import React from 'react'
import './About.css'
import dark_arrow from '../../assets/dark-arrow.png'
import about_img1 from '../../assets/about img1.jpg'
import about_img2 from '../../assets/about img2.jpg'
import about_img3 from '../../assets/about img3.jpg'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className='about-section container'>
      <div className="about-images">
                <div className="image-stack">
                    <img src={about_img1} alt="" className="image image-top" />
                    <img src={about_img2} alt="" className="image image-middle" />
                    <img src={about_img3} alt="" className="image image-bottom" />
                </div>
            </div>
            <div className="about-text">
                <h2>ABOUT MLF</h2>
                <p>
                Martins Lydia Foundation is a not-for-profit, non-governmental development organization established as a direct social response to the enormous cycle of abuses created by culture, poverty, illiteracy, injustice,  diseases, discrimination, conflicts, environmental issues, climate change, disasters, and lack of opportunities plaguing the developing world and across Africa. MLF was established to promote gender protection (especially among women and girls), break the cycle of abuse, and reduce poverty among women, girls, and vulnerable groups and communities through education, research, advocacy, empowerment,health services and capacity-building. MLF advocates for climate and environmental security to aid gender equality and protection.
                </p>
                <button className="btn dark-btn"> <NavLink to='/who-we-are' >Learn More <img src={dark_arrow} alt="" /> </NavLink></button>
            </div>
    </section>
  )
}

export default About