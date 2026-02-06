import { projects } from '@/app/data/projects';
import Button from '../ui/Button';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#E5E7EB] mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1E293B] border border-[#38BDF8]/20 rounded-lg overflow-hidden hover:border-[#38BDF8]/50 hover:shadow-xl hover:shadow-[#38BDF8]/10 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-b border-[#38BDF8]/20 flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-all">
                <span className="text-[#38BDF8] text-6xl">{project.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} variant="primary" size="small">
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button href={project.githubUrl} variant="secondary" size="small">
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
