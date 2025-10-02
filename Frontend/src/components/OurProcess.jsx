// src/components/OurProcess.js

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';

// Array updated with different icon colors for a more vibrant look
const processSteps = [
  {
    id: 1,
    icon: <FaSearch size={40} className="text-purple-400" />,
    title: '1. Discovery & Planning',
    description: 'We begin by understanding your project goals, target audience, and requirements to create a solid strategic plan.',
  },
  {
    id: 2,
    icon: <FaPaintBrush size={40} className="text-sky-400" />,
    title: '2. UI/UX Design',
    description: 'A user-friendly and visually appealing design is crafted to represent your brand and ensure an optimal user experience.',
  },
  {
    id: 3,
    icon: <FaCode size={40} className="text-pink-500" />,
    title: '3. Development',
    description: 'Using the latest technologies, we transform the design into a fully functional and responsive website.',
  },
  {
    id: 4,
    icon: <FaRocket size={40} className="text-green-400" />,
    title: '4. Deployment & Launch',
    description: 'After thorough testing, we deploy your project and remain available for ongoing support and maintenance.',
  },
];

// Animation variants for the cards, same as your Services component
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const OurProcess = () => {
  return (
    <section id="process" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          Our Working Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              // Applying the glassmorphism style and animations
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg text-left"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;