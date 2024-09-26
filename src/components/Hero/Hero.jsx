import React, { useEffect, useState } from 'react'
import  './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import heroImg1 from '../../assets/hero.jpg';
import heroImg2 from '../../assets/hero1.jpg';
import heroImg3 from '../../assets/hero2.jpg';
import heroImg4 from '../../assets/hero3.jpg';
import { NavLink } from 'react-router-dom';

const Hero = () => {

  const [activeImage, setActiveImage] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='hero'>
      <div
        className={`hero-image ${activeImage === 0 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div
        className={`hero-image ${activeImage === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${images[1]})` }}
      />
      <div
        className={`hero-image ${activeImage === 2 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${images[2]})` }}
      />
      <div
        className={`hero-image ${activeImage === 3 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${images[3]})` }}
      />
      <div className="hero-text container">
        <h1>MARTINS LYDIA FOUNDATION</h1>
        <p>... Breaking the Cycle of Abuse</p>
        <button className='btn'><NavLink to='/who-we-are'> Learn more <img src={dark_arrow} alt="" /></NavLink></button>
      </div>
    </section>
  )
}

export default Hero