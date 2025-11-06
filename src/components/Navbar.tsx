import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: [
      { label: "Home", target: "home" },
      { label: "Services", target: "services" },
      { label: "About Me", target: "about" },
      { label: "Projects", target: "proyects" },
      { label: "Experience", target: "experience" },
      { label: "Contact", target: "contact" },
    ],
    es: [
      { label: "Inicio", target: "home" },
      { label: "Servicios", target: "services" },
      { label: "Sobre mí", target: "about" },
      { label: "Proyectos", target: "proyects" },
      { label: "Experiencia", target: "experience" },
      { label: "Contacto", target: "contact" },
    ],
  };

  // Función para desplazarse suavemente
  const handleScroll = (id: string) => {
    // Primero cerramos el menú
    setMenuOpen(false);
    
    // Pequeño delay para que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Ajuste por la altura del navbar
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-10">
        <h1
          onClick={() => handleScroll("home")}
          className="text-xl sm:text-2xl font-bold text-neon cursor-pointer flex-shrink-0"
        >
          Juarez.
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {translations[language].map((item) => (
            <li
              key={item.label}
              onClick={() => handleScroll(item.target)}
              className="hover:text-neon cursor-pointer transition whitespace-nowrap"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* BOTONES */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Botón de idioma con texto */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-800 transition flex-shrink-0"
            aria-label="Cambiar idioma"
          >
            <Globe size={18} className="text-neon sm:w-5 sm:h-5" />
            <span className="text-neon text-sm font-semibold uppercase">
              {language === "en" ? "EN" : "ES"}
            </span>
          </button>

          <a
            href="https://api.whatsapp.com/send/?phone=51981031225&text=https%3A%2F%2Fjuarezdev.com%2F%0A%0A%C2%A1Deseo+crecer+con+ustedes%21+%F0%9F%9A%80%F0%9F%92%BC%F0%9F%8C%9F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-neon text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition whitespace-nowrap text-sm md:text-base md:px-5"
          >
            {language === "en" ? "Let's Talk" : "Hablemos"}
          </a>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="md:hidden text-gray-300 hover:text-neon transition p-1 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU RESPONSIVE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 px-4">
              {translations[language].map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleScroll(item.target)}
                  className="hover:text-neon cursor-pointer transition text-base sm:text-lg w-full text-center py-2"
                >
                  {item.label}
                </li>
              ))}
              
              {/* BOTÓN "HABLEMOS" EN MÓVIL */}
              <li className="w-full px-4 pt-2">
                <a 
                  href="https://api.whatsapp.com/send/?phone=51951294974&text=https%3A%2F%2Fjuarextech.com%2F%0A%0A%C2%A1Deseo+crecer+con+ustedes%21+%F0%9F%9A%80%F0%9F%92%BC%F0%9F%8C%9F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-neon text-black font-semibold px-4 py-3 rounded-lg hover:scale-105 transition text-base block text-center"
                >
                  {language === "en" ? "Let's Talk" : "Hablemos"}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;