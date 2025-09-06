import React from "react";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <div className="bg-gray-700 min-h-screen py-12 px-6">
      {/* Introduction */}
      <div className="text-gray-200 max-w-4xl mx-auto mb-16 px-4 py-8">
  <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
    Passionné par le développement informatique, j'aime créer des solutions web et mobiles qui font la différence.
  </h1>
  <h2 className="text-xl md:text-2xl font-light text-center">
    Mon objectif : combiner design, performance et expérience utilisateur pour chaque projet.
  </h2>
  <h3 className="text-lg md:text-xl font-medium text-center mt-4">
    Voici les technologies que je maîtrise :
  </h3>
</div>


      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto mb-12">
        <SkillsCard
          name="JavaScript"
          description="Je maîtrise le vanilla JavaScript. Je peux créer des applications web interactives et dynamiques avec."
        />
        <SkillsCard 
  name="React" 
  description="Création d’interfaces web dynamiques et responsives, utilisation de hooks et gestion d’état." 
/>
<SkillsCard 
  name="Node.js & Express" 
  description="Création d’API RESTful, gestion des routes et des middlewares." 
/>
<SkillsCard 
  name="PostgreSQL" 
  description="Conception de bases de données relationnelles et requêtes SQL." 
/>
<SkillsCard 
  name="Git & GitHub" 
  description="Gestion de versions, collaboration et déploiement de projets." 
/>
<SkillsCard 
  name="TailwindCSS" 
  description="Stylisation rapide et responsive des composants web." 
/>

        <SkillsCard
          name="Python"
          description="Bases du langage Python, librairies de calcul/statistiques, visualisation des données et framework web Django."
        />
        <SkillsCard
          name="Java"
          description="Bases de la POO avec Java, interfaces graphiques JavaFX et JFrame, backend avec Spring."
        />
        <SkillsCard
          name="C/C++"
          description="Langage maternel en programmation. Réalisation de projets avec C/C++, maîtrise de GTK et Qt."
        />
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-gray-200 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Voir mes Projets
        </button>
      </div>
    </div>
  );
};

export default Skills;
