import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      role: 'Freelance Web Developer',
      company: 'Rajputana Tours Pvt. Ltd.',
      location: 'Rajasthan, India',
      duration: 'Feb 2025 - Present',
      description: 'Led the development of scalable web applications using MERN stack, improving system performance by 40%.',
      achievements: [
        'Architected and delivered a high-traffic web applications',
        'Mentored a team of 2 junior developers',
        'Reduced application load time by 60% through optimization',
        'Implemented SEO Practices increasing Traffic gradually by 75%'
      ],
      techUsed: ['React', 'Node.js', 'MongoDB', 'WIX']
    },
    {
      role: 'Freelance Wix Developer',
      company: 'Raj India Tours',
      location: 'Remote',
      duration: 'AUG 2024 - Jan 2025',
      description: 'Developed responsive web applications and RESTful APIs, serving 10,000+ daily active users.',
      achievements: [
        'Built 18+ production-ready web Pages',
        'Integrated Wix Automation and third-party plugins',
        'Improved code quality by implementing testing frameworks',
        'Designed a visually appealing Front-End'
      ],
      techUsed: ['WIX','Wix Seo', 'Velo', 'Wix Editor', 'Node.Js']
    },
    {
      role: 'Junior Web Developer',
      company: 'VaultofCodes',
      location: 'Remote',
      duration: 'Jan 2023 - Jul 2023',
      description: 'Contributed to frontend development and API integration while learning modern web technologies.',
      achievements: [
        'Developed 15+ responsive web components',
        'Participated in 3 successful product launches',
        'Maintained 98% code quality standards',
        'Reduced bug reports by 35% through thorough testing'
      ],
      techUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Timeline Flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.2">
        <div className="timeline-flow"></div>
        <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/6 text-[#6EACDA]/5 text-lg font-mono">{'[ ]'}</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/6 text-[#6EACDA]/5 text-lg font-mono">{'⟨/⟩'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6EACDA] mb-4 animate-on-scroll">
            Work Experience
          </h2>
          <p className="text-xl text-[#B0B0B0] animate-on-scroll">
            My Professional Journey
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="timeline-line hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-on-scroll experience-item`}
              style={{
                '--item-index': index,
                '--side-multiplier': index % 2 === 0 ? 1 : -1
              } as React.CSSProperties}
            >
              {/* Enhanced Timeline Dot */}
              <div className="timeline-dot hidden md:block">
                <div className="timeline-dot-inner"></div>
                <div className="timeline-dot-pulse"></div>
              </div>

              {/* Content Card with Blob Shape */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="experience-blob-card group">
                  {/* Blob Background */}
                  <div className="experience-blob-bg"></div>
                  
                  {/* Header */}
                  <div className="mb-4 relative z-10">
                    <h3 className="text-xl font-semibold text-[#E0E0E0] group-hover:text-[#6EACDA] transition-colors duration-300 transform group-hover:translate-x-2">
                      {exp.role}
                    </h3>
                    <p className="text-[#6EACDA] font-medium text-lg">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#B0B0B0]">
                      <div className="flex items-center gap-1 experience-meta">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 experience-meta">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed group-hover:text-[#E0E0E0] transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#E0E0E0] mb-3 flex items-center gap-2">
                      <Award size={14} className="text-[#6EACDA]" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-[#B0B0B0] text-sm flex items-start gap-3 achievement-item group-hover:text-[#E0E0E0] transition-colors duration-300">
                          <div className="achievement-bullet"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#E0E0E0] mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techUsed.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="experience-tech-tag"
                          style={{ '--delay': `${techIndex * 100}ms` } as React.CSSProperties}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="experience-particle"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;