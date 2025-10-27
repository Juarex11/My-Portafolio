import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
