import React from "react";

const ProjectCard = ({ title, description, image, demoLink, codeLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover"/>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-gray-200 transition"
            >
              Voir Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-200 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
