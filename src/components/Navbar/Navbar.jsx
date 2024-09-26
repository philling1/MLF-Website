import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true): setSticky(false)
    })
  }, [])

  const navigate = useNavigate();
  const location = useLocation();

   // Custom scroll function with offset and duration
   const scrollToSection = (section, offset = 0, duration = 500) => {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Use scrollY instead of pageYOffset
      const targetPosition = elementPosition + offset; // Adjust with offset

      // Smooth scroll function
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOut(timeElapsed, window.scrollY, targetPosition - window.scrollY, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      // Ease-in-out function for smooth scrolling
      const easeInOut = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleNavigateAndScroll = (section, offset = 0, duration = 500) => {
    if (location.pathname === '/') {
      scrollToSection(section, offset, duration);
    } else {
      navigate('/');

      setTimeout(() => {
        scrollToSection(section, offset, duration);
      }, 500); // Adjust this delay if necessary
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {

    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className='foundation'>
        <img src={logo} alt="MLF logo" className='logo'/>
        <span className='foundation-name'>
          <NavLink to='/'>MARTINS LYDIA FOUNDATION</NavLink>
        </span>
      </div>
      <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
        <li className='dropdown'>
          <NavLink 
          to='/who-we-are'
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <span>About MLF</span>
          </NavLink>
          <ul className='dropdown-content'>
            <li>
              <NavLink to="/who-we-are?scroll=our-vision">OUR VISION</NavLink>
            </li>
            <li>
              <NavLink to="/who-we-are?scroll=our-mission">OUR MISSION</NavLink>
            </li>
            <li>
              <NavLink to="/who-we-are?scroll=objectives">OBJECTIVES</NavLink>
            </li>
            <li>
            <button onClick={() => handleNavigateAndScroll('our-team', 0)}>OUR TEAM </button>
            </li>
          </ul>
        </li>

        {/* Modify the ScrollLink to also navigate when on other pages */}
        <li className='dropdown'>
          <button onClick={() => handleNavigateAndScroll('Units', -260)}>
            What We Do
          </button>
          {/* <ul className='dropdown-content'>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Women & Girls Protection</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Community Development</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Health</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Climate Education</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Advocacy & Access to Justice</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Socio-Economic Support</button></li>
            <li><button onClick={() => handleNavigateAndScroll('Units', -260, 500)}>Educational Interventions</button></li>
          </ul> */}
        </li>

        <li> 
          <NavLink 
          to='/research-report' 
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Research & Reports
        </NavLink>
        </li>

        {/* Modify Partners & Funding Sources ScrollLink */}
        <li className='Partner'>
          <button onClick={() => handleNavigateAndScroll('Partner', -260)}>
            Partners & Funding Sources
          </button>
        </li>

        {/* Modify Contact Us ScrollLink */}
        <li>
          <button className='btn' onClick={() => handleNavigateAndScroll('Contact', -260)}>
            Contact Us
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar