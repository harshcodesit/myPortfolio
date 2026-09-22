import React from 'react';
import { ExternalLink, Github, Code, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Unplanned – Hyperlocal Micro-Adventure Platform',
      description: 'Architected a responsive full-stack discovery platform featuring geospatial radius querying ($near/GeoJSON) to aggregate real-time spontaneous local meetups for 1,000+ active users. Engineered production-hardened REST APIs with dual-layer JWT authentication, cross-origin security headers (Helmet), payload compression, and Cloudinary media.',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
      metrics: {
        code: '1,000+ Users',
        features: 'GeoJSON $near',
        performance: 'Dual JWT Auth'
      },
      links: {
        github: 'https://github.com/harshcodesit/Unplanned',
        live: 'https://unplanned-eight.vercel.app/'
      }
    },
    {
      title: 'React JWT Guard | NPM Package',
      description: 'Authored and published a zero-dependency, type-safe React auth utility (<1KB) featuring RFC 7519 Base64URL decoding, real-time expiration lifecycle monitoring, and declarative route guarding, verified via an automated Vitest test suite.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'JavaScript', 'Rollup', 'NPM', 'Vitest'],
      metrics: {
        code: '<1KB Zero-Dep',
        features: 'RFC 7519 Auth',
        performance: 'Vitest Suite'
      },
      links: {
        github: 'https://github.com/harshcodesit/react-jwt-guard-npm',
        live: 'https://www.npmjs.com/package/react-jwt-guard'
      }
    },
    {
      title: 'Swap Reads | Open Source Contribution | GSSOC24',
      description: 'Collaborated in GirlScript Summer of Code (GSSoC) by engineering 12+ modular, accessible UI components and interactive micro-animations across multiple pull requests. Achieved official program badges by accumulating 570 contribution points through bug fixes, and cross-browser UI optimizations.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      technologies: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Git', 'GitHub'],
      metrics: {
        code: '570 Points',
        features: '12+ UI Components',
        performance: 'GSSoC Badges'
      },
      links: {
        github: 'https://github.com/harshcodesit/SwapReads',
        live: 'https://swapreads.vercel.app'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.3">
        <div className="animate-float-symbol-enhanced absolute top-1/6 left-1/12 text-[#6EACDA]/5 text-2xl font-mono">{'>>'}</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-2/3 right-1/12 text-[#6EACDA]/5 text-2xl font-mono">.then()</div>
        <div className="animate-float-symbol-enhanced absolute top-1/2 left-5/6 text-[#6EACDA]/5 text-2xl font-mono">{'</'}</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/4 right-1/3 text-[#6EACDA]/5 text-2xl font-mono">{'() =>'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6EACDA] mb-4 animate-on-scroll">
            Featured Projects
          </h2>
          <p className="text-xl text-[#B0B0B0] animate-on-scroll">
            The Proof is in the Code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group project-blob-card animate-on-scroll"
              style={{
                '--blob-rotation': `${index * 120}deg`,
                '--hover-tilt': `${(index % 2 === 0 ? 1 : -1) * 8}deg`
              } as React.CSSProperties}
            >
              {/* Blob Background */}
              <div className="blob-background"></div>

              {/* Project Image */}
              <div className="relative overflow-hidden blob-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/90 via-[#021526]/50 to-transparent group-hover:from-[#021526]/70 transition-all duration-500"></div>

                {/* Floating Code Symbol */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  <div className="text-[#6EACDA] text-lg font-mono animate-pulse bg-[#021526]/80 px-2 py-1 rounded">
                    {'>>'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-[#E0E0E0] mb-3 group-hover:text-[#6EACDA] transition-colors duration-300 transform group-hover:translate-x-2">
                  {project.title}
                </h3>

                <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed group-hover:text-[#E0E0E0] transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="tech-tag"
                      style={{ '--delay': `${techIndex * 100}ms` } as React.CSSProperties}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="flex items-center gap-1 text-[#B0B0B0] group-hover:text-[#6EACDA] transition-colors duration-300 metric-item">
                    <Code size={16} />
                    <span>{project.metrics.code}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#B0B0B0] group-hover:text-[#6EACDA] transition-colors duration-300 metric-item">
                    <Users size={16} />
                    <span>{project.metrics.features}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#B0B0B0] group-hover:text-[#6EACDA] transition-colors duration-300 metric-item">
                    <Zap size={16} />
                    <span>{project.metrics.performance}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary flex-1"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                    <div className="btn-glow"></div>
                  </a>

                  {project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary flex-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Site</span>
                      <div className="btn-glow"></div>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="hover-particle"
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
      </div>
    </section>
  );
};

export default Projects;