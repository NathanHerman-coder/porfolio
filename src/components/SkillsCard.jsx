import React from "react";
import { motion } from "framer-motion";

function SkillsCard({ name, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-800/60 backdrop-blur-lg border border-gray-700 hover:border-blue-500/40 
                 p-6 sm:p-8 rounded-2xl text-center text-gray-200 shadow-md hover:shadow-blue-500/20 
                 transition-all duration-300"
    >
      {/* Effet de lumière subtile en fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-2xl blur-lg transition-all duration-500"></div>

      {/* Contenu principal */}
      <h2 className="relative z-10 font-bold text-xl sm:text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        {name}
      </h2>
      <p className="relative z-10 text-sm sm:text-base text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default SkillsCard;
