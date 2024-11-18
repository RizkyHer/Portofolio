import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <>
    <Navbar/>
    <main className="bg-gradient-to-r from-black to-blue-500 py-36">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 text-center mb-11 max-w-screen-lg">
        <h1 style={{ fontFamily: "'Edu AU VIC WA NT Pre', sans-serif" }} className="text-9xl font-bold">
          I&apos;m Rizky
        </h1>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 py-8 max-w-screen-lg">
        <div className="flex justify-center">
          <div className="w-96 h-96 rounded-xl overflow-hidden">
            <Image
              src="/assets/images/PC2.jpeg"
              alt="Photo of Seán"
              width={384}
              height={384}
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", lineHeight: '1.5' }} className="text-2xl font-semibold mb-4">
            I&apos;m a Web Developer working remotely from{' '}
            Bandung, Indonesia.
          </h2>
          <p className="mb-4 text-base leading-relaxed" tyle={{ fontFamily: "'Roboto', sans-serif"}}>
          I&apos;m a Fullstack Developer and a graduate of Sekolah Tahfidz Fahim Quran Plus Bandung.
          The intensive one-year program equipped me with technical expertise while strengthening my spiritual foundation through Quran memorization. 
          This experience not only honed my technical skills but also instilled values and character that guide me in every aspect of my work.
          </p>
          <p className="mb-4 text-base" tyle={{ fontFamily: "'Roboto', sans-serif", lineHeight: '1.5' }}>
          Currently, I&apos;m dedicating myself to GSI Home Production, a business unit of the Gerakan Sekolah Impian. 
          I believe that technology is a powerful tool for driving positive change, 
          and I strive to deliver meaningful contributions in every project I undertake.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-8 max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {[
            { company: 'Web Developer', role: 'Dev', time: '1 Year', color: 'bg-teal-500' },  // Teal stands out on dark background
            { company: 'Backend Developer', role: ' Dev', time: '1 Year', color: 'bg-green-500' }, // Green provides good contrast
            { company: 'Game Developer', role: 'Dev', time: '6 Months', color: 'bg-yellow-500' }, // Yellow is bright against black and blue
            { company: 'Fullstack Developer', role: 'Design / Dev', time: '1 Year', color: 'bg-indigo-500' }, // Indigo adds some cool tone contrast
          ].map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md text-white ${item.color}`}
            >
              <div className="font-bold">{item.company}</div>
              <div>{item.role}</div>
              <div className="text-sm">{item.time}</div>
            </div>
          ))}
        </div>
      </div>



      {/* Collaboration Section */}
      <div className="bg-gradient-to-r from-black to-blue-500 py-8">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let&apos;s collaborate if you&apos;re committed to sustainability, education, equality, or carbon neutrality.
          </h2>
          <p className="text-white">
            I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I&apos;d love to talk.
          </p>
        </div>
      </div>

      {/* Principles Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg">
        {[
          {
            number: '01',
            title: 'Make it',
            description:
              'I sketch wireframes and make prototypes. Design tools only carry you so far; the rest should be realized with a link my team can rally around.',
          },
          {
            number: '02',
            title: 'Collaborate',
            description:
              'Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team.',
          },
          {
            number: '03',
            title: 'Accessible FTW',
            description:
              'I aim to make everything I design accessible to all for one main reason - it\'s the right thing to do.',
          },
          {
            number: '04',
            title: 'Keep experimenting',
            description:
              'Everything I create is subject to change and experimentation. Not everything will work, but it\'s worth trying - and learning from what doesn\'t.',
          },
        ].map((principle, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md text-white ${index % 2 === 0 ? 'bg-teal-500' : 'bg-yellow-500'}`} // Alternating card colors for contrast
          >
            <div className="text-4xl font-bold text-gray-800">{principle.number}</div>
            <h3 className="text-xl font-semibold">{principle.title}</h3>
            <p className="text-sm">{principle.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-4 py-8 max-w-screen-lg">
        <p className="text-white">
          Before I stepped into the world of product design, I was a web developer. My side project work satisfies my curiosity about new technologies.
        </p>
        <p className="text-white">
          Outside work, I enjoy good coffee near my home by the sea, listening to and playing music, exploring the world with my partner, and playing with my Labrottie pup, Louie.
        </p>
      </div>

    </main>
    <Footer/>
    </>

  );
};

export default About;
