import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background CLI Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax-element" data-speed="0.4">
        <div className="animate-float-symbol-enhanced absolute top-1/4 left-1/8 text-[#6EACDA]/5 text-2xl font-mono">$</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-3/4 right-1/8 text-[#6EACDA]/5 text-2xl font-mono">_</div>
        <div className="animate-float-symbol-enhanced absolute top-1/2 left-3/4 text-[#6EACDA]/5 text-lg font-mono">{'~'}</div>
        <div className="animate-float-symbol-reverse-enhanced absolute top-1/6 right-1/3 text-[#6EACDA]/5 text-lg font-mono">{'>'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6EACDA] mb-4 animate-on-scroll">
            <span className="animate-typewriter">Get in Touch</span>
          </h2>
          <p className="text-xl text-[#B0B0B0] animate-on-scroll">
            Let's Build Something Amazing Together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-[#0C0C0C]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-on-scroll">
                  <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-[#021526] border border-[#6EACDA]/30 rounded-lg px-4 py-3 text-[#E0E0E0] placeholder-[#B0B0B0] focus:outline-none focus:border-[#6EACDA] focus:ring-2 focus:ring-[#6EACDA]/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -top-2 -right-2 text-[#6EACDA] text-xs font-mono animate-pulse">
                        $
                      </div>
                    )}
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-[#021526] border border-[#6EACDA]/30 rounded-lg px-4 py-3 text-[#E0E0E0] placeholder-[#B0B0B0] focus:outline-none focus:border-[#6EACDA] focus:ring-2 focus:ring-[#6EACDA]/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -top-2 -right-2 text-[#6EACDA] text-xs font-mono animate-pulse">
                        _
                      </div>
                    )}
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <label htmlFor="message" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full bg-[#021526] border border-[#6EACDA]/30 rounded-lg px-4 py-3 text-[#E0E0E0] placeholder-[#B0B0B0] focus:outline-none focus:border-[#6EACDA] focus:ring-2 focus:ring-[#6EACDA]/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -top-2 -right-2 text-[#6EACDA] text-xs font-mono animate-pulse">
                        {'>>'}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6EACDA] text-[#021526] py-3 px-6 rounded-lg font-semibold hover:bg-[#6EACDA]/90 focus:outline-none focus:ring-2 focus:ring-[#6EACDA]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-on-scroll"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-[#021526] border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-[#0C0C0C]/50 backdrop-blur-sm border border-[#6EACDA]/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 animate-on-scroll">
                  <div className="bg-[#6EACDA]/20 p-3 rounded-lg">
                    <Mail className="text-[#6EACDA]" size={24} />
                  </div>
                  <div>
                    <p className="text-[#E0E0E0] font-medium">Email</p>
                    <a 
                      href="mailto:harshwardhan9352@example.com" 
                      className="text-[#B0B0B0] hover:text-[#6EACDA] transition-colors"
                    >
                      harshwardhan9352@example.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#6EACDA]/20 pt-6 animate-on-scroll">
                  <h4 className="text-[#E0E0E0] font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/harshcodesit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6EACDA]/20 p-3 rounded-lg hover:bg-[#6EACDA]/30 transition-colors group"
                    >
                      <Github className="text-[#6EACDA] group-hover:scale-110 transition-transform" size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/in/harshwardhan-singh-panwar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6EACDA]/20 p-3 rounded-lg hover:bg-[#6EACDA]/30 transition-colors group"
                    >
                      <Linkedin className="text-[#6EACDA] group-hover:scale-110 transition-transform" size={24} />
                    </a>
                    <a
                      href="https://twitter.com/harshwardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6EACDA]/20 p-3 rounded-lg hover:bg-[#6EACDA]/30 transition-colors group"
                    >
                      <Twitter className="text-[#6EACDA] group-hover:scale-110 transition-transform" size={24} />
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#6EACDA]/20 pt-6 animate-on-scroll">
                  <div className="text-[#B0B0B0] text-sm font-mono">
                    <div className="mb-2">
                      <span className="text-[#6EACDA]">$</span> whoami
                    </div>
                    <div className="pl-4 text-[#E0E0E0]">
                      Full Stack Developer
                    </div>
                    <div className="mt-2">
                      <span className="text-[#6EACDA]">$</span> echo "Always ready to build something amazing!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;