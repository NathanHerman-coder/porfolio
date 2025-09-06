import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
const App = ()=>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projet />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
      <Footer/>
    </BrowserRouter>
      
  )
}

export default App;
