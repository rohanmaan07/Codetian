import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Loader } from "./components/Loader"; 

const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const OurProcess = lazy(() => import("./components/OurProcess"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const FAQ = lazy(() => import("./components/FAQ"));

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <OurProcess />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>

     
      <Footer />
    </div>
  );
}

export default App;
