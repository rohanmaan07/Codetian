import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
    >
     

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-3xl">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Turning Your Thoughts into{" "}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Code
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Welcome to{" "}
          <span className="text-red-500 font-semibold">Codetian</span> — 
          We are a passionate collective of creators dedicated to turning great
          ideas into modern, beautiful, and high-performing websites that make a
          true impact.
        </motion.p>

        {/* Call To Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="group text-base sm:text-lg font-semibold px-8 py-4 
                       bg-red-600 hover:bg-red-700 
                       text-white rounded-md transition-all duration-300 
                       hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]
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
