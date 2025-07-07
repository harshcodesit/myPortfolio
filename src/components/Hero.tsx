import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import PenguinMascot from './PenguinMascot';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Web Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link for resume download
    const link = document.createElement('a');
    link.href = '#'; // You would replace this with actual resume URL
    link.download = 'Harshwardhan_Singh_Panwar_Resume.pdf';
    // Simulate download for demo
    alert('Resume download would start here!');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#021526] via-[#0C0C0C] to-[#021526]"></div>
        
        {/* 3D Floating Lines with Enhanced Depth */}
        <div className="absolute inset-0 parallax-element" data-speed="0.3">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-[#6EACDA]/30 to-transparent transform rotate-12 blur-[0.5px]"></div>
          <div className="animate-float-slow-reverse absolute top-3/4 right-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-[#6EACDA]/20 to-transparent transform -rotate-12"></div>
          <div className="animate-float-diagonal absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#6EACDA]/15 to-transparent transform rotate-45"></div>
          <div className="animate-float-slow absolute top-1/6 right-1/3 w-56 h-1 bg-gradient-to-r from-transparent via-[#6EACDA]/25 to-transparent transform rotate-65"></div>
          <div className="animate-float-slow-reverse absolute bottom-1/4 left-1/6 w-40 h-1 bg-gradient-to-r from-transparent via-[#6EACDA]/18 to-transparent transform -rotate-30"></div>
        </div>
        
        {/* Enhanced Floating Developer Symbols */}
        <div className="absolute inset-0 overflow-hidden parallax-element" data-speed="0.5">
          <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/6 text-[#6EACDA]/8 text-3xl font-mono developer-font">{'<>'}</div>
          <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/6 text-[#6EACDA]/10 text-2xl font-mono">{'{}'}</div>
          <div className="animate-float-symbol-enhanced absolute top-1/2 left-3/4 text-[#6EACDA]/7 text-lg font-mono">const</div>
          <div className="animate-float-symbol-reverse-enhanced absolute top-1/3 right-1/3 text-[#6EACDA]/9 text-lg font-mono">return</div>
          <div className="animate-float-symbol-enhanced absolute bottom-1/4 left-1/2 text-[#6EACDA]/12 text-xl font-mono">$</div>
          <div className="animate-float-symbol-reverse-enhanced absolute top-1/6 right-1/4 text-[#6EACDA]/8 text-lg font-mono">;</div>
          <div className="animate-float-symbol-enhanced absolute top-2/3 left-1/5 text-[#6EACDA]/6 text-md font-mono">function</div>
          <div className="animate-float-symbol-reverse-enhanced absolute top-1/8 left-2/3 text-[#6EACDA]/11 text-lg font-mono">async</div>
          <div className="animate-float-symbol-enhanced absolute bottom-1/6 right-1/5 text-[#6EACDA]/9 text-md font-mono">await</div>
          <div className="animate-float-symbol-reverse-enhanced absolute top-5/6 left-3/5 text-[#6EACDA]/7 text-lg font-mono">npm</div>
        </div>

        {/* Enhanced Particle System */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8 animate-on-scroll">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-[#E0E0E0] animate-fade-in-up developer-font">
                  Harshwardhan
                </span>
                <span className="block text-[#6EACDA] animate-fade-in-up animation-delay-200 developer-font gradient-text">
                  Singh Panwar
                </span>
              </h1>
              
              <div className="animate-fade-in-up animation-delay-400 animate-on-scroll">
                <div className="text-xl sm:text-2xl text-[#E0E0E0] font-light mb-2">
                  <span className="typewriter font-mono">{typedText}</span>
                  <span className="animate-pulse text-[#6EACDA]">|</span>
                </div>
                <p className="text-lg text-[#B0B0B0] developer-font">
                  MERN Enthusiast <span className="text-[#6EACDA]">|</span> Clean Code Advocate <span className="text-[#6EACDA]">|</span> Problem Solver
                </p>
              </div>

              {/* Terminal-style Info */}
              <div className="animate-fade-in-up animation-delay-600 code-block animate-on-scroll">
                <div className="text-[#6EACDA] text-sm font-mono mb-1">
                  <span className="text-[#B0B0B0]">$</span> whoami
                </div>
                <div className="text-[#E0E0E0] text-sm font-mono mb-2 pl-4">
                  Harshwardhan Singh Panwar - Full Stack Developer
                </div>
                <div className="text-[#6EACDA] text-sm font-mono mb-1">
                  <span className="text-[#B0B0B0]">$</span> cat specialties.txt
                </div>
                <div className="text-[#E0E0E0] text-sm font-mono pl-4">
                  React.js, Node.js, MongoDB, Express.js
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800 animate-on-scroll">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Contact Me
              </button>
              
              <button
                onClick={downloadResume}
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-in-up animation-delay-1000 animate-on-scroll">
              <a
                href="https://github.com/harshcodesit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-[#6EACDA] transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshwardhan-singh-panwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-[#6EACDA] transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:harshwardhan9352@example.com"
                className="text-[#B0B0B0] hover:text-[#6EACDA] transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                aria-label="Email Contact"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://codepen.io/Harshwardhan-Singh-panwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-[#6EACDA] transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                aria-label="CodePen Profile"
              >
                <ExternalLink size={28} />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Penguin Mascot */}
          <div className="lg:col-span-4 flex justify-center animate-fade-in-up animation-delay-1200 animate-on-scroll">
            <PenguinMascot />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ChevronDown size={32} className="text-[#6EACDA]/60" />
          <div className="text-[#6EACDA]/60 text-sm font-mono">scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;