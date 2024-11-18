import Footer from '@/components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-black to-blue-500 ">
      <div className="container mx-auto py-36 max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
            />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
            ></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:scale-105 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
