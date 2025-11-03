import { useState } from 'react';

import { MapPin, Phone, Mail, Clock, CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- Traducciones ---
const translations = {
  en: {
    backgroundText: "CONTACT ME",
    sectionLabel: "Contact Me",
    title: "Let's Talk About",
    titleHighlight: "Your Next",
    titleEnd: "Project",
    // Success Modal
    successTitle: "Message sent successfully!",
    successMessage: "Thank you for reaching out! Your message has been received and saved. I will respond as soon as possible.",
    successButton: "Got it!",
    errorMessage: "Error: ",
    connectionError: "Could not connect to the server",
    // Form Labels
    fullName: "Full Name*",
    fullNamePlaceholder: "E.g: Ismahel Juarez",
    email: "Email*",
    emailPlaceholder: "example@gmail.com",
    phone: "Phone*",
    phonePlaceholder: "Your phone number",
    interest: "I'm interested in*",
    interestPlaceholder: "Select",
    budget: "Budget Range (USD)*",
    budgetPlaceholder: "Negotiable",
    country: "Country*",
    message: "Your message*",
    messagePlaceholder: "Add Message...",
    submitButton: "Send Message",
    // Interest Options
    interests: {
      webDesign: "Web Design",
      webDevelopment: "Web Development",
      itSupport: "IT Support",
      dataAnalyst: "Data Analyst",
      professionalAdvice: "Professional Advice",
      other: "Other"
    },
    // Budget Options
    budgets: {
      negotiable: "Negotiable",
      range1: "$500 - $1,000",
      range2: "$1,000 - $5,000",
      range3: "$5,000 - $10,000",
      range4: "$10,000+"
    },
    // Countries
    countries: {
      peru: "Peru",
      us: "United States",
      uk: "United Kingdom",
      canada: "Canada",
      australia: "Australia",
      other: "Other"
    },
    // Contact Info
    locationTitle: "Location",
    locationText: "Lima - Peru",
    contactsTitle: "Contacts",
    phoneLabel: "Phone: +51 981 031 225",
    emailLabel: "Email: rolando.jp113@gmail.com",
    availabilityTitle: "Availability",
    weekdaysAvailability: "Monday - Friday: 09:00 - 05:00",
    saturdayAvailability: "Saturday: 09:00 - 01:00"
  },
  es: {
    backgroundText: "CONTACTAME",
    sectionLabel: "Contáctame",
    title: "Hablemos de tu",
    titleHighlight: "Próximo",
    titleEnd: "Proyecto",
    // Success Modal
    successTitle: "¡Mensaje enviado con éxito!",
    successMessage: "¡Gracias por comunicarte conmigo! Tu mensaje ha sido recibido y guardado. Te responderé lo antes posible.",
    successButton: "¡Entendido!",
    errorMessage: "Error: ",
    connectionError: "No se pudo conectar con el servidor",
    // Form Labels
    fullName: "Nombre Completo*",
    fullNamePlaceholder: "Ej: Ismahel Juarez",
    email: "Correo*",
    emailPlaceholder: "example@gmail.com",
    phone: "Celular*",
    phonePlaceholder: "Tu número de Celular",
    interest: "Deseo tus habilidades de*",
    interestPlaceholder: "Seleccionar",
    budget: "Rango de presupuesto (USD)*",
    budgetPlaceholder: "Negociable",
    country: "País*",
    message: "Tu mensaje*",
    messagePlaceholder: "Agregar Mensaje...",
    submitButton: "Enviar mensaje",
    // Interest Options
    interests: {
      webDesign: "Diseño Web",
      webDevelopment: "Desarrollo Web",
      itSupport: "Soporte TI",
      dataAnalyst: "Analista de Datos",
      professionalAdvice: "Asesoría Profesional",
      other: "Otros"
    },
    // Budget Options
    budgets: {
      negotiable: "Negociable",
      range1: "$500 - $1,000",
      range2: "$1,000 - $5,000",
      range3: "$5,000 - $10,000",
      range4: "$10,000+"
    },
    // Countries
    countries: {
      peru: "Perú",
      us: "Estados Unidos",
      uk: "Reino Unido",
      canada: "Canadá",
      australia: "Australia",
      other: "Otros"
    },
    // Contact Info
    locationTitle: "Ubicación",
    locationText: "Lima - Perú",
    contactsTitle: "Contactos",
    phoneLabel: "Celular: +51 981 031 225",
    emailLabel: "Email: rolando.jp113@gmail.com",
    availabilityTitle: "Disponibilidad",
    weekdaysAvailability: "Lunes - Viernes: 09:00 - 05:00",
    saturdayAvailability: "Sábado: 09:00 - 01:00"
  }
};

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    interest: '',
    country: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.fondodesarrollom.com/api/saveContact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          interest: '',
          country: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        alert("❌ " + t.errorMessage + data.error);
      }
    } catch (error) {
      alert("⚠️ " + t.connectionError);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-zinc-900 border-2 border-green-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md w-full relative animate-in fade-in slide-in-from-bottom-4 duration-300">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500 bg-opacity-20 rounded-full p-3 sm:p-4 mb-4">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.successTitle}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6">
                {t.successMessage}
              </p>
              
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-green-500 text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-green-400 transition-colors text-sm sm:text-base"
              >
                {t.successButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Text */}
      <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-gray-800 opacity-10 whitespace-nowrap tracking-tight leading-none">
          {t.backgroundText}
        </h2>
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-2">{t.sectionLabel}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {t.title} <span className="text-green-500">{t.titleHighlight}</span>
          <br />
          <span className="text-green-500">{t.titleEnd}</span>
        </h1>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Your Name */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.fullName}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={t.fullNamePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* I'm interested in */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.interest}</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">{t.interestPlaceholder}</option>
                  <option value="web-design">{t.interests.webDesign}</option>
                  <option value="web-development">{t.interests.webDevelopment}</option>
                  <option value="it-support">{t.interests.itSupport}</option>
                  <option value="data-analyst">{t.interests.dataAnalyst}</option>
                  <option value="professional-advice">{t.interests.professionalAdvice}</option>
                  <option value="other">{t.interests.other}</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.budget}</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">{t.budgets.negotiable}</option>
                  <option value="500-1000">{t.budgets.range1}</option>
                  <option value="1000-5000">{t.budgets.range2}</option>
                  <option value="5000-10000">{t.budgets.range3}</option>
                  <option value="10000+">{t.budgets.range4}</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">{t.country}</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="pe">{t.countries.peru}</option>
                  <option value="us">{t.countries.us}</option>
                  <option value="uk">{t.countries.uk}</option>
                  <option value="ca">{t.countries.canada}</option>
                  <option value="au">{t.countries.australia}</option>
                  <option value="other">{t.countries.other}</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm mb-2">{t.message}</label>
              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                 rows={6}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-green-500 text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-green-400 transition-colors text-sm sm:text-base"
            >
              {t.submitButton}
            </button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Address */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-green-500">{t.locationTitle}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              {t.locationText}
            </p>
          </div>

          {/* Contact */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-green-500">{t.contactsTitle}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-2">{t.phoneLabel}</p>
            <p className="text-sm sm:text-base text-gray-300 break-all">{t.emailLabel}</p>
          </div>

          {/* Time */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-green-500">{t.availabilityTitle}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-2">{t.weekdaysAvailability}</p>
            <p className="text-sm sm:text-base text-gray-300">{t.saturdayAvailability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;