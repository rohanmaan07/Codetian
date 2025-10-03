import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

// Inline SVGs for icons
const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    const whatsappNumber = "919711657307";
    const whatsappMessage = encodeURIComponent(
      `Hello Codetian,\n\nI would like to discuss a project.\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Thank you! Redirecting to WhatsApp.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 relative inline-block"
        >
          Get In <span className="text-red-500">Touch</span>
          <span className="block w-24 h-1 bg-red-600 rounded-full mt-2 mx-auto"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Let's Build Together
            </h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind or just want to say hi? Fill out the form
              and send us a message directly on WhatsApp. We're excited to hear
              your ideas.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rohanmandal2208@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-red-500 transition-colors"
            >
              <EnvelopeIcon />
              rohanmandal2208@gmail.com
            </a>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/rohanmandal07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-transform hover:scale-110"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/rohanmaan07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-transform hover:scale-110"
              >
                <GithubIcon />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            onSubmit={handleSendMessage}
            className="w-full space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 shadow-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 shadow-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 shadow-md text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className=" w-full group text-base sm:text-lg font-semibold px-8 py-4 
                       bg-red-600 hover:bg-red-700 
                       text-white rounded-md transition-all duration-300 
                       hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]
                       inline-flex items-center justify-center"
            >
              Send Message on WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
