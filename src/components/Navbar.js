import Link from 'next/link';

const Navbar = () => {
    
  return (
    <nav className="bg-gradient-to-r from-black to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-teal-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a className="text-white hover:text-teal-300">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:text-teal-300">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
