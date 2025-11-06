import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Traducciones ---
const translations = {
  en: {
    sectionLabel: "Education and Experience",
    title: "My",
    titleHighlight: "Academic",
    titleAnd: "and",
    titleEnd: "Professional Journey",
    educationTitle: "Education",
    workTitle: "Work Experience",
    education: [
      {
        institution: "Universidad Cientifica del Sur",
        degree: "Project Management (PMI)",
        period: "2025 - 2026"
      },
      {
        institution: "Universidad Nacional Mayor de San Marcos",
        degree: "Language Center - English",
        period: "2022 - 2023"
      },
      {
        institution: "SENATI Institute",
        degree: "Software Development",
        period: "2022 - 2024"
      },
      {
        institution: "CERTUS Institute",
        degree: "Software Design and Structure",
        period: "2021 - 2022"
      },
      {
        institution: "CIBERTEC Institute",
        degree: "IT Essentials: PC Hardware and Software",
        period: "2020 - 2021"
      }
    ],
    workExperience: [
      {
        company: "Juarex Technology Group SAC",
        position: "Operations Leader",
        period: "-"
      },
      {
        company: "Comunik2 Peru SAC",
        position: "Full Stack - IT Area Supervisor",
        period: "2025"
      },
      {
        company: "Delima Norte Comunicaciones SAC",
        position: "IT Specialist",
        period: "2024"
      },
      {
        company: "Comunik2 Peru SAC",
        position: "IT Support Analyst",
        period: "2024"
      },
      {
        company: "Sempiterno Group SAC",
        position: "RPA Developer",
        period: "2023"
      }
    ],
  },
  es: {
    sectionLabel: "Educación y Experiencia",
    title: "Mi",
    titleHighlight: "Trayectoria ",
    titleAnd: "",
    titleEnd: "Académica y Profesional",
    educationTitle: "Educación",
    workTitle: "Experiencia Laboral",
    education: [
      {
        institution: "Universidad Cientifica del Sur",
        degree: "Gestión de Proyectos (PMI)",
        period: "2025 - 2026"
      },
      {
        institution: "Universidad Nacional Mayor de San Marcos",
        degree: "Centro de Idiomas - Inglés",
        period: "2022 - 2023"
      },
      {
        institution: "Instituto SENATI",
        degree: "Desarrollo de Software",
        period: "2022 - 2024"
      },
      {
        institution: "Instituto CERTUS",
        degree: "Diseño y Estructura de Software",
        period: "2021 - 2022"
      },
      {
        institution: "Instituto CIBERTEC",
        degree: "IT Essentials: Hardware y Software de PC",
        period: "2020 - 2021"
      }
    ],
    workExperience: [
      {
        company: "Juarex Technology Group SAC",
        position: "Líder de Operaciones",
        period: "-"
      },
      {
        company: "Comunik2 Perú SAC",
        position: "Full Stack - Supervisor Área TI",
        period: "2025"
      },
      {
        company: "Delima Norte Comunicaciones SAC",
        position: "Especialista Informático",
        period: "2024"
      },
      {
        company: "Comunik2 Perú SAC",
        position: "Analista de Soporte TI",
        period: "2024"
      },
      {
        company: "Sempiterno Group SAC",
        position: "RPA Developer",
        period: "2023"
      }
    ],
  },
};

const EducationWork = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="experience" className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Header */}
      <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 ">
          {t.sectionLabel}
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {t.title} <span className="text-green-500">{t.titleHighlight}</span>
          {t.titleAnd && <><br /><span className="text-green-500">{t.titleAnd} </span></>}
          {t.titleEnd}
        </h1>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
        {/* Education Section */}
        <div className={`bg-zinc-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-zinc-800 transition-all duration-700 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
             style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-green-500 p-2.5 sm:p-3 rounded-full animate-bounce">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{t.educationTitle}</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {t.education.map((item, index) => (
              <div key={index} 
                   className={`border-l-4 border-green-500 pl-4 sm:pl-6 pb-4 sm:pb-6 last:pb-0 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 transition-all duration-500 hover:translate-x-2 hover:border-l-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                   style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{item.institution}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{item.degree}</p>
                </div>
                <span className="bg-green-500 text-black text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full whitespace-nowrap w-fit transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className={`bg-zinc-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-zinc-800 transition-all duration-700 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
             style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-green-500 p-2.5 sm:p-3 rounded-full animate-bounce">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{t.workTitle}</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {t.workExperience.map((item, index) => (
              <div key={index} 
                   className={`border-l-4 border-green-500 pl-4 sm:pl-6 pb-4 sm:pb-6 last:pb-0 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 transition-all duration-500 hover:translate-x-2 hover:border-l-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                   style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{item.company}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{item.position}</p>
                </div>
                <span className="bg-green-500 text-black text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full whitespace-nowrap w-fit transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWork;