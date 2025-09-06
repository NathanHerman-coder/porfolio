import React from "react";
import { GraduationCap, Briefcase } from "lucide-react"; // icônes modernes

const CV = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-gray-200 grid grid-cols-1 md:grid-cols-3">
      {/* Colonne gauche */}
      <div className="bg-blue-900 flex flex-col items-center p-6 space-y-4 shadow-lg">
        <img
          src="/profi.jpg"
          alt="profil"
          className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
        />
        <h1 className="font-bold text-2xl text-center">
          Nathan Herman RANTOANDRIATIANA
        </h1>
        <p className="text-lg font-semibold text-blue-200">
          Développeur Web Fullstack
        </p>
        <div className="text-center text-sm leading-relaxed">
          <p>
            Étudiant en Mathématiques et Informatique pour les Sciences Sociales
            <br />
            <span className="font-bold">Université de Fianarantsoa</span>
          </p>
          <p className="mt-2">
            Étudiant en Mathématiques Fondamentales
            <br />
            <span className="font-bold">École Normale Supérieure</span>
          </p>
        </div>
      </div>

      {/* Colonne droite */}
      <div className="col-span-2 p-8 space-y-8">
        {/* Section Formations */}
        <section>
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <span>Formations</span>
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Licence en Mathématiques & Informatique</h3>
              <p className="text-sm text-gray-300">Université de Fianarantsoa</p>
              <p className="text-xs text-gray-400">2022 - Présent</p>
            </li>
            <li className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Mathématiques Fondamentales</h3>
              <p className="text-sm text-gray-300">École Normale Supérieure</p>
              <p className="text-xs text-gray-400">2022 - Présent</p>
            </li>
          </ul>
        </section>

        {/* Section Expériences */}
        <section>
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-green-400" />
            <span>Expériences</span>
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Candidature au projet innovant Faculté des sciences</h3>
              <p className="text-sm text-gray-300">Developpement d'un plateforme éducatives 
                pour aider les jeunes étudiants du pays</p>
              <p className="text-xs text-gray-400">Projets en cours de developpement depuis juillet 2025</p>
            </li>
            <li className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Formations en lignes</h3>
              <p className="text-sm text-gray-300">Je donne des formations en ligne sur la programmation informatique, 
                le developpement web et le Mathématiques.
              </p>
              <p className="text-xs text-gray-400">Depuis février 2025</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
