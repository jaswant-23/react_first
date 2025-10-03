import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/project" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
