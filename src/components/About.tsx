import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rolandoPolo from "../assets/rolando-juarez-polo.png"; // 👈 Importa tu imagen local
// --- SVG del Icono de Play (Mantenido) ---
const PlayIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 mr-2"
  >
    <path 
      fillRule="evenodd" 
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
      clipRule="evenodd" 
    />
  </svg>
);


// --- Datos para la sección "About Me" (Mantenido) ---
const aboutData = {
  name: 'ISMAHEL JUAREZ',
  description:
    'Como Full Stack Developer y Consultor Tecnológico, disfruto impulsando proyectos que combinan creatividad, innovación y resultados reales, ayudando a las empresas a crecer y destacar en la era digital.',
  stats: [
{ value: '600+', label: 'Proyectos Completados' },
{ value: '20+', label: 'Sectores Atendidos' },
{ value: '5+', label: 'Años de Experiencia' },

  ],
};

// --- Definiciones de Variantes de Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { type: 'spring', stiffness: 80, damping: 15 } 
  },
};

// 🌟 --- Variantes para el Modal de Video (Animación Izquierda a Derecha) --- 🌟
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const videoModalVariants = {
  hidden: { 
    opacity: 0, 
    x: "-100vw", // Comienza completamente fuera de la pantalla a la izquierda
    skewX: "-10deg" // Efecto "dinámico" al entrar
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    skewX: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20,
      delay: 0.1 // Pequeño retraso para que el fondo aparezca primero
    } 
  },
  exit: { 
    opacity: 0, 
    x: "100vw", // Sale hacia la derecha
    skewX: "10deg",
    transition: { duration: 0.25 }
  },
};

// --- Componente principal: About Me (CON MODAL DESLIZANTE) ---
const AboutMeSection = () => {

  // 🌟 Estado para controlar la visibilidad del modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    // 🚨 Añadido 'overflow-x-hidden' al contenedor principal para evitar 
    // que el modal cree una barra de scroll horizontal al estar fuera de pantalla
    <section id="about" className="bg-black text-white pt-20 pb-20 md:pb-32 relative overflow-hidden overflow-x-hidden">
      
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-extrabold text-white/5 opacity-5 tracking-widest pointer-events-none z-0">
        ABOUT ME
      </h1>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* COLUMNA IZQUIERDA: IMAGEN */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center relative my-10 lg:my-0"
            variants={imageVariants}
          >
  <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
  <img
    src={rolandoPolo}
    alt="Rolando Juarez"
    className="w-full h-full object-cover"
  />
</div>

          </motion.div>

          {/* COLUMNA DERECHA: TEXTO, ESTADÍSTICAS Y BOTONES */}
          <motion.div
            className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.p 
              className="text-green-500 font-bold tracking-widest text-sm mb-2"
              variants={textItemVariants}
            >
              SOBRE MI
            </motion.p>
            
            <motion.h2 
              className="text-5xl font-extrabold mb-6"
              variants={textItemVariants}
            >
              ¿Qué hace diferente a <span className="text-green-500">{aboutData.name}</span>?
            </motion.h2>
            
            <motion.p 
              className="text-white/70 text-lg mb-8 max-w-lg lg:mx-0 mx-auto"
              variants={textItemVariants}
            >
              {aboutData.description}
            </motion.p>

            {/* Estadísticas */}
            <div className="flex justify-center lg:justify-start gap-8 mb-10">
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  <p className="text-4xl font-extrabold text-green-500 mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* 🌟 ZONA DE BOTONES MODIFICADA 🌟 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Botón CV */}
              <motion.a
                href="/path/to/your/cv.pdf" 
                download
                className="inline-block bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                Descargar CV
              </motion.a>
              
              {/* 🌟 BOTÓN DE PLAY MODIFICADO (ahora es 'button') 🌟 */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-500 hover:text-black transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <PlayIcon />
                Mira mi presentación
              </motion.button>
            </div>

          </motion.div>
        </div>

        {/* Ya no hay <hr> ni video incrustado aquí */}
      </motion.div>

      {/* 🎬 MODAL DE VIDEO PRESENTACIÓN (CON AnimatePresence) 🎬 */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 cursor-zoom-out"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl shadow-green-500/30 border border-green-700 relative"
              variants={videoModalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar (dentro del modal de video) */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition z-50"
                aria-label="Cerrar video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Contenedor del Iframe */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src=""
                  title="Video Presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AboutMeSection;