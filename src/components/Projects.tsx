import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";

import po1 from "../assets/p1/p1.png";
import po2 from "../assets/p1/p2.png";
import po3 from "../assets/p1/p3.png";
import po4 from "../assets/p1/p4.png";

import po5 from "../assets/p2/p21.png";
import po6 from "../assets/p2/p22.png";
import po7 from "../assets/p2/p23.png";
import po8 from "../assets/p2/p24.png";

import po9 from "../assets/p3/p1.png";
import po10 from "../assets/p3/p2.png";
import po11 from "../assets/p3/p3.png";
import po12 from "../assets/p3/p4.png";

import po13 from "../assets/p4/p1.png";
import po14 from "../assets/p4/p2.png";
import po15 from "../assets/p4/p3.png";
import po16 from "../assets/p4/p4.png";

// --- Traducciones ---
const translations = {
  en: {
    sectionTitle: "Behind every line",
    sectionSubtitle: "there are real results",
    projectDetails: "PROJECT DETAILS",
    description: "Description",
    keyFeatures: "Key Features",
    feature1: "Fully responsive design across all devices",
    feature2: "Modern UI/UX with smooth animations",
    feature3: "Optimized performance and loading times",
    feature4: "Secure and scalable architecture",
    
    viewDemo: "View Live Demo",
    sourceCode: "Source Code",
    viewFullSize: "View Full Size",
    viewDetails: "View project details",
    projects: {
      1: {
        title: "Kobra2 – Integrated Collection and Operational Management System",
        shortDescription: "Web-based system built under the MVC model using PHP, MySQL, and Bootstrap. Includes a reporting dashboard, collection management, user role control, and an internal ticketing module.",
        longDescription: "Kobra2 is a comprehensive collection and administrative management platform designed to visualize key metrics, generate comparative reports, and streamline collection processes. Developed using the MVC model with PHP, MySQL, and Bootstrap, it features an interactive dashboard, role-based user management, bulk Excel data import/export, and an internal ticketing system for communication between advisors and administrators.",
      },
     2: {
  title: "Sales 365 – Call Center Analytics and Campaign Management System",
  shortDescription: "An advanced web platform built with the MVC model using PHP, MySQL, Bootstrap, JavaScript, jQuery, and Chart.js, designed for call centers. It enables the management of customized campaigns, sales registration, role administration, and the generation of visual reports through interactive dashboards optimized for large data volumes.",
  longDescription: "Sales 365 is a professional commercial management system developed for WIN Call Center, focused on campaign administration, sales tracking, and performance analysis through dynamic charts. Built with PHP, it combines performance, scalability, and a modern interface. The system includes an analytical dashboard displaying real-time metrics, statistics, and reports, allowing users to quickly filter and analyze massive datasets. It features a campaign management module that allows the creation of customizable forms with various field types (text, number, date, multiple choice, etc.), as well as the configuration of roles, permissions, and IP-based access control. It also integrates audio management, collection and sales supervision, agent grouping by rooms, management of call outcomes (answered, rejected, pending), and leader-level control—offering a robust, adaptable, and fully scalable solution."
},
      3: {
  title: "Website Design in WordPress – Responsive and Modern Sites",
  shortDescription: "Development of professional websites in WordPress using Elementor, custom plugins, and designs created in Figma, tailored to various industries and business needs.",
  longDescription: "Design and development of responsive, modern, and fully manageable websites powered by WordPress. Each project is built with Elementor and a carefully selected set of plugins to ensure functionality, performance, and visual customization. All layouts are first designed in Figma, ensuring aesthetic consistency and a professional user experience. Projects have been developed for multiple sectors, including design, agriculture, real estate, e-learning, and industrial businesses, with each site tailored to the visual identity and goals of each client."
},
      4: {
       title: "Atipay – Collaborative Investment Platform",
  shortDescription: "Led a team in the development and architecture of a comprehensive investment platform, including affiliate management and financial transactions, using React, Tailwind CSS for the frontend, and Laravel for the backend with API integrations.",
  longDescription: "As Team Lead at Atipay, I oversaw the design, development, and implementation of a full-featured collaborative investment platform. The system handles affiliates, investment tracking, and financial transactions, integrating APIs to meet client requirements. I coordinated the team using PMI-based project management methodologies, conducting regular meetings, tracking progress, and ensuring timely delivery. My role combined technical oversight with team leadership, ensuring that both frontend (React, Tailwind CSS) and backend (Laravel) components were scalable, secure, and aligned with client expectations.",
      },
    },
  },
  es: {
    sectionTitle: "Detrás de cada línea",
    sectionSubtitle: "hay resultados reales",
    projectDetails: "DETALLES DEL PROYECTO",
    description: "Descripción",
    keyFeatures: "Características Clave",
    feature1: "Diseño totalmente responsivo en todos los dispositivos",
    feature2: "UI/UX moderno con animaciones fluidas",
    feature3: "Rendimiento optimizado y tiempos de carga rápidos",
    feature4: "Arquitectura segura y escalable",
    viewDemo: "Ver Demo en Vivo",
    sourceCode: "Código Fuente",
    viewFullSize: "Ver Tamaño Completo",
    viewDetails: "Ver detalles del proyecto",
    projects: {
      1: {
        title: "Kobra2 – Sistema Integral de Cobranza y Gestión Operativa",
        shortDescription: "Sistema web desarrollado bajo el modelo MVC con PHP, MySQL y Bootstrap. Incluye dashboard de reportes, control de cobranzas, gestión de usuarios y módulo interno de tickets.",
        longDescription: "Kobra2 es una plataforma integral de cobranza y análisis administrativo que permite visualizar métricas clave, generar reportes comparativos y gestionar cobranzas de forma eficiente. Desarrollada bajo el modelo MVC con PHP, MySQL y Bootstrap, ofrece un dashboard interactivo, control de usuarios por roles, carga masiva desde Excel y un sistema interno de tickets para comunicación entre asesores y administradores.",
      },
     2: {
        title: "Sales 365 – Sistema Graficos Call Center y Administración de Campañas",
        shortDescription: "Plataforma web avanzada desarrollada bajo el modelo MVC con PHP, MySQL, Bootstrap, JavaScript, jQuery y Chart.js, diseñada para call centers. Permite gestionar campañas personalizadas, registrar ventas, administrar roles y generar reportes visuales mediante dashboards interactivos optimizados para grandes volúmenes de datos.",
        longDescription: "Sales 365 es un sistema profesional de gestión comercial creado para WIN Call Center, enfocado en la administración de campañas, registro de ventas y análisis de resultados mediante gráficos dinámicos. Desarrollado con PHP combina rendimiento, escalabilidad y una interfaz moderna. El sistema cuenta con un dashboard analítico que muestra métricas, estadísticas y reportes en tiempo real, permitiendo filtrar información masiva con rapidez. Incluye un módulo de gestión de campañas donde se pueden crear formularios personalizados con distintos tipos de campos (texto, número, fecha, selección múltiple, etc.), así como configurar roles, permisos y accesos por IP. También integra la gestión de audios, supervisión de cobranzas y ventas, agrupación de asesores por salas, administración de motivos (atendida, rechazada, pendiente) y control por líderes, ofreciendo una solución robusta, adaptable y totalmente escalable.",
      },
      3: {
        title: "Diseño de Webs en WordPress – Sitios Responsivos y Modernos",
        shortDescription: "Desarrollo de sitios web profesionales en WordPress utilizando Elementor, plugins personalizados y diseños creados en Figma, adaptados a diferentes sectores y necesidades empresariales.",
        longDescription: "Diseño y desarrollo de sitios web responsivos, modernos y totalmente administrables mediante WordPress. Cada proyecto se construye con Elementor y una selección optimizada de plugins para ofrecer funcionalidad, rendimiento y personalización visual. Los diseños son previamente elaborados en Figma, garantizando coherencia estética y experiencia de usuario profesional. Se han desarrollado proyectos para diversos rubros, incluyendo diseño, agricultura, inmobiliarias, aulas virtuales, industrias y más, adaptando cada sitio a la identidad visual y objetivos de cada cliente.",
      },
      4: {
        title: "Atipay – Plataforma Integral de Inversiones Colaborativas",
  shortDescription: "Lideré un equipo en el desarrollo y arquitectura de una plataforma integral de inversiones, incluyendo gestión de afiliados y transacciones financieras, utilizando React y Tailwind CSS en el frontend, y Laravel en el backend con integración de APIs.",
  longDescription: "Como líder de equipo en Atipay, supervisé el diseño, desarrollo e implementación de una plataforma completa de inversiones colaborativas. El sistema gestiona afiliados, seguimiento de inversiones y transacciones financieras, integrando APIs según los requerimientos del cliente. Coordiné al equipo aplicando metodologías de gestión basadas en PMI, realizando reuniones periódicas, seguimiento de avances y asegurando entregas a tiempo. Mi rol combinó supervisión técnica con liderazgo de equipo, garantizando que tanto el frontend (React, Tailwind CSS) como el backend (Laravel) fueran escalables, seguros y cumplieran con las expectativas del cliente.",
      },
    },
  },
};

