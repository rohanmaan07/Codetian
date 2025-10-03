import React from 'react';
import { motion } from 'framer-motion';
import aboutPic from '../assets/AboutPIc.jpg'; 

const skills = [
  "JavaScript", "React.js", "Node.js", "Express", 
  "MongoDB", "Tailwind CSS", "Java", "Git", "GitHub","Wix","HTML","CSS"
];

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          className="w-full max-w-sm mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-red-600 via-red-400 to-pink-500 p-1 shadow-lg hover:shadow-red-500/60 transition-shadow duration-500">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
              <img src={aboutPic} alt="The Codetian Team" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
            About <span className="text-red-500">Us</span>
            <span className="block w-24 h-1 bg-red-600 rounded-full mt-2 mx-auto"></span>

          </h2>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            We are Codetian. We turn ideas into modern, beautiful, and high-performing websites that make an impact. Our passion lies in building seamless user experiences with clean code and robust back-end solutions.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Our Tech Stack</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="bg-gray-800/60 text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700 shadow-md hover:shadow-red-500/40 hover:border-red-500/50 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
