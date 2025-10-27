import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
       <Services />
          <About />
             <Projects />
    </div>
  );
};

export default App;
