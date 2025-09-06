import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 min-h-screen flex flex-col justify-center items-center px-6 text-gray-200">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fadeIn">
          Nathan Herman RANTOANDRIATIANA
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 animate-fadeIn delay-200">
          Développeur web Fullstack passionné par la création d'applications web, mobiles et desktop.
        </p>
        <p className="text-md md:text-lg mb-8 animate-fadeIn delay-400">
          Je conçois des sites et applications modernes, performants et intuitifs.
        </p>

        {/* Buttons CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-600">
          <Link
            to="/project"
            className="flex items-center gap-2 bg-blue-600 text-gray-200 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transform hover:scale-105 transition"
          >
            🚀 Voir mes Projets
          </Link>
          <Link
            to="/CV"
            className="flex items-center gap-2 bg-gray-600 text-gray-200 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-500 transform hover:scale-105 transition"
          >
            📄 Mon CV
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16">
        {["React", "Node.js", "Python", "JavaScript"].map((skill, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 transform transition duration-300">
            <h3 className="font-bold mb-2 text-lg">{skill}</h3>
            <p className="text-sm text-gray-300">
              {skill === "React" && "Frontend moderne"}
              {skill === "Node.js" && "Backend & API"}
              {skill === "Python" && "Django & Data"}
              {skill === "JavaScript" && "ES6+, Vanilla JS"}
            </p>
          </div>
        ))}
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-md animate-float">
        <img
          src="/profi.jpg"
          alt="Nathan Herman"
          className="rounded-lg shadow-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
