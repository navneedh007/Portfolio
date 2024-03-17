// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create Carousel.css for styling

// Sample project images (replace with your actual images)
import projectImage1 from './Duke.png';
import projectImage2 from './Duke.png';
import projectImage3 from './Duke.png';

const projects = [
  { title: 'AR Furniture Shopping App', image: projectImage1, githubLink: 'https://github.com/your-username/project1' },
  { title: 'Project 2', image: projectImage2, githubLink: 'https://github.com/your-username/project2' },
  { title: 'Project 3', image: projectImage3, githubLink: 'https://github.com/your-username/project3' },
  // Add more projects as needed
];

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    variableWidth: true, // Set variableWidth to true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
