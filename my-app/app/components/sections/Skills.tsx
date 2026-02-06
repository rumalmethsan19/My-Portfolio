import { skills } from '@/app/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#E5E7EB] mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg p-6 hover:border-[#38BDF8]/50 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 rounded-full text-sm font-medium hover:bg-[#38BDF8]/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
