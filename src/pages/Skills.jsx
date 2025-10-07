import React from "react";
import { Link } from "react-router-dom";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 min-h-screen py-16 px-6 overflow-hidden">

      {/* ==== Halo lumineux de fond ==== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* ==== Introduction ==== */}
      <div className="text-gray-200 max-w-4xl mx-auto mb-16 px-4 py-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Passionné par le développement informatique 💻
        </h1>
        <h2 className="text-lg md:text-xl font-light mb-4 text-gray-300">
          J’aime concevoir des solutions web et mobiles qui allient design, performance et expérience utilisateur.
        </h2>
        <h3 className="text-md md:text-lg font-medium mt-4 text-gray-400">
          Voici les technologies que je maîtrise :
        </h3>
      </div>

      {/* ==== Grille des compétences ==== */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
        <SkillsCard 
          name="JavaScript" 
          description="Création d’applications web interactives et dynamiques avec JavaScript pur." 
        />
        <SkillsCard 
          name="React" 
          description="Développement d’interfaces dynamiques et responsives avec hooks et gestion d’état." 
        />
        <SkillsCard 
          name="Node.js & Express" 
          description="Création d’API RESTful, gestion des routes et middlewares pour le backend." 
        />
        <SkillsCard 
          name="PostgreSQL" 
          description="Conception et manipulation de bases de données relationnelles performantes." 
        />
        <SkillsCard 
          name="Git & GitHub" 
          description="Gestion de versions, collaboration en équipe et intégration continue." 
        />
        <SkillsCard 
          name="TailwindCSS" 
          description="Stylisation rapide, moderne et responsive de composants web." 
        />
        <SkillsCard 
          name="Python" 
          description="Développement backend avec Django, automatisation et analyse de données." 
        />
        <SkillsCard 
          name="Java" 
          description="Programmation orientée objet, JavaFX, et bases du framework Spring Boot." 
        />
        <SkillsCard 
          name="C/C++" 
          description="Langage fondamental pour la performance, utilisation de GTK et Qt pour interfaces natives." 
        />
      </div>

      {/* ==== Call To Action ==== */}
      <div className="flex justify-center">
        <Link to="/project">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition">
            Voir mes projets 🚀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
