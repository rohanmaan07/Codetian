import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { title: "home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  

  return (
    <footer className="bg-black border-t border-white/10 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Branding & Socials */}
          <div className="hidden md:flex flex-col items-start text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              Codetian
            </h3>
            <p className="text-gray-400 max-w-xs mb-4">
              Your vision, our code. We build stunningly beautiful websites that perform even better than they look.
              <br/><br/>
              Turning your great ideas into modern, beautiful, and
              high-performing websites.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-start text-left">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="capitalize text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start text-right">
              <h4 className="font-semibold text-lg mb-4">Contact </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rohanmandal2208@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <FiMail size={18} />
                    <span className="text-xs md:text-sm">rohanmandal2208@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=anjuy54652@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <FiMail size={18} />
                    <span className="text-xs md:text-sm">anjuy54652@gmail.com</span>
                  </a>
                </li>
         
                <li>
                  <a
                    href="tel:+919711657307"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <FiPhone size={18} />
                    <span className="md:text-sm">+91 97116 57307</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919650762113"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <FiPhone size={18} />
                    <span className="md:text-sm">+91 96507 62113</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Codetian. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;