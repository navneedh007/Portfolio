// Navbar.js
import React from 'react';
import Tilt from 'react-parallax-tilt'; // Import Tilt
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle
import './Navbar.css';

const Navbar = ({ isDarkMode, setDarkMode }) => {
  const textColor = isDarkMode ? '#fff' : '#333';

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={800}
      transitionSpeed={1500}
      gyroscope={true}
      className="tilt-navbar"
    >
      <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <ul>
          <li><a href="#about" style={{ color: textColor }}>About</a></li>
          <li><a href="#contact" style={{ color: textColor }}>Contact</a></li>
          <li><a href="#experience" style={{ color: textColor }}>Experience</a></li>
          <li><a href="#feedbacks" style={{ color: textColor }}>Feedbacks</a></li>
          <li><a href="#tech" style={{ color: textColor }}>Tech</a></li>
          <li><a href="#works" style={{ color: textColor }}>Works</a></li>
        </ul>
        {/* Use the customized DarkModeToggle component */}
        <DarkModeToggle darkMode={isDarkMode} toggleDarkMode={() => setDarkMode(!isDarkMode)} />
      </nav>
    </Tilt>
  );
};

export default Navbar;
