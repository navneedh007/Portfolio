// App.js
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Tech from './components/Tech';
import Works from './components/Works';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <animated.div style={backgroundSpring} className="background">
        {/* Your background content */}
      </animated.div>
      <Navbar isDarkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="feedbacks">
        <Feedbacks />
      </Element>
      <Element name="tech">
        <Tech />
      </Element>
      <Element name="works">
        <Works />
      </Element>
      <Element name="footer">
        <Footer isDarkMode={darkMode} />
      </Element>
    </div>
  );
};

export default App;
