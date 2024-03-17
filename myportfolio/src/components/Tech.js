// Tech.js
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Tech.css'; // Create Tech.css for styling

// Import your images
import csharpIcon from './imgs/icons/csharp.png';

const technologies = [
  { name: 'C#', icon: csharpIcon },
  { name: 'C', icon: csharpIcon },
  { name: 'Java', icon: csharpIcon },
  { name: 'HTML', icon: csharpIcon },
  { name: 'CSS', icon: csharpIcon },
  { name: 'JavaScript', icon: csharpIcon },
  { name: 'React', icon: csharpIcon },
  { name: 'Unity', icon: csharpIcon },
  { name: 'Premier Pro', icon: csharpIcon },
  { name: 'After Effects', icon: csharpIcon },
  { name: 'Photoshop', icon: csharpIcon },
];

const Tech = () => {
  return (
    <div className="tech-container">
      {technologies.map((tech, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={800}
          transitionSpeed={1500}
          gyroscope={true}
          className="tilt-card"
        >
          <div className="tech-card">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <p className="tech-name">{tech.name}</p>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Tech;
