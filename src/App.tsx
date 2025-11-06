import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// Componente WelcomeLoader
const WelcomeLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="text-center px-8 w-full max-w-md">
        <div className="mb-12">
          <h1 
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              background: 'linear-gradient(90deg, #00ff78, #00ff78, #ffffff, #00ff78, #00ff78)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shine 3s linear infinite'
            }}
          >
            Welcome
          </h1>
          <p className="text-gray-400 text-lg">
            Loading experience...
          </p>
        </div>

        <div className="relative w-full">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00ff78, #00cc66, #00ff78)',
                backgroundSize: '200% 100%',
                animation: 'gradient 2s ease infinite',
                boxShadow: '0 0 20px rgba(0, 255, 120, 0.5)'
              }}
            >
              <div
                className="absolute top-0 left-0 h-full w-1/3"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'slideRight 1.5s ease-in-out infinite'
                }}
              />
            </div>
          </div>

          <div className="mt-4 text-2xl font-bold text-green-400">
            {progress}%
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-green-400"
              style={{
                animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes wave {
          0%, 100% { 
            transform: rotate(-20deg);
          }
          50% { 
            transform: rotate(20deg);
          }
        }

        @keyframes waveReverse {
          0%, 100% { 
            transform: rotate(20deg);
          }
          50% { 
            transform: rotate(-20deg);
          }
        }

        @keyframes floatBounce {
          0%, 100% { 
            transform: translateY(0) translateX(-50%);
          }
          50% { 
            transform: translateY(-20px) translateX(-50%);
          }
        }

        @keyframes pulseEyes {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes pingGlow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// Componente App principal
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // El loader desaparece después de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar loader mientras carga
  if (loading) {
    return <WelcomeLoader />;
  }

  // Contenido principal de la web
  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Education />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;