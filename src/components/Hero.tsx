import React, { useEffect, useRef } from "react";
import rolando from "../assets/rolando-juarez.png";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  es: {
    subtitle: "Especialista en Soluciones Tecnológicas",
    name: "Rolando Ismahel Juarez",
    title: "Full Stack Developer",
    description: "Cuento con más de 5 años de experiencia en implementación, arquitectura de software, soporte técnico y diseño de soluciones innovadoras que impulsan la eficiencia y el crecimiento de las organizaciones.",
    btnProjects: "Ver Proyectos",
    btnCV: "Descargar CV"
  },
  en: {
    subtitle: "Technology Solutions Specialist",
    name: "Rolando Ismahel Juarez",
    title: "Full Stack Developer",
    description: "I have over 5 years of experience in implementation, software architecture, technical support, and designing innovative solutions that drive efficiency and organizational growth.",
    btnProjects: "View Projects",
    btnCV: "Download CV"
  }
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();

    // Ajustar cantidad de partículas según tamaño de pantalla
    const getParticleCount = () => {
      if (window.innerWidth < 768) return 30; // móvil
      if (window.innerWidth < 1024) return 50; // tablet
      return 80; // desktop
    };

    // Partículas flotantes más sutiles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(34, 197, 94, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Grid lines más sutiles
    class GridLine {
      y: number;
      speed: number;
      opacity: number;

      constructor(canvasHeight: number) {
        this.y = Math.random() * canvasHeight;
        this.speed = Math.random() * 0.2 + 0.05;
        this.opacity = Math.random() * 0.05 + 0.02;
      }

      update(canvasHeight: number) {
        this.y += this.speed;
        if (this.y > canvasHeight) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D, canvasWidth: number) {
        context.strokeStyle = `rgba(34, 197, 94, ${this.opacity})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(0, this.y);
        context.lineTo(canvasWidth, this.y);
        context.stroke();
      }
    }

    // Círculos pulsantes más sutiles
    class PulsingCircle {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = 0;
        this.maxRadius = Math.random() * 80 + 40;
        this.speed = Math.random() * 0.3 + 0.2;
        this.opacity = 0.08;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 0.08 * (1 - this.radius / this.maxRadius);

        if (this.radius > this.maxRadius) {
          this.radius = 0;
          this.opacity = 0.08;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.strokeStyle = `rgba(34, 197, 94, ${this.opacity})`;
        context.lineWidth = 1.5;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();
      }
    }

    let particles = Array.from({ length: getParticleCount() }, () => new Particle(canvas.width, canvas.height));
    const gridLines = Array.from({ length: 15 }, () => new GridLine(canvas.height));
    const pulsingCircles = Array.from({ length: 3 }, () => new PulsingCircle(canvas.width, canvas.height));

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gridLines.forEach(line => {
        line.update(canvas.height);
        line.draw(ctx, canvas.width);
      });

      pulsingCircles.forEach(circle => {
        circle.update();
        circle.draw(ctx);
      });

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Conectar partículas cercanas con menos opacidad
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.05 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      updateCanvasSize();
      // Recrear partículas según nuevo tamaño
      particles = Array.from({ length: getParticleCount() }, () => new Particle(canvas.width, canvas.height));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 md:px-10 text-center md:text-left pt-24 pb-20 overflow-hidden bg-black">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient Overlays más sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-green-500/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
        <div className="flex-1 max-w-xl opacity-0 animate-fadeInLeft">
          <p className="text-gray-400 mb-2 text-sm md:text-base">{t.subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {language === 'es' ? 'Soy' : "I'm"}{' '}
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              {t.name}
            </span>, <br />
            {t.title.split(' ')[0]} <br /> {t.title.split(' ').slice(1).join(' ')}.
          </h1>
          <p className="text-gray-400 mt-4 max-w-md opacity-0 animate-fadeIn text-sm md:text-base" style={{ animationDelay: '0.5s' }}>
            {t.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
           <button
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
>
  {t.btnProjects}
</button>
<a
  href="/assets/juarezcv2025.pdf"
  download="Rolando-Juarez-CV.pdf"
  className="border border-gray-400 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-green-500 transition-all duration-300 inline-block"
>
  {t.btnCV}
</a>

          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0 opacity-0 animate-fadeInRight">
          <div className="relative flex justify-center">
            {/* Anillos giratorios adaptativos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-green-500/10 rounded-full animate-spinSlow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] md:w-[430px] md:h-[430px] lg:w-[540px] lg:h-[540px] border-2 border-green-500/5 rounded-full animate-spinReverse" />
            </div>
            
            {/* Imagen responsive */}
            <div className="flex items-center justify-center">
              <img
                src={rolando}
                alt="Rolando Juarez"
                className="w-[360px] md:w-[440px] lg:w-[520px] rounded-full object-cover shadow-2xl"
              />
            </div>

            {/* Partículas orbitales más sutiles */}
            <div className="hidden md:block absolute top-1/4 right-0 w-2 h-2 bg-green-500 rounded-full animate-orbit shadow-lg shadow-green-500/30" />
            <div className="hidden md:block absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-orbitReverse shadow-lg shadow-green-400/30" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @keyframes orbitReverse {
          0% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
          100% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
        }

        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.9s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-spinSlow { animation: spinSlow 30s linear infinite; }
        .animate-spinReverse { animation: spinReverse 25s linear infinite; }
        .animate-orbit { animation: orbit 15s linear infinite; }
        .animate-orbitReverse { animation: orbitReverse 12s linear infinite; }

        @media (max-width: 768px) {
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
          }

          @keyframes orbitReverse {
            0% { transform: rotate(360deg) translateX(95px) rotate(-360deg); }
            100% { transform: rotate(0deg) translateX(95px) rotate(0deg); }
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;