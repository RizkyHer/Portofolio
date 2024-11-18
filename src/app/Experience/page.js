import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const experiences = [
  {
    company: 'GiveDirectly',
    role: 'Senior Product Designer',
    duration: '2022 - Present',
    description:
      'Leading design at GiveDirectly, focusing on creating impactful products for donors and beneficiaries.',
    color: 'bg-red-500',
  },
  {
    company: 'Help Scout',
    role: 'Senior Product Designer',
    duration: '2015 - 2023',
    description:
      'Designed user-focused tools to help small businesses provide exceptional customer support.',
    color: 'bg-blue-500',
  },
  {
    company: 'Freelance',
    role: 'Design Consultant',
    duration: '2012 - Present',
    description:
      'Collaborated with clients globally to deliver creative and effective design solutions.',
    color: 'bg-pink-500',
  },
  {
    company: 'Dotfusion',
    role: 'Design / Dev',
    duration: '2010 - 2014',
    description:
      'Developed and designed websites and applications for various clients in a fast-paced agency.',
    color: 'bg-yellow-500',
  },
  {
    company: 'Cubic',
    role: 'Design / Dev',
    duration: '2007 - 2010',
    description:
      'Gained valuable experience in design and development for digital products and marketing.',
    color: 'bg-purple-500',
  },
];

const Experience = () => {
  return (
    <>
    <Navbar />
    <main className="bg-gradient-to-r from-black to-blue-500">
      <div className="container mx-auto px-4 py-14 max-w-screen-lg">
        {/* Page Header */}
        <header className="text-center mb-12 mt-7">
          <h1 className="text-4xl font-bold text-white">Experience</h1>
          <p className="text-lg text-white mt-4">
            A snapshot of my professional journey over the years.
          </p>
        </header>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} space-y-4`}
                >
                  <div
                    className={`p-6 rounded-lg shadow-lg text-white ${
                      experience.color
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{experience.company}</h3>
                    <p className="text-sm">{experience.role}</p>
                    <p className="text-sm font-light">{experience.duration}</p>
                    <p className="mt-2">{experience.description}</p>
                  </div>
                </div>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-300 bg-white`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>

  );
};

export default Experience;
