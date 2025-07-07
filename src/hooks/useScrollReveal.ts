import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add reveal animation based on section
          if (element.id === 'hero') {
            element.classList.add('animate-hero-reveal');
          } else if (element.id === 'about') {
            element.classList.add('animate-about-reveal');
          } else if (element.id === 'tech-stack') {
            element.classList.add('animate-tech-reveal');
          } else if (element.id === 'projects') {
            element.classList.add('animate-projects-reveal');
          } else if (element.id === 'experience') {
            element.classList.add('animate-experience-reveal');
          } else if (element.id === 'contact') {
            element.classList.add('animate-contact-reveal');
          }
          
          // Add staggered animations to child elements
          const children = element.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-reveal');
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Observe individual animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};