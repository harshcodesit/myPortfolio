import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#6EACDA]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[#B0B0B0] text-sm">
            © 2025 Harshwardhan Singh Panwar. All rights reserved.
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#B0B0B0] hover:text-[#6EACDA] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#B0B0B0] hover:text-[#6EACDA] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#B0B0B0] hover:text-[#6EACDA] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Built with love */}
          <div className="flex items-center gap-2 text-[#B0B0B0] text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and MERN Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;