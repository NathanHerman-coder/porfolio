"use client";
import React from "react";
import { GraduationCap, Briefcase, Code2, Mail, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const CV = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 grid grid-cols-1 md:grid-cols-3">
      {/* ================================
          COLONNE GAUCHE
      ================================= */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-b from-blue-800 to-blue-950 flex flex-col items-center p-8 space-y-4 shadow-xl"
      >
        {/* Photo de profil */}
        <motion.img
          src="/profi.jpg"
          alt="profil"
          className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg object-cover hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        />

        {/* Nom et rôle */}
        <h1 className="font-bold text-2xl text-center tracking-wide">
          Nathan Herman RANTOANDRIATIANA
        </h1>
        <p className="text-lg font-semibold text-blue-200 text-center">
          Développeur Web Fullstack et développeur d'applications
        </p>

        {/* Détails de contact */}
        <div className="mt-4 text-center text-sm space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 text-blue-300" />
            <a
              href="mailto:rantonathanherman@gmail.com"
              className="hover:text-blue-400 transition"
            >
              rantonathanherman@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-300" />
            <span>Fianarantsoa, Madagascar</span>
          </div>
        </div>

        {/* Études */}
        <div className="text-center text-sm mt-6 space-y-4">
          <div>
            <p>
              Étudiant en Mathématiques et Informatique pour les Sciences
              Sociales
            </p>
            <span className="font-bold text-blue-300">
              Université de Fianarantsoa
            </span>
          </div>
          <div>
            <p>Étudiant en Mathématiques Fondamentales</p>
            <span className="font-bold text-blue-300">
              École Normale Supérieure
            </span>
          </div>
        </div>

        {/* Compétences clés */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 bg-blue-900/40 rounded-xl p-4 shadow-inner w-full"
        >
          <h3 className="text-center font-semibold text-blue-300 mb-2 flex justify-center items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            Compétences clés
          </h3>
          <ul className="text-xs text-gray-300 text-center space-y-1">
            <li>React / Next.js / TailwindCSS</li>
            <li>Django / Node.js / Express</li>
            <li>PostgreSQL / SQLite</li>
            <li>Java / Python / C / C++</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* ================================
          COLONNE DROITE
      ================================= */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-2 p-8 space-y-10"
      >
        {/* SECTION FORMATIONS */}
        <motion.section
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold flex items-center space-x-3 mb-4">
            <GraduationCap className="w-7 h-7 text-blue-400" />
            <span>Formations</span>
          </h2>
          <ul className="space-y-4">
            {[
              {
                titre: "Bac+2 en Mathématiques & Informatique",
                ecole: "Faculté de sciences - Fianarantsoa",
                periode: "2022 - Présent",
              },
              {
                titre: "Bac+2 en Mathématiques Fondamentales",
                ecole: "École Normale Supérieure - Fianarantsoa",
                periode: "2022 - Présent",
              },
              {
                titre: "Formation en Développement Web Fullstack",
                ecole: "Autoformation & Cours en ligne",
                periode: "2023 - Présent",
              },

            ].map((formation, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/60 border border-gray-700 p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
              >
                <h3 className="font-semibold text-lg text-blue-300">
                  {formation.titre}
                </h3>
                <p className="text-sm text-gray-400">{formation.ecole}</p>
                <p className="text-xs text-gray-500">{formation.periode}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold flex items-center space-x-3 text-purple-400 mb-4">
            <BookOpen className="w-7 h-7" />
            <span>Formation actuelle</span>
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-purple-600/20 transition-all duration-500 relative overflow-hidden"
          >
            {/* effet shimmer subtil */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />

            <h3 className="font-semibold text-lg text-purple-300 mb-2">
              Développement Web Moderne, Génie Logiciel & Intelligence Artificielle
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Je renforce actuellement mes compétences en{" "}
              <span className="text-purple-200 font-semibold">
                développement fullstack
              </span>{" "}
              avec les technologies modernes comme{" "}
              <span className="text-purple-200 font-semibold">React, Django et JavaFX</span>, tout en
              approfondissant mes connaissances en{" "}
              <span className="text-purple-200 font-semibold">
                Machine Learning et Intelligence Artificielle
              </span>{" "}
              avec Python.
            </p>

            <p className="text-gray-400 text-sm mt-3 italic">
              Mon objectif est de devenir un ingénieur logiciel capable de concevoir des applications
              intelligentes, performantes, sécurisées et évolutives.
            </p>
          </motion.div>
        </motion.section>


        {/* SECTION EXPÉRIENCES */}
        <motion.section
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold flex items-center space-x-3 mb-4">
            <Briefcase className="w-7 h-7 text-green-400" />
            <span>Expériences</span>
          </h2>
          <ul className="space-y-4">
            {[
              {
                titre:
                  "Projet Innovant – Faculté des Sciences (Université de Fianarantsoa)",
                description:
                  "Développement d’une plateforme éducative pour aider les jeunes étudiants du pays à apprendre plus efficacement.",
                periode: "Depuis juillet 2025",
              },
              {
                titre: "Formateur en ligne",
                description:
                  "Création de formations en ligne sur la programmation avec le langage C, le développement web et les mathématiques appliquées à l'informatique.",
                periode: "Depuis février 2025",
              },
            ].map((exp, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/60 border border-gray-700 p-5 rounded-xl shadow-md hover:shadow-green-500/30 transition"
              >
                <h3 className="font-semibold text-lg text-green-300">
                  {exp.titre}
                </h3>
                <p className="text-sm text-gray-300">{exp.description}</p>
                <p className="text-xs text-gray-500">{exp.periode}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default CV;
