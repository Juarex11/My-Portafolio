import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";

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
        title: "Smart Financial Dashboard for Digital Management",
        shortDescription: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
        longDescription: "This project was a deep dive into modern fintech UI/UX. The goal was to create a highly intuitive and responsive interface that could handle complex data visualizations. We focused on component-based architecture using React, data visualization with Chart.js, and a sleek, modern feel using MUI's component library.",
      },
      2: {
        title: "E-Commerce Platform with AI Recommendations",
        shortDescription: "A full-stack e-commerce solution with machine learning-powered product recommendations and seamless checkout experience.",
        longDescription: "Built with Next.js and integrated with Stripe for payments, this platform features real-time inventory management, AI-driven product suggestions, and a highly optimized mobile-first design. The recommendation engine uses collaborative filtering to suggest products based on user behavior.",
      },
      3: {
        title: "Real-Time Collaboration Tool",
        shortDescription: "A collaborative workspace for remote teams with live editing, video calls, and project management features.",
        longDescription: "This application combines WebRTC for real-time video communication, WebSocket for live document editing, and a comprehensive task management system. Built with scalability in mind, it supports thousands of concurrent users with minimal latency.",
      },
      4: {
        title: "Healthcare Management System",
        shortDescription: "A comprehensive platform for managing patient records, appointments, and telemedicine consultations with HIPAA compliance.",
        longDescription: "Designed for healthcare providers, this system streamlines patient management with secure data storage, appointment scheduling, prescription management, and integrated video consultations. Security and privacy are at the core with end-to-end encryption and full HIPAA compliance.",
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
        title: "Dashboard Financiero Inteligente para Gestión Digital",
        shortDescription: "Un dashboard moderno y fácil de usar para rastrear ingresos, gastos, análisis y detalles de tarjetas con transferencias rápidas y resúmenes de actividad.",
        longDescription: "Este proyecto fue una inmersión profunda en UI/UX fintech moderno. El objetivo era crear una interfaz altamente intuitiva y responsiva que pudiera manejar visualizaciones de datos complejas. Nos enfocamos en arquitectura basada en componentes usando React, visualización de datos con Chart.js y una sensación moderna y elegante usando la librería de componentes de MUI.",
      },
      2: {
        title: "Plataforma E-Commerce con Recomendaciones IA",
        shortDescription: "Una solución e-commerce full-stack con recomendaciones de productos impulsadas por aprendizaje automático y experiencia de checkout fluida.",
        longDescription: "Construida con Next.js e integrada con Stripe para pagos, esta plataforma cuenta con gestión de inventario en tiempo real, sugerencias de productos impulsadas por IA y un diseño mobile-first altamente optimizado. El motor de recomendaciones utiliza filtrado colaborativo para sugerir productos basados en el comportamiento del usuario.",
      },
      3: {
        title: "Herramienta de Colaboración en Tiempo Real",
        shortDescription: "Un espacio de trabajo colaborativo para equipos remotos con edición en vivo, videollamadas y funciones de gestión de proyectos.",
        longDescription: "Esta aplicación combina WebRTC para comunicación de video en tiempo real, WebSocket para edición de documentos en vivo y un sistema completo de gestión de tareas. Construida pensando en escalabilidad, soporta miles de usuarios simultáneos con latencia mínima.",
      },
      4: {
        title: "Sistema de Gestión de Salud",
        shortDescription: "Una plataforma completa para gestionar registros de pacientes, citas y consultas de telemedicina con cumplimiento HIPAA.",
        longDescription: "Diseñado para proveedores de salud, este sistema agiliza la gestión de pacientes con almacenamiento seguro de datos, programación de citas, gestión de recetas y consultas de video integradas. La seguridad y privacidad están en el núcleo con cifrado de extremo a extremo y cumplimiento total de HIPAA.",
      },
    },
  },
};

// --- Icono de Flecha (para la tarjeta) ---
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

// --- Icono de Cierre (para el modal) ---
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

// --- Datos de los 4 Proyectos ---
const projectsData = [
  {
    id: 1,
    techStack: ["React.js", "MUI CSS", "Chart.js"],
    previewImage: p1,
    modalImages: [
      "https://via.placeholder.com/600x400/333333/ffffff?text=P1+Image+1",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P1+Image+2",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P1+Image+3",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P1+Image+4",
    ],
  },
  {
    id: 2,
    techStack: ["Next.js", "Node.js", "TensorFlow", "Stripe"],
    previewImage: p2,
    modalImages: [
      "https://via.placeholder.com/600x400/333333/ffffff?text=P2+Image+1",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P2+Image+2",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P2+Image+3",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P2+Image+4",
    ],
  },
  {
    id: 3,
    techStack: ["Vue.js", "WebRTC", "Socket.io", "MongoDB"],
    previewImage: p3,
    modalImages: [
      "https://via.placeholder.com/600x400/333333/ffffff?text=P3+Image+1",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P3+Image+2",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P3+Image+3",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P3+Image+4",
    ],
  },
  {
    id: 4,
    techStack: ["Angular", "PostgreSQL", "AWS", "WebRTC"],
    previewImage: p4,
    modalImages: [
      "https://via.placeholder.com/600x400/333333/ffffff?text=P4+Image+1",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P4+Image+2",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P4+Image+3",
      "https://via.placeholder.com/600x400/333333/ffffff?text=P4+Image+4",
    ],
  },
];

// --- Variantes de Animación para el Modal ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
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

// --- Componente del Modal del Proyecto ---
const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const projectData = t.projects[project.id];

  return (
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
        <div  className="relative p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Botón de Cierre */}
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-white/50 hover:text-green-500 transition z-10 p-2"
            aria-label="Cerrar modal"
          >
            <CloseIcon />
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Columna IZQUIERDA: Descripción Detallada */}
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
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <a 
                  href="#" 
                  className="bg-green-500 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30 text-center text-sm sm:text-base"
                >
                  {t.viewDemo}
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-500 hover:text-black transition-colors text-center text-sm sm:text-base"
                >
                  {t.sourceCode}
                </a>
              </div>
            </div>

            {/* Columna DERECHA: 4 Imágenes Pequeñas */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 h-fit">
              {project.modalImages.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-lg overflow-hidden border border-white/10 hover:border-green-500/50 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Imagen (orden cambia según el índice) */}
      <div id="proyects" className={`w-full lg:w-3/5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <img 
          src={project.previewImage} 
          alt={projectData.title}
          className="w-full h-auto rounded-lg shadow-2xl" 
        />
      </div>

      {/* Contenido (orden cambia según el índice) */}
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

// --- Componente Principal de la Sección del Portafolio ---
const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
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

        {/* Lista de Proyectos (alternando posición de imagen) */}
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            onOpenModal={openModal}
          />
        ))}

      </div>

      {/* Modal del Proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;