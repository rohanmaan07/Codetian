import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import icon from '../assets/icon.png';

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Process", href: "#process" }, 
  { title: "About", href: "#about" },
  { title: "FAQs", href: "#faq" }, 
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex flex-col items-start">
              <img src={icon} alt="Codetian Logo" className="h-12 w-auto" />

              <span className="text-xs text-gray-400 tracking-wider mt-0.5">
                INNOVATION IN EVERY LINE
              </span>
            </a>
          
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href} 
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
        
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <FiMenu size={28} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-full bg-black z-50 md:hidden flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="flex justify-end p-6">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none"
                aria-label="Close menu"
              >
                <FiX size={28} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href} 
                  className="text-white text-3xl font-semibold hover:text-red-500 transition-colors"
                  onClick={toggleMenu}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
