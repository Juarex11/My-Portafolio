import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";

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
    title: "Smart Financial Dashboard for Digital Management",
    shortDescription: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
    longDescription: "This project was a deep dive into modern fintech UI/UX. The goal was to create a highly intuitive and responsive interface that could handle complex data visualizations. We focused on component-based architecture using React, data visualization with Chart.js, and a sleek, modern feel using MUI's component library.",
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
    title: "E-Commerce Platform with AI Recommendations",
    shortDescription: "A full-stack e-commerce solution with machine learning-powered product recommendations and seamless checkout experience.",
    longDescription: "Built with Next.js and integrated with Stripe for payments, this platform features real-time inventory management, AI-driven product suggestions, and a highly optimized mobile-first design. The recommendation engine uses collaborative filtering to suggest products based on user behavior.",
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
    title: "Real-Time Collaboration Tool",
    shortDescription: "A collaborative workspace for remote teams with live editing, video calls, and project management features.",
    longDescription: "This application combines WebRTC for real-time video communication, WebSocket for live document editing, and a comprehensive task management system. Built with scalability in mind, it supports thousands of concurrent users with minimal latency.",
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
    title: "Healthcare Management System",
    shortDescription: "A comprehensive platform for managing patient records, appointments, and telemedicine consultations with HIPAA compliance.",
    longDescription: "Designed for healthcare providers, this system streamlines patient management with secure data storage, appointment scheduling, prescription management, and integrated video consultations. Security and privacy are at the core with end-to-end encryption and full HIPAA compliance.",
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
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="bg-neutral-900 w-full max-w-6xl h-auto max-h-[90vh] rounded-2xl border border-green-500/30 shadow-2xl shadow-green-500/20 overflow-y-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8 md:p-12">
          {/* Botón de Cierre */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-white/50 hover:text-green-500 transition z-10"
            aria-label="Cerrar modal"
          >
            <CloseIcon />
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Columna IZQUIERDA: Descripción Detallada */}
            <div className="space-y-6">
              <div>
                <p className="text-green-500 font-bold text-sm tracking-widest mb-2">PROJECT DETAILS</p>
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">{project.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-green-500">Description</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              
              <div className="space-y-3 pt-4">
                <h3 className="text-xl font-bold text-green-500">Key Features</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Fully responsive design across all devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Modern UI/UX with smooth animations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Optimized performance and loading times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Secure and scalable architecture</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4 pt-6">
                <a 
                  href="#" 
                  className="bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30"
                >
                  View Live Demo
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-500 hover:text-black transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Columna DERECHA: 4 Imágenes Pequeñas */}
            <div className="grid grid-cols-2 gap-4 h-fit">
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
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold">
                      View Full Size
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
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      onClick={() => onOpenModal(project)}
      className="bg-neutral-900 rounded-2xl border border-white/10 p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 cursor-pointer group mb-10"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Imagen (orden cambia según el índice) */}
      <div className={`w-full lg:w-3/5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <img 
          src={project.previewImage} 
          alt={project.title}
          className="w-full h-auto rounded-lg shadow-2xl" 
        />
      </div>

      {/* Contenido (orden cambia según el índice) */}
      <div className={`w-full lg:w-2/5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-white/70 mb-6">{project.shortDescription}</p>
        <div 
          className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-green-500 group-hover:text-black group-hover:border-green-500 transition-colors pointer-events-none"
          aria-label="Ver detalles del proyecto"
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

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="flex justify-between items-center mb-12">
          <div className="relative">
            <h1 className="absolute -top-10 left-0 text-7xl font-extrabold text-white/5 opacity-5 tracking-widest pointer-events-none">
              PORTFOLIO
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
  Detrás de cada línea <br /> hay <span className="text-green-500">resultados reales</span>
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