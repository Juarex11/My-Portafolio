import React, { useEffect, useRef } from "react";
import rolando from "../assets/rolando-juarez.png";
const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Partículas flotantes
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(34, 197, 94, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Grid lines
    class GridLine {
      constructor() {
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.strokeStyle = `rgba(34, 197, 94, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.stroke();
      }
    }

    // Círculos pulsantes
    class PulsingCircle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = 0.15;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 0.15 * (1 - this.radius / this.maxRadius);

        if (this.radius > this.maxRadius) {
          this.radius = 0;
          this.opacity = 0.15;
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(34, 197, 94, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());
    const gridLines = Array.from({ length: 20 }, () => new GridLine());
    const pulsingCircles = Array.from({ length: 5 }, () => new PulsingCircle());

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gridLines.forEach(line => {
        line.update();
        line.draw();
      });

      pulsingCircles.forEach(circle => {
        circle.update();
        circle.draw();
      });

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Conectar partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - distance / 100)})`;
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col md:flex-row items-center justify-center px-10 text-center md:text-left pt-24 pb-20 overflow-hidden bg-black">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="flex-1 max-w-xl opacity-0 animate-fadeInLeft">
          <p className="text-gray-400 mb-2">Hello There!</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm <span className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">Rolando Ismahel Juarez</span>, <br />
            Web Developer <br /> based.
          </h1>
          <p className="text-gray-400 mt-4 max-w-md opacity-0 animate-fadeIn delay-500">
            I'm an experienced web designer with 6+ years in the field,
            collaborating with various companies and startups.
          </p>

          <div className="mt-8 space-x-4 opacity-0 animate-fadeInUp delay-800">
            <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              View My Works
            </button>
            <button className="border border-gray-400 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-green-500 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0 opacity-0 animate-fadeInRight">
          <div className="relative flex justify-center">
            {/* Anillos giratorios */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] border-2 border-green-500/20 rounded-full animate-spinSlow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[540px] h-[540px] border-2 border-green-500/10 rounded-full animate-spinReverse" />
            </div>
            
            {/* Imagen */}
             <img
    src={rolando}
    alt="Rolando Juarez"
    className="w-96 md:w-[480px] rounded-full z-10 relative object-cover shadow-2xl"
  />

            {/* Partículas orbitales */}
            <div className="absolute top-1/4 right-0 w-3 h-3 bg-green-500 rounded-full animate-orbit shadow-lg shadow-green-500/50" />
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-green-400 rounded-full animate-orbitReverse shadow-lg shadow-green-400/50" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
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
          0% { transform: rotate(0deg) translateX(250px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
        }

        @keyframes orbitReverse {
          0% { transform: rotate(360deg) translateX(240px) rotate(-360deg); }
          100% { transform: rotate(0deg) translateX(240px) rotate(0deg); }
        }

        .animate-fadeInLeft { animation: fadeInLeft 0.9s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-spinSlow { animation: spinSlow 20s linear infinite; }
        .animate-spinReverse { animation: spinReverse 15s linear infinite; }
        .animate-orbit { animation: orbit 10s linear infinite; }
        .animate-orbitReverse { animation: orbitReverse 8s linear infinite; }
        
        .delay-500 { animation-delay: 0.5s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;