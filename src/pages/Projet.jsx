import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projet = () => {
  // Liste de projets
  const projects = [
    {
      title: "Plateforme éducative",
      description: "Plateforme web éducative avec contenus interactifs et responsive design.",
      image: "Capture.PNG",
      demoLink: "https://educnum.netlify.app/",
      codeLink: "https://github.com/NathanHerman-coder/educnum" // si disponible
    },
    {
      title: "Portfolio React",
      description: "Mon portfolio personnel en React avec TailwindCSS et React Router.",
      image: "Capture2.PNG",
      demoLink: "https://monportfolio.com",
      codeLink: "https://github.com/NathanHerman-coder/portfolio"
    },
    // Ajoute d'autres projets ici
  ];

  return (
    <div className="bg-gray-700 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-200 mb-12">
        Mes Projets
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            demoLink={proj.demoLink}
            codeLink={proj.codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projet;
