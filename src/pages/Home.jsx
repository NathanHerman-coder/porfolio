import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 overflow-hidden">
      {/* ==== Section principale ==== */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-16">

        {/* ==== Texte principal ==== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left flex-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Rantoandriatiana Nathan Herman
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-400 mb-6">
            Développeur Full Stack • Passionné par la technologie et le design
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base max-w-xl">
            J’aide les entreprises et les étudiants à transformer leurs idées en
            applications web modernes, performantes et esthétiques, grâce à des
            outils comme <span className="text-gray-100 font-medium">React, Django, et TailwindCSS</span>.
          </p>

          {/* ==== Boutons ==== */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link to="/project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <Rocket size={18} />
                Voir mes projets
              </motion.button>
            </Link>
            <Link to="/cv">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition text-gray-300 px-6 py-3 rounded-xl"
              >
                <FileText size={18} />
                Voir mon CV
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* ==== Illustration / Image de profil ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[3px] shadow-lg">
            <img
              src="/profi.jpg" // Remplace par ton image
              alt="Ranto Nathan Herman"
              className="rounded-full w-full h-full object-cover border-4 border-gray-900"
            />
          </div>
        </motion.div>
      </div>

      {/* ==== Section Domaines d’expertise ==== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl mt-16 sm:mt-20 px-4 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Domaines d’expertise
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "💻 Développement Web & API",
              desc: "Création d’applications web modernes avec React, Node.js, Django et intégration d’API performantes.",
              color: "hover:shadow-blue-500/20 text-blue-400",
            },
            {
              title: "📱 Interfaces & Expérience utilisateur",
              desc: "Conception d’interfaces élégantes et intuitives avec Tailwind, Figma, et une attention particulière à l’ergonomie.",
              color: "hover:shadow-purple-500/20 text-purple-400",
            },
            {
              title: "⚙️ Architecture & Performance",
              desc: "Structuration de projets modulaires, sécurisés et maintenables. Optimisation du code pour la performance.",
              color: "hover:shadow-indigo-500/20 text-indigo-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-left shadow-lg transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
