import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">

        {/* --- Copyright --- */}
        <div>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Ranto Nathan Herman</span>.
            Tous droits réservés.
          </p>
        </div>

        {/* --- Liens de navigation --- */}
        <div className="flex justify-center space-x-6 font-medium">
          <Link to="/project" className="hover:text-blue-400 transition">Projets</Link>
          <Link to="/CV" className="hover:text-blue-400 transition">À propos</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* --- Réseaux sociaux --- */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a
            href="mailto:rantonathanherman@gmail.com"
            className="hover:text-green-400 transition"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/NathanHerman-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ranto-nathan-herman-891b89363/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* --- Ligne animée --- */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
