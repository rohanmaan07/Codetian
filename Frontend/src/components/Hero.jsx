import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-sky-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Turning Your Thoughts into{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Code
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2"
        >
          Welcome to <span className="text-purple-400 font-semibold">Codetian</span> — 
         We are a passionate collective of creators dedicated to turning great ideas into modern, beautiful, and high-performing websites that make a true impact.


        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="group text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 
                       bg-gradient-to-r from-purple-400 to-pink-500 
                       text-white rounded-full transition-all duration-300 
                       hover:shadow-lg hover:shadow-pink-500/30 
                       inline-flex items-center justify-center"
          >
            Let’s Build Something
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
