import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './WhoWeAre.css';
import visionImg1 from '.././assets/Adovacy.jpg';
import missionImg1 from '.././assets/community.jpg';
import objImg1 from '.././assets/about img1.jpg';

const WhoWeArePage = () => {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollToSection = searchParams.get('scroll');
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="card">
          <h1>About MLF</h1>
          <p>We fight poverty and social injustice to empower vulnerable groups.</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <p>
        Martins Lydia Foundation is a not-for-profit, non-governmental development organization established as a direct social response to the enormous cycle of abuses created by culture, poverty, illiteracy, injustice,  diseases, discrimination, conflicts, environmental issues, climate change, disasters, and lack of opportunities plaguing the developing world and across Africa. MLF was established in November 2023 ( though being in operations via community outreaches prior) and registered by the Corporate Affairs Commission as an incorporated Trustee under part ‘C’ of the Companies and Allied Matters Act 1990. MLF’ S registration details are CAC/IT/NO 7233513 and Its registered office is situated in Ibadan- Oyo State with a field office in Lagos State. MLF was established to promote gender protection (especially among women and girls), break the cycle of abuse, and reduce poverty among women, girls, and vulnerable groups and communities through education, research, advocacy, empowerment,health services and capacity-building. MLF advocates for climate and environmental security to aid gender equality and protection.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section" id='our-vision'>
        <div className="vision-content">
          <img src={visionImg1} alt="Vision" className="vision-image" />
          <div className="card">
            <h2>Our Vision</h2>
            <p>To ensure freedom, quality, and improved life for the poor & and the vulnerable in our society. especially for women and girls, vulnerable individuals and communities in Nigeria and Africa </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" id='our-mission'>
        <div className="mission-content">
          <div className="card">
            <h2>Our Mission</h2>
            <p>To teach, mentor, and empower vulnerable groups especially young adults, girl child, and women to improve their quality of life through the provision of information, research, counseling, mentoring, a safe environment, protection of basic rights & dignity, access to education, health care & economic empowerment.</p>
          </div>
          <img src={missionImg1} alt="Mission" className="mission-image" />
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section" id='objectives'>
        <div className="objectives-content">
          <img src={objImg1} alt="Objectives" className="objectives-image" />
          <div className="card">
            <h2>Our Objectives</h2>
            <ul>
              <li>To create awareness of gender protection issues in Nigeria.</li>
              <li>To undertake research and advocacy activities for the purpose of protecting the rights of women, girls, and vulnerable youths in Nigeria.</li>
              <li>To promote access to health, a safe environment & education for women, girls, and other vulnerable groups in Nigeria.</li>
              <li>To implement projects, and organize seminars, conferences, and other capacity-building activities for promoting the rights of women, girls, and vulnerable youths in Nigeria.</li>
              <li>To facilitate empowerment opportunities for the less privileged in Nigeria.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeArePage;