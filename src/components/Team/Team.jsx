import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team-section" id='our-team'>
    <div className="team-card">
      <h2 className="team-title">Meet our Team</h2>
      <div className="team-columns">
        <div className="team-category">
          <h3>Trustees/Advisory Members</h3>
          <ul>
            <li>Mrs. Folake Omotoso</li>
            <li>Dr. Marian Kingsley Ameahule</li>
            <li>Pastor Oluseye Taiwo</li>
            <li>Mrs. Queen Atuzie</li>
            <li>Mrs. Omolara Akinade</li>
          </ul>
        </div>
        <div className="team-category">
          <h3>Leaders and Key Officers</h3>
          <ul>
            <li>Mrs. Folake Omotoso <span> - Chairperson Board of Trustees</span></li>
            <li>Pastor Oluseye Taiwo <span> - Secretary</span></li>
            <li>Dr. Marian Kingsley Ameahule <span> - Treasurer</span></li>
            <li>Oloruntosin A. Taiwo <span>  - Executive Director/ General Programme Supervisor</span></li>
            <li>Genevieve Edokwe <span>  - Program Director</span></li>
            <li>Tobiju Judah <span>  - IT Consultant</span></li>
            <li>Success Akaobi <span>  - Communication Director</span></li>
            <li>Omotoso Lois <span>  - Accountant /Administrative Officer</span></li>
            <li>Jesujoba Martins <span>  - M& E</span></li>
            <li>Lydia Taiwo <span>  - Community Outreach Head/ Counselor</span></li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Team