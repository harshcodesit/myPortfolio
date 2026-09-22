import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      role: 'Wix Developer and Designer',
      company: 'Raj India Tours',
      location: 'Remote',
      duration: 'Aug 2025 - Nov 2025',
      description: 'Designed and shipped custom client-facing web solutions tailored to travel domain needs as a Freelance developer.',
      achievements: [
        'Designed and shipped custom client-facing web solutions tailored to travel domain needs',
        'Decreased site bounce rate by 50% through UX and performance optimizations',
        'Implemented search engine optimization (SEO) best practices',
        'Drove an 87% increase in organic web traffic'
      ],
      techUsed: ['Wix', 'Velo', 'JavaScript', 'SEO', 'Responsive Design']
    },
    {
      role: 'Open Source Contributor',
      company: 'GirlScript Summer of Code (GSSoC24)',
      location: 'Remote',
      duration: 'May 2024 - Aug 2024',
      description: 'Contributed to open-source codebases during the GirlScript Summer of Code program.',
      achievements: [
        'Engineered 12+ modular, accessible UI components and interactive micro-animations',
        'Achieved official program badges by accumulating 570 contribution points',
        'Authored clean bug fixes and cross-browser UI optimizations across multiple PRs',
        'Maintained strict accessibility and responsive design standards'
      ],
      techUsed: ['JavaScript', 'HTML5', 'Tailwind CSS', 'Git', 'GitHub']
    },
    {
      role: 'Industrial Trainee - Cloud & DevOps',
      company: 'Linux World',
      location: 'Jaipur, Rajasthan',
      duration: '2025',
      description: 'Completed comprehensive industrial training focused on cloud infrastructure and DevOps practices.',
      achievements: [
        'Trained on Linux command line administration and system management',
        'Engineered containerized application environments with Docker (Basics)',
        'Worked with AWS cloud computing and storage services (EC2, S3)',
        'Conducted API validations and integration testing using Postman'
      ],
      techUsed: ['Linux', 'AWS (EC2, S3)', 'Docker (Basics)', 'Git', 'Postman']
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