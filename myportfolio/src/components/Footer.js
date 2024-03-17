// Footer.js
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  const footerStyle = isDarkMode ? 'footer-container dark-mode' : 'footer-container light-mode';

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={800}
      transitionSpeed={1500}
      gyroscope={true}
      className="tilt-footer"
    >
      <footer className={footerStyle}>
        <div className="footer-card">
          <p className="footer-name">Your Name</p>
          <p className="footer-role">Web Developer</p>
        </div>
      </footer>
    </Tilt>
  );
};

export default Footer;
