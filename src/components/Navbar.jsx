import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white text-[0.75rem] font-medium px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Accueil</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Compétences</Link></li>
          <li><Link to="/project" className="hover:text-blue-400">Projets personnels</Link></li>
          <li><Link to="/CV" className="hover:text-blue-400">CV</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-6">


          <div className="flex items-center space-x-6">

            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
              <img src="/profil2.jpg" alt="User Profile" className="w-8 h-8 rounded-full border-2 border-white"/>
              <span className="font-medium">Nathan Herman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col space-y-2 mt-2 md:hidden">
          <li><Link to="/" className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/skills" className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>Compétences</Link></li>
          <li><Link to="/project" className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>Projets personnels</Link></li>
          <li><Link to="/CV" className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>CV</Link></li>
          <li><Link to="/contact" className="block px-2 py-1 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 rounded px-2 py-1">
              <img src="/profil2.jpg" alt="User Profile" className="w-8 h-8 rounded-full border-2 border-white"/>
              <span className="font-medium">Nathan Herman</span>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
