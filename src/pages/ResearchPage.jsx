import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import report_img1 from '.././assets/report2.jpg'
import report_img2 from '.././assets/report_img2.jpg'
import './ResearchPage.css';

const ResearchPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="reportHero-section">
        <div className="card">
          <h1>Research & Report</h1>
          <p>We fight poverty and social injustice to empower vulnerable groups.</p>
        </div>
      </section>

      <section className="report-section1">
        <img src={report_img1} alt="" className='reportPage-img'/>
        <div className="reportPage-text">
          <h2>OUR BRIEF COMMUNITY OUTREACH REPORT</h2>
          <p>The Martin Lydia Foundation visited one of the hard to reach community school to address prevailing health and social issues that affect underserved adolescent girls and boys. This area is a semi-rural riverine community notable for high-risk sexual activities, high prevalence of HIV/AIDS according to the NAISS report 2018, gender-based violence, poor education attainment and poor health-seeking behaviour. This outreach is a step towards achieving our goal of breaking the cycle of abuse and improving the quality of life of the vulnerable. The challenges and achievements from this outreach will be reviewed to inform our future programs.The Martins Lydia Foundation organized a 1 -day community outreach at a Secondary School( Name withheld) intending to reach out to adolescents, teenagers and young adults with quality health talks on sexual and reproductive health, HIV/AIDS and Gender related issues. This was preceded by an identified gap in health, sexual and gender-related knowledge, attitudes and practices that predispose them to high-risk sexual activities resulting in poor performance, high school attrition and unwanted pregnancy. 
          Activity: The community outreach commenced with health talks that span across HIV/AIDS prevention care and treatment, and other prevailing issues.  The approved target audience was senior secondary students, aged between 13-20 years. The health talk was robust and interactive accompanied by questions and feedback.
          Achievements: A total of about 250 students were reached with quality adolescent and youth-centred messages which armed them with the proper knowledge to make informed decisions for positive health outcomes.
          </p>
        </div>
      </section>

      <section className="report-section2">
        <img src={report_img2} alt="" className='reportPage-img'/>
        <div className="reportPage-text">
          <h2>MENSTRUAL HYGIENE DAY 2024</h2>
          <h3>"Together for a #PeriodFriendlyWorld#."</h3>
          <p>On May 28, Martins Lydia Foundation ( MLF) mark World Menstrual Hygiene Day, It was a time to highlight the importance of menstrual health, which is the totality of  physical, mental, and social well-being of women and girls in relation to the menstrual cycle. Menstrual hygiene is the ability of women and adolescent girls to manage their menstruation in a hygienic manner, with dignity, using clean menstrual absorbents, and having access to facilities for changing in privacy, as well as for washing their bodies and hands. The importance of menstrual health and hygiene cannot be over emphasis as it is an integral part of public health focus. Despite its importance, women and girls in low-income countries, often encounter numerous obstacles in maintaining menstrual health and hygiene.  These challenges include the lack of appropriate menstrual materials, inadequate access to private facilities for changing and handwashing, and restrictions on participation in everyday activities, such as attending school or work. MLF celebrated the big day with women and adolescent girls in Papa Dare Community, Iyana Ajia, Ibadan – Oyo State. They were taught on the importance of menstrual hygiene, ways to keep oneself clean during monthly period and to stay safe. During this celebration, the intersectionality of climate change and menstrual health were highlighted by the participants through focus group discussions. Possible solutions were provided. To cap the celebration, sanitary pads and washing soaps were distributed to women of reproductive age and adolescent girls to support and promote  menstrual hygiene.
          </p>
        </div>
      </section>
      
    <Footer />
    </div>
  );
};

export default ResearchPage;