// --- Iconos ---
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

// --- Datos de los 4 Proyectos ---
const projectsData = [
  {
    id: 1,
    techStack: ["PHP", "Bootstrap", "Chart.js", "MySQL "],
    previewImage: p1,
    modalImages: [po1, po2, po3, po4],
  },
  {
    id: 2,
   techStack: ["PHP", "Bootstrap", "JSON", "MySQL ", "CPanel "],
    previewImage: p2,
    modalImages: [po5, po6, po7, po8],
  },
  {
    id: 3,
    techStack: ["WordPress", "Elementor", "Figma", "SEO"],
    previewImage: p3,
   modalImages: [po9, po10, po11, po12],
  },
  {
    id: 4,
    techStack: ["React", "Laravel", "AWS", "Agile / Scrum", "API REST"],
    previewImage: p4,
   modalImages: [po13, po14, po15, po16],
  },
];

// --- Variantes de Animación ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

import type { Variants } from "framer-motion";

const modalVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 100
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 100,
    transition: { duration: 0.2 }
  },
};

// --- Componente de Imagen a Pantalla Completa ---
const FullscreenImage = ({ src, alt, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-green-500 transition z-10 p-2 bg-black/50 rounded-full"
        aria-label="Cerrar imagen"
      >
        <CloseIcon />
      </button>
      
      <motion.img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

// --- Componente del Modal del Proyecto ---
const ProjectModal = ({ project, onClose }) => {
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);
  const { language } = useLanguage();
  const t = translations[language];
  const projectData = t.projects[project.id];

  const openFullscreen = (src, index) => {
    setFullscreenImage({ src, alt: `Vista previa ${index + 1}` });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-neutral-900 w-full max-w-6xl h-auto max-h-[95vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl border border-green-500/30 shadow-2xl shadow-green-500/20 overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-white/50 hover:text-green-500 transition z-10 p-2"
              aria-label="Cerrar modal"
            >
              <CloseIcon />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Columna IZQUIERDA: Descripción */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-green-500 font-bold text-xs sm:text-sm tracking-widest mb-2">{t.projectDetails}</p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight">{projectData.title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-green-500/20 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-green-500">{t.description}</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {projectData.longDescription}
                  </p>
                </div>
                
                <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-green-500">{t.keyFeatures}</h3>
                  <ul className="space-y-2 text-white/70 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                      <span>{t.feature1}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                      <span>{t.feature2}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                      <span>{t.feature3}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                      <span>{t.feature4}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Columna DERECHA: 4 Imágenes con Click para Pantalla Completa */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 h-fit">
                {project.modalImages.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-lg overflow-hidden border border-white/10 hover:border-green-500/50 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring' as const, stiffness: 300 }}
                    onClick={() => openFullscreen(src, index)}
                  >
                    <img 
                      src={src} 
                      alt={`Vista previa ${index + 1}`}
                      className="w-full h-full object-cover aspect-square" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm font-bold px-2 text-center">
                        {t.viewFullSize}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal de Imagen a Pantalla Completa */}
      <AnimatePresence>
        {fullscreenImage && (
          <FullscreenImage 
            src={fullscreenImage.src} 
            alt={fullscreenImage.alt} 
            onClose={closeFullscreen} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Componente de Tarjeta de Proyecto ---
const ProjectCard = ({ project, index, onOpenModal }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const projectData = t.projects[project.id];
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      onClick={() => onOpenModal(project)}
      className="bg-neutral-900 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 cursor-pointer group mb-6 sm:mb-8 lg:mb-10 hover:border-green-500/30 transition-colors"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring' as const, stiffness: 300 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`w-full lg:w-3/5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <img 
          src={project.previewImage} 
          alt={projectData.title}
          className="w-full h-auto rounded-lg shadow-2xl" 
        />
      </div>

      <div className={`w-full lg:w-2/5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-green-500/10 text-green-400 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{projectData.title}</h3>
        <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">{projectData.shortDescription}</p>
        <div 
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500 transition-colors pointer-events-none"
          aria-label={t.viewDetails}
        >
          <ArrowIcon />
        </div>
      </div>
    </motion.div>
  );
};

// --- Componente Principal ---
const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8 sm:mb-10 lg:mb-12">
          <div className="relative">
            <h1 className="hidden sm:block absolute -top-6 md:-top-10 left-0 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white/5 opacity-5 tracking-widest pointer-events-none">
              PORTFOLIO
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold relative z-10 leading-tight">
              {t.sectionTitle} <br /> 
              <span className="text-green-500">{t.sectionSubtitle}</span>
            </h2>
          </div>
        </div>

        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            onOpenModal={openModal}
          />
        ))}

      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;