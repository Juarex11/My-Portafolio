import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// --- Traducciones ---
const translations = {
  en: {
    sectionLabel: "SERVICES",
    subtitle: "Experience and technology at your service",
    title: "Areas",
    titleEnd: "of Expertise",
    roles: [
      "FULL STACK DEVELOPER",
      "SOFTWARE ARCHITECT",
      "PROJECT MANAGER",
      "TECH LEAD",
      "UI/UX DESIGNER",
      "SOFTWARE ENGINEER",
      "DEVOPS ENGINEER",
      "SYSTEM ADMINISTRATOR",
      "IT CONSULTANT",
      "TECHNICAL SUPPORT SPECIALIST",
      "AUTOMATION DEVELOPER (RPA)",
      "DATABASE DESIGNER",
      "CLOUD SOLUTIONS ARCHITECT",
      "CYBERSECURITY ANALYST",
      "DATA ANALYST",
      "INTEGRATION ENGINEER",
      "SCRUM MASTER",
      "INSTRUCTOR / MENTOR",
    ],
    services: [
      {
        title: "Full Stack Development",
        description: "Building modern applications with React, Node.js, Laravel, and PHP",
      },
      {
        title: "IT Consulting & Support",
        description: "Specialized advisory in infrastructure, maintenance, and technology solutions.",
      },
      {
        title: "Software Architecture & API Design",
        description: "Implementation of secure, scalable, and efficient systems.",
      },
      {
        title: "Technical Project Management",
        description: "Leading development teams and delivering high-quality projects.",
      },
      {
        title: "Process Automation (RPA)",
        description: "Task optimization through scripts and bots with Python or N8N",
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive, modern interfaces focused on user experience",
      },
      {
        title: "WordPress Web Design",
        description: "Professional and manageable website development with WordPress, optimized for performance and SEO.",
      },
    ],
  },
  es: {
    sectionLabel: "SERVICIOS",
    subtitle: "Experiencia y tecnología a su servicio",
    title: "Áreas",
    titleEnd: "de Experiencia",
    roles: [
      "DESARROLLADOR FULL STACK",
      "ARQUITECTO DE SOFTWARE",
      "GESTOR DE PROYECTOS",
      "LÍDER TÉCNICO",
      "DISEÑADOR UI/UX",
      "INGENIERO DE SOFTWARE",
      "INGENIERO DEVOPS",
      "ADMINISTRADOR DE SISTEMAS",
      "CONSULTOR TI",
      "ESPECIALISTA EN SOPORTE TÉCNICO",
      "DESARROLLADOR DE AUTOMATIZACIÓN (RPA)",
      "DISEÑADOR DE BASES DE DATOS",
      "ARQUITECTO DE SOLUCIONES CLOUD",
      "ANALISTA DE CIBERSEGURIDAD",
      "ANALISTA DE DATOS",
      "INGENIERO DE INTEGRACIÓN",
      "SCRUM MASTER",
      "INSTRUCTOR / MENTOR",
    ],
    services: [
      {
        title: "Desarrollo Full Stack",
        description: "Creación de aplicaciones modernas con React, Node.js, Laravel y PHP",
      },
      {
        title: "Consultoría y Soporte TI",
        description: "Asesoría especializada en infraestructura, mantenimiento y soluciones tecnológicas.",
      },
      {
        title: "Arquitectura de Software y Diseño de APIs",
        description: "Implementación de sistemas seguros, escalables y eficientes.",
      },
      {
        title: "Gestión Técnica de Proyectos",
        description: "Liderazgo de equipos de desarrollo y entrega de proyectos de alta calidad.",
      },
      {
        title: "Automatización de Procesos (RPA)",
        description: "Optimización de tareas mediante scripts y bots con Python o N8N",
      },
      {
        title: "Diseño UI/UX",
        description: "Creación de interfaces intuitivas, modernas y centradas en la experiencia del usuario",
      },
      {
        title: "Diseño Web en WordPress",
        description: "Desarrollo de sitios web profesionales y administrables con WordPress, optimizados para rendimiento y posicionamiento.",
      },
    ],
  },
};

// --- SVG del Icono de Lápiz/Diseño ---
const DesignIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6 text-white" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

// --- Componente de Marcador de Posición para Íconos ---
const IconPlaceHolder: React.FC = () => {
  return (
    <div className="p-3 bg-black border border-white/50 rounded-md inline-block relative z-10 group-hover:border-green-500 transition-colors duration-300">
      <DesignIcon />
    </div>
  );
};

// --- Componente de Tarjeta de Servicio ---
const ServiceCard: React.FC<{ service: { title: string; description: string }, delay: number }> = ({ service, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      className="w-full bg-black border border-white/10 p-6 sm:p-8 rounded-xl relative shadow-lg group overflow-hidden"
    >
      {/* Detalle animado de borde verde */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1 bg-green-500"
        initial={{ y: "100%" }}
        whileHover={{ y: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-green-500/50 transition-colors duration-300 pointer-events-none" />

      <div className="mb-4 sm:mb-6 relative">
        <IconPlaceHolder />
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 sm:mb-3">{service.title}</h3>
      <p className="text-sm text-white/70 mb-6 sm:mb-8">
        {service.description}
      </p>
    </motion.div>
  );
};

// --- Componente Principal Services ---
const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(t.services.length - itemsPerPage);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleServices = t.services.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-black text-white min-h-screen">
      {/* Franja animada superior */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 w-full bg-green-500 py-3 sm:py-4 md:py-5 overflow-hidden z-20"
      >
        <motion.div
          className="whitespace-nowrap text-black font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "linear",
          }}
        >
          {t.roles.concat(t.roles).map((role, index) => (
            <span key={index} className="mx-6 sm:mx-10 md:mx-16">
              {role} *
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Contenido principal: Servicios */}
      <div className="pt-20 sm:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-start items-end mb-12 sm:mb-16"
        >
          <div className="relative">
            <h1 className="hidden sm:block absolute -top-8 md:-top-10 left-0 text-6xl md:text-8xl lg:text-9xl font-extrabold text-white/5 opacity-5 tracking-widest pointer-events-none">
              {t.sectionLabel}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-white/70 mb-1 relative z-10">
              {t.subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold relative z-10">
              <span className="text-green-500">{t.title}</span> {t.titleEnd}
            </h2>
          </div>
        </motion.div>

        {/* Contenedor de Carrusel con 3 tarjetas visibles */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          {/* Flecha izquierda */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full transition-colors z-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </motion.button>

          {/* Grid de servicios */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleServices.map((service, index) => (
              <ServiceCard 
                key={currentIndex + index} 
                service={service} 
                delay={0.4 + index * 0.1} 
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full transition-colors z-30"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </motion.button>
        </div>

        {/* Indicador de página */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-500" : "bg-white/30"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;