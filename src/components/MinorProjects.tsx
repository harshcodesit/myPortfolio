import React from 'react';
import { Github, Star, GitFork, Code2, Zap, Heart } from 'lucide-react';

const MinorProjects: React.FC = () => {
  const minorProjects = [
    {
      title: 'SwapReads',
      description: 'SwapReads is a sleek online platform for book lovers to exchange, discover, and share their favorite reads effortlessly.',
      stars: 321,
      forks: 696
    },
    {
      title: 'Postman-Challenge',
      description: 'The GitHub repo "Postman-Challenge" by GSSoC24 is a community-driven project focused on solving API challenges using Postman to enhance API testing skills.',
      stars: 224,
      forks: 290
    },
    {
      title: 'Streamlit Docker & Linux Control Panel',
      description: 'A Streamlit dashboard that connects to an Oracle VM via SSH, enabling users to run and manage Docker commands alongside general Linux commands through an intuitive, unified interface.',
      stars: 2,
      forks: 8
    },
    {
      title: 'WhisperVerse: Your Dark Muse in Two Lines',
      description: 'A machine learning poet that listens to your words and replies with hauntingly beautiful two-line dark poems, offering advice wrapped in mystery and mood.t',
      stars: 5,
      forks: 0
    },
    {
      title: 'Snap & Share',
      description: 'A full-stack web app that lets you capture photos, fetch your location, and instantly share both via WhatsApp—seamlessly blending browser features with real-time messaging.',
      stars: 3,
      forks: 2
    },
    {
      title: 'Experience-Based Salary Predictor',
      description: 'A Python project that predicts estimated salary based on the years of experience provided, using machine learning for accurate forecasts.',
      stars: 0,
      forks: 0
    }
  ];

  return (
    <section id="minor-projects" className="py-16 relative overflow-hidden minor-projects-section">
      {/* Enhanced Background */}
      <div className="minor-projects-bg"></div>
      
      {/* Background Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.2">
        <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/12 text-[#6EACDA]/4 text-lg font-mono">const open =</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/12 text-[#6EACDA]/4 text-lg font-mono">=&gt; source</div>
        <div className="animate-float-symbol-enhanced absolute top-1/2 left-5/6 text-[#6EACDA]/4 text-md font-mono">git.push()</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/6 right-1/3 text-[#6EACDA]/4 text-sm font-mono">await commit</div>
        <div className="animate-float-symbol-enhanced absolute top-2/3 left-1/4 text-[#6EACDA]/4 text-xs font-mono">npm publish</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/8 left-3/4 text-[#6EACDA]/4 text-xs font-mono">yarn build</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6EACDA] mb-3 animate-on-scroll minor-projects-title">
            <span className="animate-typewriter font-mono">Minor Projects & Open Source</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] animate-on-scroll font-mono">
            <span className="text-[#6EACDA]">//</span> Contributing to the Developer Community
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 minor-projects-grid">
          {minorProjects.map((project, index) => (
            <div
              key={project.title}
              className="minor-project-card group animate-on-scroll"
              style={{
                '--card-index': index,
                '--hover-rotation': `${(index % 2 === 0 ? 1 : -1) * 3}deg`
              } as React.CSSProperties}
            >
              {/* Card Background Glow */}
              <div className="minor-project-glow"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-6">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4 minor-project-header">
                  <div className="flex items-center gap-3">
                    <div className="minor-project-icon">
                      <Code2 size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#E0E0E0] group-hover:text-[#6EACDA] transition-colors duration-300 minor-project-title">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Floating Heart */}
                  <div className="minor-project-heart opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Heart size={16} className="text-red-400 animate-pulse" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed group-hover:text-[#E0E0E0] transition-colors duration-300 minor-project-description">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-[#B0B0B0] minor-project-stats">
                  <div className="flex items-center gap-1 minor-project-stat" data-label="stars">
                    <Star size={12} />
                    <span className="minor-project-stat-value">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 minor-project-stat" data-label="forks">
                    <GitFork size={12} />
                    <span className="minor-project-stat-value">{project.forks}</span>
                  </div>
                  <div className="ml-auto">
                    <Zap size={12} className="text-[#6EACDA] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Hover Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="minor-project-particle"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Explore Button */}
        <div className="text-center animate-on-scroll">
          <a
            href="https://github.com/harshcodesit"
            target="_blank"
            rel="noopener noreferrer"
            className="github-explore-btn group animate-on-scroll"
          >
            {/* Button Background Effects */}
            <div className="github-btn-bg"></div>
            <div className="github-btn-glow"></div>
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="github-btn-icon">
                <Github size={24} />
              </div>
              <div className="github-btn-text">
                <span className="block text-lg font-semibold font-mono">
                  <span>Explore</span> on GitHub
                </span>
                <span className="block text-sm opacity-80 font-mono">
                  <span className="text-[#6EACDA]">$</span> view --all --repos --contributions
                </span>
              </div>
              <div className="github-btn-arrow">
                <div className="w-6 h-6 border-2 border-current border-l-0 border-b-0 transform rotate-45 transition-transform duration-300 group-hover:translate-x-1"></div>
              </div>
            </div>

            {/* Floating Code Symbols */}
            <div className="github-btn-symbols">
              <span className="github-symbol github-symbol-1" style={{ animationDelay: '0.2s' }}>{'<>'}</span>
              <span className="github-symbol github-symbol-2" style={{ animationDelay: '0.4s' }}>{'{ }'}</span>
              <span className="github-symbol github-symbol-3" style={{ animationDelay: '0.6s' }}>$</span>
              <span className="github-symbol github-symbol-4" style={{ animationDelay: '0.8s' }}>;</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MinorProjects;