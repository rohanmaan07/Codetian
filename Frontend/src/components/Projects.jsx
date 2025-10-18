import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLink } from "react-icons/fa";

import ndArtsImage from "../assets/ND-Arts.png";
import trendStreamImage from "../assets/TrendStream.png";
import VideoProcoting from "../assets/VideoProctoring.png";
import kitaabImage from "../assets/Kitaab.png";
import hackathonImage from "../assets/HackathonP.png";
import janviImage from "../assets/Janvi.png";
import Ticket from "../assets/Ticket.png";
import Iconiq from "../assets/Iconiq.png";
import EClamp from "../assets/EClamp.png";

const projectsData = [
  {
    image: kitaabImage,
    title: "Kitaab (Shayari)",
    description:
      "A fully responsive Shayari application with user registration, login, and role-based access control for a personalized experience.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://kitaabrohan.onrender.com/",
  },
  {
    image: Iconiq,
    title: "Iconiq Gifts",
    description:
      "Designed and launched a sophisticated e-commerce platform for Iconiq Gifts using Wix Studio. The website is tailored specifically for the corporate gifting market.",
    tags: ["Wix Studio", "E-commerce", "UI/UX Design", "CMS Management"],
    liveLink: "https://www.iconiqgifts.in/",
  },
  {
  image: EClamp, 
  title: "EClamp Services",
  description: "A responsive corporate website for EClamp Services, built with React. Features an interactive Leaflet map to showcase their project footprint across India.",
  tags: ["React", "Leaflet.js", "Tailwind CSS", "Corporate Website"],
  liveLink: "https://eclampservices.in/",
},
 {
    image: janviImage,
    title: "Janvi Electronics",
    description:
      "A client-based web project designed for an electronics store, featuring a responsive multi-page layout..",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://janvi-electronics.vercel.app/",
  },
  {
    image: ndArtsImage,
    title: "ND Arts",
    description:
      "A responsive e-commerce website with OAuth, Razorpay integration, and Cloudinary for optimized image management.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    liveLink: "https://ndarts.vercel.app/",
  },
 
  {
    image: VideoProcoting,
    title: "AI Video Procotring",
    description:
      "AI-based Video Proctoring System that ensures fairness and integrity during online interviews or exams.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tensorflow.js",
      "Mediapipe",
    ],
    liveLink: "https://video-proctring.vercel.app/",
  },
  {
    image: Ticket,
    title: "Ticket Booking",
    description:
      "This web application allows users to easily book tickets for events and transportation.",
    tags: ["MongoDB", "Express.js", "Node.js", "EJS"],
    liveLink: "https://ticket-booking-1-hsaa.onrender.com/movies",
  },
  {
    image: trendStreamImage,
    title: "TrendStream WebApp",
    description:
      "Fetches real-time movie/TV show data from the TMDb API and includes an integrated search feature to boost user engagement.",
    tags: ["React", "TMDb API", "Tailwind CSS"],
    liveLink: "https://trend-stream-rohan.vercel.app/",
  },
  {
    image: hackathonImage,
    title: "Water Supply Mapping System",
    description:
      "A Hackathon project creating a targeted mapping system using GeoJSON to visualize India's water supply framework within 24 hours.",
    tags: ["HTML", "CSS", "JavaScript", "GeoJSON"],
    liveLink: "https://hackathon-project-omega-two.vercel.app/",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
    },
  }),
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const INITIAL_VISIBLE_COUNT = windowWidth < 768 ? 2 : 4;

  const visibleProjects = isExpanded
    ? projectsData
    : projectsData.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
        >
          <span className="text-white">Our Recent Work</span>
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></span>
        </motion.h2>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#141414] shadow-lg hover:border-red-600 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-500"
                custom={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                <div className="p-6 md:absolute md:inset-0 md:bg-gradient-to-t md:from-black md:via-black/80 md:to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-red-800 text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-semibold hover:text-red-500 transition-colors"
                      >
                        <FaLink />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {projectsData.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? "View Less" : "View More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
