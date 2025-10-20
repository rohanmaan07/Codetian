import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const API_URL = "https://codetian.onrender.com/api/views";

    const updateViewCount = async () => {
      try {
        const hasVisited = localStorage.getItem("hasVisitedCodetian");
        let response;
        if (!hasVisited) {
          response = await axios.post(API_URL);
          localStorage.setItem("hasVisitedCodetian", "true");
        } else {
          response = await axios.get(API_URL);
        }
        setViewCount(response.data.count);
      } catch (error) {
        console.error("Error with view count:", error);
      }
    };

    updateViewCount();
  }, []);

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
          <div className="hidden md:flex flex-col items-start text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              Codetian
            </h3>
            <p className="text-gray-200 max-w-xs mb-4">
              Your vision, our code. We build stunningly beautiful websites that
              perform even better than they look.
              <br />
              <br />
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
                      className="capitalize text-gray-200 hover:text-red-500 transition-colors duration-300"
                      aria-label={`Maps to ${link.title}`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start text-right">
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:rohanmandal@codetian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-red-500 transition-colors duration-300"
                    aria-label="Send email to rohanmandal@codetian.com"
                  >
                    <FiMail size={18} aria-hidden="true" />
                    <span className="text-xs md:text-sm">
                      rohanmandal@codetian.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yashyadav@codetian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-red-500 transition-colors duration-300"
                    aria-label="Send email to yashyadav@codetian.com"
                  >
                    <FiMail size={18} aria-hidden="true" />
                    <span className="text-xs md:text-sm">
                      yashyadav@codetian.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919711657307"
                    className="flex items-center gap-3 text-gray-200 hover:text-red-500 transition-colors duration-300"
                    aria-label="Call +91 97116 57307"
                  >
                    <FiPhone size={18} aria-hidden="true" />
                    <span className="md:text-sm">+91 97116 57307</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919650762113"
                    className="flex items-center gap-3 text-gray-200 hover:text-red-500 transition-colors duration-300"
                    aria-label="Call +91 96507 62113"
                  >
                    <FiPhone size={18} aria-hidden="true" />
                    <span className="md:text-sm">+91 96507 62113</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Codetian. All Rights Reserved.
          </p>

          {viewCount > 0 && (
            <p className="text-gray-400 text-sm mt-2">
              👁️{" "}
              <span className="font-semibold">
                {viewCount.toLocaleString()}
              </span>{" "}
              Site Views
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
