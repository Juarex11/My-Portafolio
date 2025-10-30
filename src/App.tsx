import React from "react";
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

const App: React.FC = () => {
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
