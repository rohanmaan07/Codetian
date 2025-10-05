import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline for a website project varies depending on its complexity. A basic informational site might take 1-2 weeks, while a more complex e-commerce or custom web application could take several months. We provide a detailed project timeline after our initial discovery call."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. We can handle everything from regular backups to content updates and technical troubleshooting."
  },
  {
    question: "How much will my website cost?",
    answer: "Every project is unique, so the cost depends entirely on your specific requirements. We don't offer one-size-fits-all solutions. The best way to get an accurate price is to contact us for a free, no-obligation quote. We'll discuss your needs and give you a detailed proposal based on the project's scope."
  },
  {
    question: "What is your payment process?",
    answer: "Our payment structure is a 40/60 split. We require a 40% upfront deposit to begin the project. The remaining 60% is due upon project completion, before the final website is deployed and made live."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All websites we build are fully responsive, meaning they are designed to look and function perfectly on all devices, including desktops, tablets, and smartphones. Mobile-first design is a core part of our development process."
  },
    {
    question: "What do you need from me to get started?",
    answer: "To get started, we typically need a clear idea of your project goals, your brand guidelines (logo, colors), any content (text, images) you have prepared, and an idea of websites you like for inspiration. Don't worry if you don't have everything—we can help guide you through the process."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: { height: 'auto', opacity: 1, marginTop: '16px' }
  };

  return (
    <div className="border-b border-gray-700 last:border-b-0 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-medium text-white">{question}</h3>
        <span className="text-red-500">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 relative inline-block"
        >
          Frequently Asked Questions
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></span>
        </motion.h2>
        
        <div className="text-left">
          {faqData.map((faq, index) => (
             <AccordionItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;