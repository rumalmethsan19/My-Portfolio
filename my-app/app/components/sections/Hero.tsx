import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          Full Stack Developer & Designer
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          I build beautiful, functional, and user-friendly websites and applications.
          Passionate about creating amazing digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
