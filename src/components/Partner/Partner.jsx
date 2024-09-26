import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Partner.css';

const Partner = () => {
    return (
        <section className="partners-section" id='Partner'>
            <div className="partners-card">
                <h2 className="partners-title">Our Partners/Funding Sources</h2>
                <ul>
                    <li>MLF Income Generating Activities</li>
                    <li>Trustees' contributions</li>
                    <li>Local Donations</li>
                    <li><button className='btn dark-btn'><ScrollLink to='Contact' smooth={true} offset={-260} duration={500} >Donate</ScrollLink></button></li>
                </ul>
            </div>
        </section>
    );
}

export default Partner;
