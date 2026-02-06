'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    "Python Developer",
    "AI and ML Enthusiast",
    "Tech Explorer"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Available for work badge */}
            
            
            {/* Main heading */}
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#E5E7EB] leading-none">
                Hi, I'm
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#38BDF8] leading-tight">
                Rumal
              </h1>
            </div>
            
            {/* Subtitle - Rotating */}
            <div className="h-12 md:h-14 -mt-2 md:-mt-4 lg:-mt-6 relative">
              <h2 
                key={currentTitleIndex}
                className="text-2xl md:text-3xl font-semibold text-[#38BDF8] absolute inset-0 animate-slideUpFade flex items-center gap-1"
              >
                {titles[currentTitleIndex]}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full animate-dotBounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full animate-dotBounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full animate-dotBounce" style={{ animationDelay: '300ms' }}></span>
                </span>
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
              I'm a passionate  {' '}
              <span className="text-[#E5E7EB] font-semibold">Python Developer</span>,{' '}
              and aspiring
              <span className="text-[#E5E7EB] font-semibold"> AI & Machine Learning</span>{' '}
              Engineer. I focus on solving real-world problems through clean,
               efficient code and strong system design,
                with a commitment to continuous 
                learning and turning ideas into reliable software.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#38BDF8] text-[#0F172A] rounded-lg font-semibold text-base hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all duration-300"
              >
                View My Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#38BDF8]/50 text-[#E5E7EB] rounded-lg font-semibold text-base hover:bg-[#38BDF8]/10 hover:border-[#38BDF8] transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:rumal@example.com"
                className="w-12 h-12 flex items-center justify-center bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Animated border with dashed effect */}
              <div className="absolute inset-0 rounded-full" style={{
                background: 'conic-gradient(from 0deg, #38BDF8 0deg, transparent 90deg, transparent 270deg, #38BDF8 360deg)',
                padding: '3px',
                animation: 'spin 8s linear infinite',
              }}>
                <div className="w-full h-full rounded-full bg-[#0F172A]"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#38BDF8] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile picture container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[3px] border-[#38BDF8]/50 shadow-2xl shadow-[#38BDF8]/20">
                <Image
                  src="/profile.png"
                  alt="Rumal Egodawatta"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
            <span className="text-xs uppercase tracking-wider mb-2">Scroll Down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        @keyframes dotBounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
        
        :global(.animate-slideUpFade) {
          animation: slideUpFade 2s ease-in-out;
        }
        
        :global(.animate-dotBounce) {
          animation: dotBounce 1.4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
