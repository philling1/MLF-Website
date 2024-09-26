import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='Contact'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            OFFICE ADDRESS: HOUSE 1, FORTUNE ESTATE OFF AKALA ROAD, IBADAN-OYO STATE
          </p>
          <p>
            FIELD OFFICE ADDRESS: ALOGBA ESTATE, EBUTTE-IKORODU, LAGOS STATE
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Details</h3>
          <p>Tel: +234.8068737737, +234.8077005880</p>
          <p>Email: <a href="mailto:mlfliberate24@gmail.com">mlfliberate24@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook: <a href="https://facebook.com">Follow us on Facebook</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Martins Lydia Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;