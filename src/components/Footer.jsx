import React from "react";

const Footer = () =>{
 return (
 <footer class="bg-gray-800 text-white text-[0.75rem]">
  <div class="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
    
    {/*/<!-- Copyright -->*/}
    <div>
      <p class="text-sm">&copy; 2025 <span class="font-bold">Nathan Herman</span>. Tous droits réservés.</p>
    </div>

    {/*<!-- Navigation / Liens rapides -->*/}
    <div class="flex justify-center space-x-6">
      <a href="#" class="hover:text-blue-400 transition"></a>
      <a href="#" class="hover:text-blue-400 transition">Projets</a>
      <a href="#" class="hover:text-blue-400 transition">Contact</a>
    </div>

    {/*<!-- Contact + Réseaux -->*/}
    <div class="flex justify-center md:justify-end space-x-5">
      <a href="mailto:rantonathanherman@gmail.com" class="hover:text-green-400 transition">
        📧
      </a>
      <a href="https://github.com/" target="_blank" class="hover:text-gray-400 transition">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" class="hover:text-blue-500 transition">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </div>

  {/*<!-- Ligne animée en bas -->*/}
  <div class="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
</footer>
 )
}

export default Footer