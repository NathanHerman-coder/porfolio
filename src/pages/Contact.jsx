import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Facebook, Linkedin, Mail, PhoneCall } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  // 🔄 Mise à jour des champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✉️ Envoi via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_e5fkilq",      
        "template_huc0pmn",     
        formData,
        "HNE_GSxf6gdr1VmPK"    
      )
      .then(
        () => {
          alert("✅ Merci ! Votre message a bien été envoyé.");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Erreur lors de l’envoi du message.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-3xl p-10 border border-gray-700 hover:border-blue-500/40 transition-all duration-500">
        
        {/* 🔹 Titre */}
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Contactez-moi
        </h1>

        {/* 🔹 Sous-titre */}
        <p className="text-gray-300 text-center mb-8">
          Vous avez un projet ou une question ? Envoyez-moi un message 👇
        </p>

        {/* 🔹 Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        {/* 🔹 Informations de contact */}
        <div className="mt-10 text-gray-300 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <a href="mailto:rantonathanherman@gmail.com" className="hover:text-blue-400 transition">
              rantonathanherman@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <PhoneCall className="w-5 h-5 text-blue-400" />
            <a href="tel:+261382812036" className="hover:text-blue-400 transition">
              +261 38 28 120 36
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Linkedin className="w-5 h-5 text-blue-400" />
            <a
              href="https://www.linkedin.com/in/ranto-nathan-herman-891b89363/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Facebook className="w-5 h-5 text-blue-400" />
            <a
              href="https://www.facebook.com/profile.php?id=61577222796590"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
