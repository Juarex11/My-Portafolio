import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");

  const translations = {
    en: ["Home", "Services", "About Me", "Projects", "Testimonials", "Contact"],
    es: ["Inicio", "Servicios", "Sobre mí", "Proyectos", "Testimonios", "Contacto"],
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-lg border-b border-gray-800">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-neon cursor-pointer">Juarez.</h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {translations[language].map((item) => (
            <li
              key={item}
              className="hover:text-neon cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BOTONES */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-800 transition"
          >
            <Globe size={20} className="text-neon" />
          </button>

          <button className="bg-neon text-black font-semibold px-5 py-2 rounded-lg hover:scale-105 transition">
            {language === "en" ? "Let’s Talk" : "Hablemos"}
          </button>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="md:hidden text-gray-300 hover:text-neon transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU RESPONSIVE */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black border-t border-gray-800"
        >
          <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300">
            {translations[language].map((item) => (
              <li
                key={item}
                className="hover:text-neon cursor-pointer transition text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
