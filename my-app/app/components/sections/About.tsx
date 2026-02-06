export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#E5E7EB] mb-16 mt-4">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Name and Description */}
          <div className="space-y-8">
            {/* Name */}
            <div>
              <h3 className="text-4xl md:text-7xl font-bold text-[#E5E7EB] mb-2">
                Rumal Egodawaththa
              </h3>
              <div className="h-1 w-24 bg-[#38BDF8] rounded-full"></div>
            </div>
            
            {/* Description */}
            <div className="space-y-4 text-[#94A3B8] leading-relaxed">
              <p>
                I am Rumal, currently pursuing a <span className="text-[#E5E7EB] font-semibold">BSc in Management Information Systems</span>, where I am developing a strong foundation in technology, programming, and systems analysis. Over my years of study, I have cultivated skills in problem-solving, software development, and data-driven decision-making.
              </p>
              <p>
                I am passionate about learning new technologies and continuously expanding my knowledge in areas like <span className="text-[#38BDF8] font-semibold">programming</span>, <span className="text-[#38BDF8] font-semibold">AI & ML</span>, and <span className="text-[#38BDF8] font-semibold">web development</span>. With a growth-oriented mindset, I enjoy tackling challenges, applying analytical thinking, and delivering practical solutions.
              </p>
              <p>
                My goal is to build a meaningful career where I can leverage my technical expertise, creativity, and dedication to make a <span className="text-[#E5E7EB] font-semibold">positive impact</span> in the professional world.
              </p>
            </div>
          </div>
          
          {/* Right Side - Timeline Boxes */}
          <div className="space-y-6">
            {/* Box 1 */}
            <div className="group bg-[#1E293B] border border-[#38BDF8]/20 rounded-xl p-6 hover:border-[#38BDF8]/50 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg flex items-center justify-center text-2xl group-hover:bg-[#38BDF8]/20 transition-colors">
                  🎓
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#E5E7EB] mb-2 group-hover:text-[#38BDF8] transition-colors">
                    Started MIS Degree
                  </h4>
                  <p className="text-sm text-[#38BDF8] mb-2 font-medium">2023</p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    BSc in Management Information Systems at NSBM Green University, focusing on software development, systems analysis, and information technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="group bg-[#1E293B] border border-[#38BDF8]/20 rounded-xl p-6 hover:border-[#38BDF8]/50 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg flex items-center justify-center text-2xl group-hover:bg-[#38BDF8]/20 transition-colors">
                  💻
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#E5E7EB] mb-2 group-hover:text-[#38BDF8] transition-colors">
                    Started Learning Programming
                  </h4>
                  <p className="text-sm text-[#38BDF8] mb-2 font-medium">Journey Begins</p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Began learning programming fundamentals, including problem-solving, logic building, and core concepts using languages like Python and Java.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="group bg-[#1E293B] border border-[#38BDF8]/20 rounded-xl p-6 hover:border-[#38BDF8]/50 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg flex items-center justify-center text-2xl group-hover:bg-[#38BDF8]/20 transition-colors">
                  🤖
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#E5E7EB] mb-2 group-hover:text-[#38BDF8] transition-colors">
                    AI & Machine Learning Path
                  </h4>
                  <p className="text-sm text-[#38BDF8] mb-2 font-medium">Current Focus</p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Currently building a strong foundation in Python with the long-term goal of becoming an AI and Machine Learning Engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
