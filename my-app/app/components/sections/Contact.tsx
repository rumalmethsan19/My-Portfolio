'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#E5E7EB] mb-12">
          Get In Touch
        </h2>
        <div className="bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg shadow-lg p-8">
          <p className="text-lg text-[#94A3B8] text-center mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#E5E7EB] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#0F172A] border border-[#38BDF8]/30 rounded-lg text-[#E5E7EB] focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent placeholder-[#94A3B8]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#E5E7EB] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#0F172A] border border-[#38BDF8]/30 rounded-lg text-[#E5E7EB] focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent placeholder-[#94A3B8]"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#E5E7EB] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-[#0F172A] border border-[#38BDF8]/30 rounded-lg text-[#E5E7EB] focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent placeholder-[#94A3B8]"
                placeholder="Your message here..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#38BDF8] text-[#0F172A] rounded-lg font-semibold hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/50 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
