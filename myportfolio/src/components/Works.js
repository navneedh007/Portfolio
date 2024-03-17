// components/Works.js
import Carousel from './carousel/Carousel';

const projects = [
  { title: 'AR Furniture Shopping App', image: '/imgs/experienceimgs/Google1.png', githubLink: 'https://github.com/your-username/project1' },
  // Add more projects as needed
];

const Works = () => {
  return (
    <div id="works" className="p-8">
      <h2 className="text-3xl font-bold mb-4">My Works</h2>
      <Carousel projects={projects} />
    </div>
  );
};

export default Works;