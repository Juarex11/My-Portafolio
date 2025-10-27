import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 text-center md:text-left pt-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex-1"
      >
        <p className="text-gray-400 mb-2">Hello There!</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I’m <span className="text-neon">QJ Ahmed</span>, <br />
          Web Developer <br /> based in UAE.
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-4 max-w-md"
        >
          I’m an experienced web designer with 6+ years in the field,
          collaborating with various companies and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 space-x-4"
        >
          <button className="bg-neon text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            View My Works
          </button>
          <button className="border border-gray-400 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Download CV
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-neon opacity-20 rounded-full blur-3xl"></div>
          <img
            src="https://i.ibb.co/NyMRvqb/person.png"
            alt="Ahmed portrait"
            className="w-72 md:w-96 rounded-full z-10 relative"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
