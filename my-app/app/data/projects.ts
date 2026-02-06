export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with payment integration, product management, and user authentication.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '✅',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with forecasts, interactive maps, and location-based alerts.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '🌤️',
  },
  {
    id: 4,
    title: 'Social Media App',
    description:
      'A social networking platform with posts, comments, likes, and real-time messaging.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '💬',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A modern portfolio website showcasing projects, skills, and professional experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '🎨',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description:
      'A fitness tracking app with workout plans, progress monitoring, and health statistics.',
    technologies: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: '💪',
  },
];
