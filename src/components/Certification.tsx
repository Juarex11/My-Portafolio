import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Traducciones ---
const translations = {
  en: {
    backgroundText: "CERTIFICATIONS",
    title: "My professional",
    titleHighlight: "certifications",
    goToCertification: "Go to certification",
    certifications: [
      {
        title: "Advanced React Development",
        issuer: "Meta",
        date: "2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        description: "Comprehensive certification covering advanced React patterns, hooks, performance optimization, and modern state management techniques."
      },
      {
        title: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
        description: "Professional certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS."
      },
      {
        title: "UI/UX Design Professional",
        issuer: "Google",
        date: "2023",
        image: "https://images.unsplash.com/photo-1616499452765-c37a6cd4de37?w=600&h=400&fit=crop",
        description: "Certificate in user interface and experience design, covering design thinking, prototyping, and user research methodologies."
      },
      {
        title: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2022",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
        description: "Comprehensive program covering frontend and backend development, databases, APIs, and modern web technologies."
      },
      {
        title: "Certified Scrum Master",
        issuer: "Scrum Alliance",
        date: "2022",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        description: "Professional certification in agile methodologies, scrum framework, and team facilitation best practices."
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
        title: "Desarrollo Avanzado de React",
        issuer: "Meta",
        date: "2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        description: "Certificación integral que cubre patrones avanzados de React, hooks, optimización de rendimiento y técnicas modernas de gestión de estado."
      },
      {
        title: "Arquitecto de Soluciones AWS",
        issuer: "Amazon Web Services",
        date: "2023",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
        description: "Certificación profesional que demuestra experiencia en diseño e implementación de sistemas escalables y de alta disponibilidad en AWS."
      },
      {
        title: "Profesional en Diseño UI/UX",
        issuer: "Google",
        date: "2023",
        image: "https://images.unsplash.com/photo-1616499452765-c37a6cd4de37?w=600&h=400&fit=crop",
        description: "Certificado en diseño de interfaz y experiencia de usuario, cubriendo pensamiento de diseño, prototipado y metodologías de investigación."
      },
      {
        title: "Desarrollo Web Full Stack",
        issuer: "freeCodeCamp",
        date: "2022",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
        description: "Programa integral que cubre desarrollo frontend y backend, bases de datos, APIs y tecnologías web modernas."
      },
      {
        title: "Scrum Master Certificado",
        issuer: "Scrum Alliance",
        date: "2022",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
        description: "Certificación profesional en metodologías ágiles, framework scrum y mejores prácticas de facilitación de equipos."
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