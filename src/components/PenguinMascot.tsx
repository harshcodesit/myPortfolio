import React, { useState, useEffect, useMemo } from 'react';

const PenguinMascot: React.FC = () => {
  const [showSpeech, setShowSpeech] = useState(false);
  const [speechText, setSpeechText] = useState('Ready to Build!');
  const [isWaving, setIsWaving] = useState(true);
  
  const speechOptions = useMemo(() => [
    'Ready to Build!',
    'Let\'s Code!',
    'Hello World!',
    'MERN Stack!',
    'Full Stack!',
    'Debug Mode!',
    'Git Push!',
    'npm install!'
  ], []);

  useEffect(() => {
    const speechInterval = setInterval(() => {
      if (showSpeech) {
        const randomText = speechOptions[Math.floor(Math.random() * speechOptions.length)];
        setSpeechText(randomText);
      }
    }, 3000);

    // Auto-show speech bubble periodically
    const autoSpeechInterval = setInterval(() => {
      if (!showSpeech) {
        setShowSpeech(true);
        setTimeout(() => setShowSpeech(false), 4000);
      }
    }, 8000);

    return () => {
      clearInterval(speechInterval);
      clearInterval(autoSpeechInterval);
    };
  }, [showSpeech, speechOptions]);

  return (
    <div className="relative flex items-center justify-center h-full penguin-container">
      {/* Animated Speech Bubble */}
      <div 
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${
          showSpeech 
            ? 'opacity-100 -translate-y-32 scale-100 rotate-0' 
            : 'opacity-0 -translate-y-24 scale-95 rotate-3'
        }`}
      >
        <div className="bg-[#6EACDA] text-[#021526] px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap shadow-2xl relative animate-bounce-gentle">
          {speechText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#6EACDA]"></div>
          
          {/* Blinking cursor effect */}
          <span className="ml-1 animate-pulse text-[#021526] font-mono">_</span>
        </div>
      </div>

      {/* Enhanced Penguin SVG */}
      <div 
        className="cursor-pointer transition-all duration-300 hover:scale-110 group penguin-body"
        onMouseEnter={() => setShowSpeech(true)}
        onMouseLeave={() => setShowSpeech(false)}
        onClick={() => {
          setShowSpeech(!showSpeech);
          setIsWaving(!isWaving);
        }}
      >
        <svg 
          width="280" 
          height="300" 
          viewBox="0 0 280 300" 
          className="drop-shadow-2xl filter hover:drop-shadow-3xl transition-all duration-300"
        >
          {/* Penguin Shadow */}
          <ellipse cx="140" cy="280" rx="80" ry="18" fill="#021526" opacity="0.4" className="animate-pulse-shadow"/>
          
          {/* Penguin Body */}
          <ellipse cx="140" cy="180" rx="75" ry="85" fill="#2C3E50" stroke="#1A252F" strokeWidth="3" className="penguin-main-body"/>
          
          {/* Penguin Belly */}
          <ellipse cx="140" cy="185" rx="45" ry="65" fill="#F8F9FA" className="penguin-belly"/>
          
          {/* Penguin Head */}
          <ellipse cx="140" cy="100" rx="55" ry="50" fill="#2C3E50" stroke="#1A252F" strokeWidth="3" className="penguin-head"/>
          
          {/* Eyes with enhanced animation */}
          <circle cx="120" cy="95" r="10" fill="#FFFFFF" className="penguin-eye"/>
          <circle cx="160" cy="95" r="10" fill="#FFFFFF" className="penguin-eye"/>
          <circle cx="120" cy="95" r="6" fill="#2C3E50" className="penguin-pupil animate-eye-blink"/>
          <circle cx="160" cy="95" r="6" fill="#2C3E50" className="penguin-pupil animate-eye-blink"/>
          <circle cx="122" cy="92" r="2" fill="#FFFFFF" className="penguin-eye-shine"/>
          <circle cx="162" cy="92" r="2" fill="#FFFFFF" className="penguin-eye-shine"/>
          
          {/* Beak with subtle animation */}
          <polygon points="140,105 130,118 150,118" fill="#FF8C42" className="penguin-beak group-hover:animate-pulse"/>
          
          {/* Left Wing (Static) */}
          <ellipse cx="85" cy="160" rx="20" ry="45" fill="#2C3E50" stroke="#1A252F" strokeWidth="2" className="penguin-wing-left"/>
          
          {/* Right Wing (Animated Waving) */}
          <g className={`penguin-wing-right ${isWaving ? 'animate-wave-continuous' : ''}`} style={{ transformOrigin: '195px 160px' }}>
            <ellipse cx="195" cy="160" rx="20" ry="45" fill="#2C3E50" stroke="#1A252F" strokeWidth="2"/>
          </g>
          
          {/* Feet with shadow */}
          <ellipse cx="115" cy="255" rx="16" ry="12" fill="#FF8C42" className="penguin-foot"/>
          <ellipse cx="165" cy="255" rx="16" ry="12" fill="#FF8C42" className="penguin-foot"/>
          
          {/* Cheek Blush */}
          <circle cx="95" cy="105" r="9" fill="#FFB6C1" opacity="0.8" className="animate-pulse-gentle"/>
          <circle cx="185" cy="105" r="9" fill="#FFB6C1" opacity="0.8" className="animate-pulse-gentle"/>
          
          {/* Penguin Hat */}
          <ellipse cx="140" cy="65" rx="35" ry="10" fill="#6EACDA" className="penguin-hat-brim"/>
          <ellipse cx="140" cy="50" rx="30" ry="18" fill="#6EACDA" className="penguin-hat-main"/>
          <circle cx="140" cy="35" r="7" fill="#E0E0E0" className="penguin-hat-pom animate-bounce-gentle"/>
          
          {/* Floating hearts when hovered */}
          <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 penguin-hearts">
            <text x="70" y="140" fill="#FF69B4" fontSize="18" className="animate-float-heart">♥</text>
            <text x="210" y="120" fill="#FF69B4" fontSize="14" className="animate-float-heart animation-delay-200">♥</text>
            <text x="230" y="150" fill="#FF69B4" fontSize="12" className="animate-float-heart animation-delay-400">♥</text>
          </g>
          
          {/* Code symbols floating around penguin */}
          <g className="penguin-code-symbols opacity-30">
            <text x="50" y="80" fill="#6EACDA" fontSize="16" fontFamily="JetBrains Mono" className="animate-float-symbol">{'{}'}</text>
            <text x="250" y="200" fill="#6EACDA" fontSize="14" fontFamily="JetBrains Mono" className="animate-float-symbol-reverse">{'<>'}</text>
            <text x="60" y="220" fill="#6EACDA" fontSize="12" fontFamily="JetBrains Mono" className="animate-float-symbol">$</text>
            <text x="240" y="100" fill="#6EACDA" fontSize="10" fontFamily="JetBrains Mono" className="animate-float-symbol-reverse">;</text>
          </g>
        </svg>
      </div>

      {/* Floating particles around penguin */}
      <div className="absolute inset-0 pointer-events-none penguin-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6EACDA] rounded-full animate-float-particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PenguinMascot;