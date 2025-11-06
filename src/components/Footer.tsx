import { useState } from 'react';
import { X as XIcon } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Traducciones ---
const translations = {
  en: {
    brandDescription: "I collaborate with various companies and startups.",
    navigationTitle: "Navigation",
    navigation: {
      home: "Home",
      services: "Services",
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact Me"
    },
    contactTitle: "Contact",
    contactInfo: {
      phone: "(+51) 981 031 225",
      website: "www.juarezdev.com",
      email: "rolando.jp113@gmail.com",
      location: "Lima - Peru"
    },
    newsletterTitle: "I'll contact you...",
    emailPlaceholder: "Email Here",
    subscribeSuccess: "Thank you for subscribing!",
    copyright: "All rights reserved."
  },
  es: {
    brandDescription: "Colaboro con diversas empresas y startups.",
    navigationTitle: "Navegación",
    navigation: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contáctame"
    },
    contactTitle: "Contacto",
    contactInfo: {
      phone: "(+51) 981 031 225",
      website: "www.rjuarez.com",
      email: "rolando.jp113@gmail.com",
      location: "Lima - Perú"
    },
    newsletterTitle: "Yo me contacto contigo...",
    emailPlaceholder: "Tu Email",
    subscribeSuccess: "¡Gracias por suscribirte!",
    copyright: "Todos los derechos reservados."
  }
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      alert(t.subscribeSuccess);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-lg sm:text-xl">RJ</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">ROLANDO ISMAHEL</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              {t.brandDescription}
            </p>
            <div className="flex gap-2.5 sm:gap-3 justify-center sm:justify-start flex-wrap">
              <a href="https://www.facebook.com/rolando.juarez.75286100/" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
             <a
  href="https://x.com/juarexdev" // reemplaza con tu usuario real
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0"
>
  <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
</a>
              
              <a href="https://www.instagram.com/rola_ismaheljp/" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a href="https://linkedin.com/in/rolando-ismahel-juarez" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a href="https://github.com/Juarex11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.756-1.335-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.287-1.552 3.292-1.23 3.292-1.23.655 1.653.242 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.813 1.096.813 2.21 0 1.596-.015 2.882-.015 3.27 0 .323.216.7.825.58C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
</a>

            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg mb-4 sm:mb-6">{t.navigationTitle}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.home}</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.services}</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.about}</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.projects}</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.experience}</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors text-sm sm:text-base">{t.navigation.contact}</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg mb-4 sm:mb-6">{t.contactTitle}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-400 text-sm sm:text-base">{t.contactInfo.phone}</li>
              <li className="text-gray-400 text-sm sm:text-base break-all">{t.contactInfo.website}</li>
              <li className="text-gray-400 text-sm sm:text-base break-all">{t.contactInfo.email}</li>
              <li className="text-gray-400 text-sm sm:text-base">
                {t.contactInfo.location}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-green-500 font-semibold text-base sm:text-lg mb-4 sm:mb-6">{t.newsletterTitle}</h3>
            <div className="relative max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 pr-11 sm:pr-12 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-800 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
  <p className="text-gray-500 text-xs sm:text-sm">
    © {new Date().getFullYear()} <span className="text-green-500">Ismahel Juarez</span>. {t.copyright}
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;