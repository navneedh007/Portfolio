// In Experience.js
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Experience.css';

// Import your images
import experienceImage1 from './imgs/experienceimgs/Google1.png';
import experienceImage2 from './imgs/experienceimgs/Duke.png';
import experienceImage3 from './imgs/experienceimgs/UCSan.png';
import experienceImage4 from './imgs/experienceimgs/infosys.png';
import experienceImage5 from './imgs/experienceimgs/jeppiar.png';
import experienceImage6 from './imgs/experienceimgs/matlab.png';
import experienceImage7 from './imgs/experienceimgs/python.png';
import experienceImage8 from './imgs/experienceimgs/sih.png';

const experiences = [
  { title: 'Experience 1', description: 'Passionate about creating immersive experiences through game development and AR/VR technologies. Constantly exploring new possibilities in the world of web development and sharing insights as a content creator.padding-left: 10px;padding-left', image: experienceImage1 },
  { title: 'Experience 2', description: 'Description 2', image: experienceImage2 },
  { title: 'Experience 3', description: 'Description 3', image: experienceImage3 },
  { title: 'Experience 4', description: 'Description 4', image: experienceImage4 },
  { title: 'Experience 5', description: 'Description 5', image: experienceImage5 },
  { title: 'Experience 6', description: 'Description 6', image: experienceImage6 },
  { title: 'Experience 7', description: 'Description 7', image: experienceImage7 },
  { title: 'Experience 8', description: 'Description 8', image: experienceImage8 },
  // Add more experience objects with their respective images
];

const Experience = () => {
  return (
    <div className="experience-container">
      {experiences.map((experience, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={800}
          transitionSpeed={1500}
          gyroscope={true}
          className="tilt-card"
        >
          <div className="experience-card">
            <div className="experience-image" style={{ backgroundImage: `url(${experience.image})` }}></div>
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Experience;
