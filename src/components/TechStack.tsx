import React, { useState } from 'react';
import { Code, Server, Database, PenTool as Tool, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techGroups = [
    {
      title: 'Frontend',
      icon: <Code size={28} />,
      color: '#61DAFB',
      technologies: [
        { name: 'React.js', level: 90, description: 'Component architecture, hooks & lifecycle' },
        { name: 'TypeScript', level: 85, description: 'Type-safe scalable application development' },
        { name: 'Vite', level: 88, description: 'Next-gen fast frontend tooling & bundling' },
        { name: 'React Router & Context API', level: 88, description: 'Declarative routing & global state management' },
        { name: 'HTML5 & CSS3', level: 92, description: 'Responsive web design, modern UI & accessibility' }
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={28} />,
      color: '#68A063',
      technologies: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript runtime & event loop' },
        { name: 'Express.js', level: 88, description: 'Web application framework & modular routes' },
        { name: 'RESTful APIs', level: 90, description: 'Production-hardened API architecture' },
        { name: 'JWT Authentication', level: 86, description: 'Dual-layer token auth & secure lifecycle' },
        { name: 'Middleware Architecture', level: 85, description: 'Helmet security, compression & error handling' }
      ]
    },
    {
      title: 'Databases & Languages',
      icon: <Database size={28} />,
      color: '#F7DF1E',
      technologies: [
        { name: 'MongoDB (Mongoose)', level: 88, description: 'NoSQL document modeling & GeoJSON geospatial queries' },
        { name: 'PostgreSQL & MySQL', level: 80, description: 'Relational data architectures & SQL querying' },
        { name: 'AWS DynamoDB', level: 75, description: 'Managed cloud NoSQL database' },
        { name: 'JavaScript (ES6+)', level: 92, description: 'Modern asynchronous programming & closures' },
        { name: 'SQL', level: 82, description: 'Relational queries, joins & schema design' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Tool size={28} />,
      color: '#0db7ed',
      technologies: [
        { name: 'AWS (EC2, S3)', level: 78, description: 'Cloud compute, hosting & secure object storage' },
        { name: 'Git & GitHub', level: 90, description: 'Version control, branching & open-source PRs' },
        { name: 'Docker (Basics)', level: 75, description: 'Containerization & reproducible environments' },
        { name: 'Postman', level: 88, description: 'API testing, collection runner & debugging' },
        { name: 'Vercel & Render', level: 85, description: 'Continuous deployment & cloud hosting' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.6">
        <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/8 text-[#6EACDA]/6 text-5xl font-mono developer-font">{'</>'}</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/8 text-[#6EACDA]/8 text-4xl font-mono">const</div>
        <div className="animate-float-symbol-enhanced absolute top-1/2 left-3/4 text-[#6EACDA]/5 text-3xl font-mono">function</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/6 right-1/2 text-[#6EACDA]/7 text-4xl font-mono">{'{}'}</div>
        <div className="animate-float-symbol-enhanced absolute bottom-1/6 left-1/4 text-[#6EACDA]/6 text-2xl font-mono">import</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-5/6 right-1/6 text-[#6EACDA]/8 text-3xl font-mono">export</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6EACDA] mb-4 animate-on-scroll developer-font">
            Tech Stack
          </h2>
          <p className="text-xl text-[#B0B0B0] animate-on-scroll font-mono">
            <span className="text-[#6EACDA]">$</span> cat verified_skills.json
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className={`bg-[#0C0C0C]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-lg p-6 hover:border-[#6EACDA]/40 transition-all duration-300 card-hover animate-on-scroll`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#6EACDA] group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#E0E0E0] developer-font">{group.title}</h3>
                <div className="ml-auto">
                  <Zap size={16} className="text-[#6EACDA] animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                {group.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group cursor-pointer animate-on-scroll"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E0E0E0] group-hover:text-[#6EACDA] transition-colors duration-300 font-mono">
                        {tech.name}
                      </span>
                      <span className="text-[#B0B0B0] text-sm font-mono">
                        {tech.level}%
                      </span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="w-full bg-[#021526] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6EACDA] to-[#4A90E2] rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: hoveredTech === tech.name ? `${tech.level}%` : '0%',
                        }}
                      />
                    </div>

                    {/* Tech Description */}
                    <div className={`mt-2 text-xs text-[#B0B0B0] transition-all duration-300 overflow-hidden ${hoveredTech === tech.name ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      {tech.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Symbols for Each Category */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="text-[#6EACDA] text-lg font-mono developer-font animate-pulse">
                  {group.title === 'Frontend' && '</>'}
                  {group.title === 'Backend' && 'API'}
                  {group.title === 'Databases & Languages' && '{ }'}
                  {group.title === 'Cloud & DevOps' && 'AWS'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
          {[
            { number: '1,000+', label: 'Users Handeled', symbol: '</>' },
            { number: '570', label: 'GSSoC Points Earned', symbol: '{}' },
            { number: '50%', label: 'Bounce Rate Decrease', symbol: '$' },
            { number: '87%', label: 'Organic Traffic Growth', symbol: '↗' }
          ].map((stat) => (
            <div key={stat.label} className="text-center group animate-on-scroll">
              <div className="text-2xl font-bold text-[#6EACDA] developer-font mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-[#B0B0B0] text-sm font-mono">
                {stat.label}
              </div>
              <div className="text-[#6EACDA]/30 text-lg font-mono mt-1 group-hover:text-[#6EACDA]/60 transition-colors duration-300">
                {stat.symbol}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;