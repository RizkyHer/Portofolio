"use client";

import Image from 'next/image';

const Projects = () => {
  const projectList = [
    { name: 'Project 1', description: 'Description of Project 1', img: '/assets/images/GSI2.jpg' },
    { name: 'Project 2', description: 'Description of Project 2', img: '/assets/images/GSI2.jpg' },
    { name: 'Project 3', description: 'Description of Project 3', img: '/assets/images/GSI2.jpg' },
    { name: 'Project 4', description: 'Description of Project 4', img: '/assets/images/GSI2.jpg' },
  ];

  return (
    <div className="h-max bg-gradient-to-r from-black to-blue-500" id="projects">
      <div className="max-w-screen-lg mx-auto py-16 flex flex-col justify-center ">
        <h1 className="text-4xl font-bold mb-8 inline-block transition-colors duration-300 hover:text-blue-300">
          My Projects
        </h1>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 cursor-pointer">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-white">
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={500}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl text-gray-700 font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>


        

        {/* Mobile Swipeable */}
        <div className="md:hidden overflow-x-auto flex gap-4">
          {projectList.map((project, index) => (
            <div key={index} className="flex-none w-72 bg-white p-6 rounded-lg shadow-md">
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={500}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl text-gray-700 font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
