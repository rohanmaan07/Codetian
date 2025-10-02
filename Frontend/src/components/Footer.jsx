import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/10 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Copyright Notice */}
        <p className="text-gray-400 text-sm ">
          © {currentYear} Codetian. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;