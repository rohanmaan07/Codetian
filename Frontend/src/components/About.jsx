import React from 'react';
import { motion } from 'framer-motion';
import aboutPic from '../assets/AboutPIc.jpg'; 

const skills = [
  "JavaScript", "React.js", "Node.js", "Express", 
  "MongoDB", "Tailwind CSS", "Java", "Git", "GitHub","Wix","HTML","CSS"
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          className="w-full max-w-sm mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-sky-400 p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Us</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            We are Codetian,  We turn ideas into modern, beautiful, and high-performing websites that make an impact. Our passion lies in building seamless user experiences with a focus on clean code and robust back-end solutions.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">Our Tech Stack</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="bg-white/10 text-gray-200 text-sm font-medium px-4 py-2 rounded-full"
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
