import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cert1 from '../assets/certificados/3.png';
import cert2 from '../assets/certificados/4.png';
import cert3 from '../assets/certificados/1.png';
import cert4 from '../assets/certificados/2.png';
import cert5 from '../assets/certificados/5.png';
import cert6 from '../assets/certificados/7.png';
import cert7 from '../assets/certificados/8.png';
import cert8 from '../assets/certificados/6.png';
// --- Traducciones ---
const translations = {
  en: {
    backgroundText: "CERTIFICATIONS",
    title: "My professional",
    titleHighlight: "certifications",
    goToCertification: "Go to certification",
    certifications: [
      {
    title: "Professional  Title in Software Development",
    issuer: "SENATI (Republic of Peru)",
    date: "2025",
        image: cert1,
    description: "Comprehensive training in software development, covering programming, databases, web development, and best practices in software engineering."

  },
  {
    title: "SCRUM FOUNDATION PROFESSIONAL CERTIFICATION (SFPC™)",
    issuer: "CertiProf® Professional Knowledge",
    date: "2023",
      image: cert2,
    description: "Certification validating fundamental knowledge of Scrum and agile project management, including roles, artifacts, and events."
  },
  {
    title: "Professional Scrum Course",
    issuer: "Platzi",
    date: "2024 (12 hours)",
     image: cert3,
    description: "Practical training in agile methodologies, project management with Scrum, and collaborative planning tools."
  },
  {
    title: "Certificate: Cloud Computing with Microsoft Azure & AWS",
    issuer: "TECSUP (CPE - Courses and Extension Programs)",
    date: "2024 (36 hours)",
      image: cert4,
    description: "Knowledge in cloud computing, deploying applications and services on Microsoft Azure and AWS, including resource management and security."
  },
  {
    title: "Certificate of Completion: Java Foundations Final Exam",
    issuer: "Oracle Academy",
    date: "2023",
     image: cert5,

    description: "Fundamentals of Java programming, algorithm development, and handling basic data structures."
  },
  {
    title: "Certificate of Completion: Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2022",
         image: cert6,
    description: "Basic cybersecurity concepts, data protection, and best practices in network and system security."
  },
  {
    title: "Certificate of Completion: Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2022",
     image: cert7,
    description: "Introduction to the Internet of Things, sensors, connected devices, and data communication."
  },
  {
    title: "Certificate of Completion: Get Connected",
    issuer: "Cisco Networking Academy",
    date: "2022",
     image: cert8,
    description: "Foundations of networking, connectivity, and data communication, focused on practical skills in basic networking."
  }
    ],
  },
  es: {
    backgroundText: "CERTIFICACIONES",
    title: "Mis certificaciones",
    titleHighlight: "profesionales",
    goToCertification: "Ir a certificación",
    certifications: [
       {
    title: "Título Profesional  en Desarrollo de Software",
    issuer: "SENATI (República del Perú)",
    date: "2024",
     image: cert1,
    description: "Formación integral en desarrollo de software, abarcando programación, bases de datos, desarrollo web y buenas prácticas de ingeniería de software."
  },
  {
    title: "SCRUM FOUNDATION PROFESSIONAL CERTIFICATION (SFPC™)",
    issuer: "CertiProf® Professional Knowledge",
    date: "2023",
     image: cert2,
    description: "Certificación que valida conocimientos fundamentales de Scrum y gestión ágil de proyectos, incluyendo roles, artefactos y eventos."
  },
  {
    title: "Curso Profesional de Scrum",
    issuer: "Platzi",
    date: "2024 (12 horas)",
     image: cert3,
    description: "Capacitación práctica en metodologías ágiles, gestión de proyectos con Scrum y herramientas de planificación colaborativa."
  },
  {
    title: "Certificado: Cloud Computing con Microsoft Azure & AWS",
    issuer: "TECSUP (CPE - Cursos y Programas de Extensión)",
    date: "2024 (36 horas)",
     image: cert4,
    description: "Conocimientos en computación en la nube, despliegue de aplicaciones y servicios en Microsoft Azure y AWS, incluyendo gestión de recursos y seguridad."
  },
  {
    title: "Certificado de Aprobación de Examen Final Java Foundations",
    issuer: "Oracle Academy",
    date: "2023",
     image: cert5,
    description: "Fundamentos de programación en Java, desarrollo de algoritmos y manejo de estructuras de datos básicas."
  },
  {
    title: "Certificado de finalización del curso: Introducción a la Seguridad Cibernética",
    issuer: "Cisco Networking Academy",
    date: "2022",
     image: cert6,
    description: "Conceptos básicos de ciberseguridad, protección de datos y buenas prácticas de seguridad en redes y sistemas."
  },
  {
    title: "Certificado de finalización del curso: Introducción a IoT",
    issuer: "Cisco Networking Academy",
    date: "2022",
    image: cert7,
    description: "Introducción a Internet de las Cosas, sensores, dispositivos conectados y comunicación de datos."
  },
  {
    title: "Certificado de finalización del curso: Get Connected",
    issuer: "Cisco Networking Academy",
    date: "2022",
    image: cert8,
    description: "Fundamentos de redes, conectividad y comunicación de datos, orientado a habilidades prácticas en redes básicas."
  }
    ],
  },
};

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleIndexChange = (newIndex) => {
    if (isTransitioning) return;
    
    setDirection(newIndex > activeIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const getAnimationClass = (index) => {
    if (!isTransitioning) {
      return 'opacity-100 translate-y-0';
    }
    
    if (direction === 'next') {
      return index === 0 
        ? 'opacity-0 -translate-y-full' 
        : 'opacity-0 translate-y-full';
    } else {
      return index === 0 
        ? 'opacity-0 translate-y-full' 
        : 'opacity-0 -translate-y-full';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Text */}
      <div className={`absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-gray-800 opacity-10 whitespace-nowrap tracking-tight leading-none">
          {t.backgroundText}
        </h2>
      </div>

      {/* Header */}
      <div className={`text-center mb-12 sm:mb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {t.title} 
          <br />
          <span className="text-green-500">{t.titleHighlight}</span>
        </h1>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 relative">
          {t.certifications.slice(activeIndex, activeIndex + 2).map((cert, index) => (
            <div 
              key={`${activeIndex}-${index}`}
              className={`bg-zinc-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-500 ${getAnimationClass(index)}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div 
                  className="relative group cursor-pointer w-full sm:w-20 flex-shrink-0" 
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full sm:w-20 h-48 sm:h-20 rounded-lg object-cover border-2 border-zinc-700 transition-all duration-300 group-hover:border-green-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-6 h-6 sm:w-5 sm:h-5 text-white animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 transition-colors hover:text-green-500">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <span className="inline-block bg-green-500 text-black text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                    {cert.date}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className={`flex justify-center gap-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t.certifications.slice(0, -1).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndexChange(index)}
              disabled={isTransitioning}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-500 hover:bg-green-400 ${
                activeIndex === index ? 'bg-green-500 w-6 sm:w-8 shadow-lg shadow-green-500/50' : 'bg-gray-600 w-2.5 sm:w-3'
              }`}
              aria-label={`${t.goToCertification} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ${
            selectedImage ? 'bg-opacity-90' : 'bg-opacity-0'
          }`}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-in fade-in zoom-in duration-500">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 sm:-top-12 right-0 text-white text-3xl sm:text-4xl hover:text-green-500 hover:rotate-90 transition-all duration-300"
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate preview" 
              className="w-full h-auto rounded-lg shadow-2xl shadow-green-500/30 border-2 border-green-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;