// About.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import TypingEffect from 'react-typing-effect';
import './About.css';

const About = () => {
  const rolesSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 1000, // Add a delay for a staggered effect
  });

  const typingRoles = [
    "Navneedh Krishna",
    "Game Developer",
    "AR/VR Developer",
    "Web Developer",
    "Content Creator"
  ];

  const description = "Passionate about creating immersive experiences through game development and AR/VR technologies. Constantly exploring new possibilities in the world of web development and sharing insights as a content creator.";

  return (
    <div className="about-container">
      <div className="hi-im-roles">
        <div className="hi-im">Hi, I'm </div>
        <animated.div style={rolesSpring} className="roles">
          <TypingEffect
            text={typingRoles}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
          />
        </animated.div>
      </div>
      <animated.p style={descriptionSpring} className="description">{description}</animated.p>
    </div>
  );
};

export default About;
