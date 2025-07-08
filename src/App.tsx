import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import MinorProjects from './components/MinorProjects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal, useParallaxEffect } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();
  useParallaxEffect();

  useEffect(() => {
    // Smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021526] via-[#0C0C0C] to-[#021526] text-[#E0E0E0] overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <MinorProjects />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;