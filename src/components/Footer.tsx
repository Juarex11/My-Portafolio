import { useState } from 'react';

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
      website: "www.rjuarez.com",
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
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors flex-shrink-0">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
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