export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I'm a passionate developer with a love for creating innovative solutions
              to complex problems. With expertise in modern web technologies, I specialize
              in building scalable and performant applications.
            </p>
            <p className="text-lg text-gray-700">
              My journey in tech started several years ago, and since then, I've worked
              on various projects ranging from small business websites to large-scale
              enterprise applications.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-700">5+ years in web development</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-700">Bachelor's in Computer Science</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Your City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
