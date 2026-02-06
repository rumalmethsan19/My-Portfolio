export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#E5E7EB] mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I'm a passionate developer with a love for creating innovative solutions
              to complex problems. With expertise in modern web technologies, I specialize
              in building scalable and performant applications.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              My journey in tech started several years ago, and since then, I've worked
              on various projects ranging from small business websites to large-scale
              enterprise applications.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg p-8 hover:border-[#38BDF8]/50 transition-all">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Experience</h3>
                <p className="text-[#94A3B8]">5+ years in web development</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Education</h3>
                <p className="text-[#94A3B8]">Bachelor's in Computer Science</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Location</h3>
                <p className="text-[#94A3B8]">Your City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
