'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1E293B]/95 backdrop-blur-md shadow-lg shadow-[#38BDF8]/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-[#38BDF8] hover:text-[#0EA5E9] transition-colors"
          >
            RE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#E5E7EB] hover:text-[#38BDF8] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38BDF8] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-5 py-2.5 text-[#E5E7EB] border-2 border-[#38BDF8] rounded-lg hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all duration-300 font-medium"
            >
              Download Resume
            </a>
            
            {/* Let's Talk Button */}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-[#38BDF8] text-[#0F172A] rounded-lg hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all duration-300 font-medium"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#E5E7EB] hover:bg-[#1E293B] transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-[#1E293B] rounded-lg mt-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-[#E5E7EB] hover:text-[#38BDF8] hover:bg-[#0F172A]/50 transition-all rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-4 mt-4">
              <a
                href="/resume.pdf"
                download
                className="text-center py-2.5 text-[#E5E7EB] border-2 border-[#38BDF8] rounded-lg hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all font-medium"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-center py-2.5 bg-[#38BDF8] text-[#0F172A] rounded-lg hover:bg-[#0EA5E9] transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
