import React, { useState, useEffect } from 'react'
import './Report.css'
import report_img1 from '../../assets/report2.jpg'
import report_img2 from '../../assets/report_img2.jpg'
import dark_arrow from '../../assets/dark-arrow.png'
import { NavLink } from 'react-router-dom'

const Report = () => {

  const [currentReport, setCurrentReport] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(false);

  const reports = [
    {
      title: "School Outreach Report",
      image: report_img1,
      content: `The Martin Lydia Foundation visited one of the hard to reach community school to address prevailing health and social issues that affect underserved adolescent girls and boys. This area is a semi-rural riverine community notable for high-risk sexual activities, high prevalence of HIV/AIDS according to the NAISS report 2018, gender-based violence, poor education attainment and poor health-seeking behaviour. This outreach is a step towards achieving our goal of breaking the cycle of abuse and improving the quality of life of the vulnerable.`,
    },
    {
      title: "Menstrual Hygiene Day 2024 Report",
      image: report_img2,
      content: `On May 28, Martins Lydia Foundation ( MLF) mark World Menstrual Hygiene Day, It was a time to highlight the importance of menstrual health, which is the totality of  physical, mental, and social well-being of women and girls in relation to the menstrual cycle. They were taught on the importance of menstrual hygiene, ways to keep oneself clean during monthly period and to stay safe. During this celebration, the intersectionality of climate change and menstrual health were highlighted by the participants through focus group discussions. Possible solutions were provided.`,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; 
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Delay content change to allow for fade-out effect
      setTimeout(() => {
        setAnimate(false); // Trigger fade-out
      }, 100); // Slight delay before starting fade-out animation

      setTimeout(() => {
        // After fade-out, update content and reset fade-in
        setCurrentReport((prevReport) => (prevReport + 1) % reports.length);
        setAnimate(true); // Trigger fade-in
      }, 400); // Sync this with the animation timing in CSS
    }
  }, [progress, reports.length]);

  return (
    <section className='report'>
      <div className={`report-left ${animate ? 'fade-in' : 'fade-out'}`}>
        <img src={reports[currentReport].image} alt="report-img" className='report-img' />
      </div>
      <div className={`report-right ${animate ? 'fade-in' : 'fade-out'}`}>
        <h3>{reports[currentReport].title}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{reports[currentReport].content}</p>
        <button className="btn dark-btn"> <NavLink to='/research-report'> Learn More <img src={dark_arrow} alt="" /> </NavLink> </button>
      </div>
    </section>
  )
}

export default Report