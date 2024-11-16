import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-black to-blue-500">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
