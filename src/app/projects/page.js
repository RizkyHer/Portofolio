import Image from 'next/image';
import Navbar from '../../components/Navbar';

const Projects = () => {
  const projectList = [
    { name: 'Project 1', description: 'Description of Project 1',  },
    { name: 'Project 2', description: 'Description of Project 2',  },
    { name: 'Project 3', description: 'Description of Project 3', img: '/img/GSI2.jpg' },
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-black to-blue-700  " >
        <div className='max-w-screen-lg mx-auto'>
        <div className="container mx-auto py-16 flex flex-col justify-center" >
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={project.img} alt={project.name} width={500} height={500} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl text-gray-700 font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
