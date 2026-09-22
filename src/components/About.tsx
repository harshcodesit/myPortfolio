import React from 'react';
import { Users, Award, TrendingUp, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={32} />, value: '1,000+', label: 'Handeled Users (Unplanned)' },
    { icon: <Award size={32} />, value: '570', label: 'GSSoC24 Contribution Points' },
    { icon: <TrendingUp size={32} />, value: '87%', label: 'Organic Traffic Increase' },
    { icon: <GraduationCap size={32} />, value: '8.68', label: 'B.Tech CS CGPA' }
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
            MERN Stack Developer & Open-Source Contributor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                Hello! I'm <span className="text-[#6EACDA] font-semibold">Harshwardhan Singh Panwar</span>,
                a MERN Stack Developer with expertise in React.js, TypeScript, Node.js, Express, and MongoDB.
                I bring a proven track record in building production-grade web applications, architecting secure
                RESTful APIs, and implementing efficient SQL/NoSQL data architectures.
              </p>

              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                Passionate about performant web architectures, agile delivery, and open-source development,
                I specialize in turning complex requirements into scalable, robust systems. From engineering
                geospatial radius querying for 1,000+ active users to publishing zero-dependency NPM packages,
                I prioritize clean code, type safety, and real-world reliability.
              </p>

              <p className="text-lg text-[#B0B0B0] leading-relaxed animate-on-scroll">
                When I'm not architecting full-stack applications, you'll find me contributing to open-source
                programs like GirlScript Summer of Code (GSSoC), optimizing client web solutions for 50% bounce
                rate decreases and 87% organic traffic growth, or exploring modern cloud workflows.
              </p>

              <div className="pt-4 animate-on-scroll">
                <h3 className="text-xl font-semibold text-[#E0E0E0] mb-3">Core Competencies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Full-stack MERN & TypeScript application development</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Production-hardened REST APIs with dual-layer JWT authentication</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>SQL & NoSQL architectures (MongoDB, PostgreSQL, MySQL, DynamoDB)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#B0B0B0] animate-on-scroll">
                    <div className="w-2 h-2 bg-[#6EACDA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Open-source collaboration, modular UI design, and SEO optimization</span>
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
                Professional Focus
              </h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed italic">
                "Passionate about performant web architectures, agile delivery, and open-source development. Building production-grade, secure, and accessible applications with clean, verifiable results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;