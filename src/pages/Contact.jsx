import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Merci ! Votre message a été envoyé.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur serveur, réessayez plus tard.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-200 mb-6">
          Contactez-moi
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Vous avez une question ou un projet à discuter ? Envoyez-moi un message !
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="Votre nom" required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Votre email" required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message" value={formData.message} onChange={handleChange}
            placeholder="Votre message" required rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        <div className="mt-8 text-gray-400 text-center space-y-2">
          <p>Email : <a href="mailto:rantonathanherman@gmail.com" className="text-blue-400">rantonathanherman@gmail.com</a></p>
          <p>Téléphone : <a href="tel:+261382812036" className="text-blue-400">+261382812036</a></p>
          <p>LinkedIn : <a href="https://www.linkedin.com/in/ranto-nathan-herman-891b89363/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeElkYkZ0RPWRWjLigPE3aA%3D%3D" className="text-blue-400" target="_blank" rel="noopener noreferrer">linkedin.com/in/Ranto Nathan Herman</a></p>
          <p>Facebook : <a href="https://www.facebook.com/profile.php?id=61577222796590" className="text-blue-400">Coder Avec Nathan</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
