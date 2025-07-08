import React from 'react';
import { Code2, Coffee, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Code2 size={32} />, value: '20+', label: 'Projects Completed' },
    { icon: <Coffee size={32} />, value: '1000+', label: 'Cups of Coffee' },
    { icon: <Lightbulb size={32} />, value: '9+', label: 'Months Experience' },
    { icon: <Target size={32} />, value: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Floating Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.4">
        <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/12 text-[#6EACDA]/5 text-3xl font-mono">function()</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/12 text-[#6EACDA]/5 text-2xl font-mono">{'=> { }'}</div>
        <div className="animate-float-symbol-enhanced absolute top-1/2 left-5/6 text-[#6EACDA]/5 text-xl font-mono">async</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/6 right-1/3 text-[#6EACDA]/5 text-lg font-mono">await</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6EACDA] mb-4 animate-on-scroll">
            <span className="animate-typewriter">About Me</span>
          </h2>
          <p className="text-xl text-[#B0B0B0] animate-on-scroll">
            Passionate Developer, Problem Solver, Innovation Driver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                Hello! I'm <span className="text-[#6EACDA] font-semibold">Harshwardhan Singh Panwar</span>, 
                a passionate Full Stack Web Developer with a deep love for creating robust, scalable, 
                and user-centric applications using the MERN stack.
              </p>
              
              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                My journey in software development began with curiosity and has evolved into a mission 
                to build meaningful digital experiences. I specialize in transforming complex problems 
                into elegant solutions that users love and businesses rely on.
              </p>

              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in writing clean, 
                maintainable code and following best practices that stand the test of time.
              </p>

              <div className="pt-4 animate-on-scroll">
                <h3 className="text-xl font-semibold text-[#E0E0E0] mb-3">What I Bring to the Table</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Full-stack expertise with modern web technologies</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strong focus on performance optimization and scalability</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborative mindset with excellent communication skills</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continuous learning and adaptation to emerging technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-[#0C0C0C]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-lg p-6 text-center hover:border-[#6EACDA]/40 transition-all duration-300 hover:transform hover:scale-105 group animate-on-scroll`}
                >
                  <div className="text-[#6EACDA] mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#E0E0E0] mb-1 group-hover:text-[#6EACDA] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#B0B0B0]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy Box */}
            <div className="mt-8 bg-[#0C0C0C]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-lg p-6 animate-on-scroll">
              <h3 className="text-lg font-semibold text-[#E0E0E0] mb-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6EACDA] rounded-full"></div>
                My Philosophy
              </h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed italic">
                "Code is poetry in motion. Every line should tell a story, every function should serve a purpose, 
                and every project should make a difference. I don't just write code – I craft digital experiences."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;