import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Unit from '../components/Units/Unit';
import Title from '../components/Title/Title';
import Report from '../components/Report/Report';
import Team from '../components/Team/Team';
import Partner from '../components/Partner/Partner';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Title title='Our Units' subtitle='How We Break the Cycle of Abuse'/>
      <Unit />
      <Report />
      <Team />
      <Partner />
      <Footer />
    </div>
  );
};

export default HomePage;