import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import OurProcess from './components/OurProcess';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services/>
      <Projects/>
      <OurProcess/>
      <About/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;