import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import rolandoPolo from "../assets/rolando-juarez-polo.png";

// --- Traducciones ---
const translations = {
  en: {
    sectionLabel: "ABOUT ME",
    title: "What makes",
    titleName: "ISMAHEL JUAREZ",
    titleEnd: "different?",
    description: "As a Full Stack Developer and Technology Consultant, I enjoy driving projects that combine creativity, innovation, and real results, helping businesses grow and stand out in the digital age.",
    stats: [
      { value: '600+', label: 'Completed Projects' },
      { value: '20+', label: 'Industries Served' },
      { value: '5+', label: 'Years of Experience' },
    ],
    downloadCV: "Download CV",
    watchPresentation: "Watch my presentation",
    closeVideo: "Close video",
  },
  es: {
    sectionLabel: "SOBRE MÍ",
    title: "¿Qué hace diferente a",
    titleName: "ISMAHEL JUAREZ",
    titleEnd: "?",
    description: "Como Full Stack Developer y Consultor Tecnológico, disfruto impulsando proyectos que combinan creatividad, innovación y resultados reales, ayudando a las empresas a crecer y destacar en la era digital.",
    stats: [
      { value: '600+', label: 'Proyectos Completados' },
      { value: '20+', label: 'Sectores Atendidos' },
      { value: '5+', label: 'Años de Experiencia' },
    ],
    downloadCV: "Descargar CV",
    watchPresentation: "Mira mi presentación",
    closeVideo: "Cerrar video",
  },
};

// --- SVG del Icono de Play ---
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
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { type: 'spring' as const, stiffness: 80, damping: 15 } 
  },
};

// --- Variantes para el Modal de Video ---
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const videoModalVariants = {
  hidden: { 
    opacity: 0, 
    x: "-100vw",
    skewX: "-10deg"
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    skewX: 0,
    transition: { 
      type: 'spring' as const, 
      stiffness: 100, 
      damping: 20,
      delay: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    x: "100vw",
    skewX: "10deg",
    transition: { duration: 0.25 }
  },
};

// --- Componente principal: About Me ---
const AboutMeSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-32 relative overflow-hidden overflow-x-hidden">
      
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] sm:text-[120px] md:text-[180px] lg:text-[250px] font-extrabold text-white/5 opacity-5 tracking-widest pointer-events-none z-0">
        {t.sectionLabel}
      </h1>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 

        
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* COLUMNA IZQUIERDA: IMAGEN */}
       <motion.div
  className="w-full lg:w-1/2 flex justify-center relative my-6 sm:my-8 lg:my-0 select-none"
  variants={imageVariants}
>
  <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl shadow-green-500/30 border-green-500/30">
    <img
      src={rolandoPolo}
      alt="Rolando Juarez"
      className="w-full h-full object-cover pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>
</motion.div>


          {/* COLUMNA DERECHA: TEXTO, ESTADÍSTICAS Y BOTONES */}
          <motion.div
            className="w-full lg:w-1/2 lg:pl-8 xl:pl-16 text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.p 
              className="text-green-500 font-bold tracking-widest text-xs sm:text-sm mb-2"
              variants={textItemVariants}
            >
              {t.sectionLabel}
            </motion.p>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
              variants={textItemVariants}
            >
              {t.title} <span className="text-green-500">{t.titleName}</span>{t.titleEnd}
            </motion.h2>
            
            <motion.p 
              className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg lg:mx-0 mx-auto"
              variants={textItemVariants}
            >
              {t.description}
            </motion.p>

            {/* Estadísticas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              {t.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center min-w-[100px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-green-500 mb-1">{stat.value}</p>
                  <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* ZONA DE BOTONES */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* Botón CV */}
              <motion.a
                href="/assets/juarezcv2025.pdf"
                download="Rolando-Juarez-CV-2025.pdf"
                className="inline-block bg-green-500 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50 text-sm sm:text-base text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                {t.downloadCV}
              </motion.a>
              
              {/* BOTÓN DE PLAY */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center bg-transparent border-2 border-green-500 text-green-500 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-500 hover:text-black transition-colors text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <PlayIcon />
                {t.watchPresentation}
              </motion.button>
            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* MODAL DE VIDEO PRESENTACIÓN */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-3 sm:p-4 z-50 cursor-zoom-out"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="w-full max-w-4xl bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl shadow-green-500/30 border border-green-700 relative"
              variants={videoModalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition z-50"
                aria-label={t.closeVideo}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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