import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clear any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7],
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add reveal animation based on section with improved timing
          if (element.id === 'hero' && !element.classList.contains('animate-hero-reveal')) {
            element.classList.add('animate-hero-reveal');
          } else if (element.id === 'about' && !element.classList.contains('animate-about-reveal')) {
            element.classList.add('animate-about-reveal');
          } else if (element.id === 'tech-stack' && !element.classList.contains('animate-tech-reveal')) {
            element.classList.add('animate-tech-reveal');
          } else if (element.id === 'projects' && !element.classList.contains('animate-projects-reveal')) {
            element.classList.add('animate-projects-reveal');
          } else if (element.id === 'experience' && !element.classList.contains('animate-experience-reveal')) {
            element.classList.add('animate-experience-reveal');
          } else if (element.id === 'contact' && !element.classList.contains('animate-contact-reveal')) {
            element.classList.add('animate-contact-reveal');
          }
          
          // Improved staggered animations with better timing
          const children = element.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            // Use requestAnimationFrame for smoother timing
            requestAnimationFrame(() => {
              setTimeout(() => {
                if (!child.classList.contains('animate-reveal')) {
                  child.classList.add('animate-reveal');
                }
              }, index * 100); // Reduced delay for smoother feel
            });
          });

          // Handle individual animated elements
          if (element.classList.contains('animate-fade-in-up') && !element.classList.contains('animate-reveal')) {
            element.classList.add('animate-reveal');
          }
        }
      });
    }, observerOptions);

    observerRef.current = observer;

    // Observe all sections and animated elements in one pass
    const allElements = document.querySelectorAll('section[id], .animate-fade-in-up, .animate-on-scroll');
    allElements.forEach((el) => observer.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

export const useParallaxEffect = () => {
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.parallax-element');
          
          parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
            const yPos = -(scrolled * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          
          lastScrollY.current = scrolled;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};