import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";

import ndArtsImage from "../assets/ND-Arts.png";
import trendStreamImage from "../assets/TrendStream.png";
import VideoProcoting from "../assets/VideoProctoring.png";
import kitaabImage from "../assets/Kitaab.png";
import hackathonImage from "../assets/HackathonP.png";
import Ticket from "../assets/Ticket.png";

const projectsData = [
  {
    image: kitaabImage,
    title: "Kitaab (Shayari)",
    description:
      "A fully responsive Shayari application with user registration, login, and role-based access control for a personalized experience.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://kitaabrohan.onrender.com/",
    codeLink: "#",
  },
  {
    image: ndArtsImage,
    title: "ND Arts",
    description:
      "A responsive e-commerce website with OAuth, Razorpay integration, and Cloudinary for optimized image management.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    liveLink: "https://nd-arts-2grq.onrender.com/",
    codeLink: "#",
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
    codeLink: "#",
  },
  {
    image: Ticket,
    title: "Ticket Booking",
    description:
      "This web application allows users to easily book tickets for events and transportation.",
    tags: ["MongoDB", "Express.js", "Node.js", "EJS"],
    liveLink: "https://ticket-booking-1-hsaa.onrender.com/movies",
    codeLink: "#",
  },
  {
    image: trendStreamImage,
    title: "TrendStream WebApp",
    description:
      "Fetches real-time movie/TV show data from the TMDb API and includes an integrated search feature to boost user engagement.",
    tags: ["React", "TMDb API", "Tailwind CSS"],
    liveLink: "https://trend-stream-rohan.vercel.app/",
    codeLink: "#",
  },
  {
    image: hackathonImage,
    title: "Water Supply Mapping System",
    description:
      "A Hackathon project creating a targeted mapping system using GeoJSON to visualize India's water supply framework within 24 hours.",
    tags: ["HTML", "CSS", "JavaScript", "GeoJSON"],
    liveLink: "https://hackathon-project-omega-two.vercel.app/",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          Our Recent Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="p-6 md:absolute md:inset-0 md:bg-black md:bg-opacity-60 md:opacity-0 
                              md:group-hover:opacity-100 md:transition-opacity md:duration-500"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-sky-500/20 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full"
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
                    className="flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors"
                  >
                    <FaLink />
                    Live Demo
                  </a>
                  {/* <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors">
                    <FaGithub />
                    View Code
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
