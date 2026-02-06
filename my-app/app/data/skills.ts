export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Python',
      'Django',
      'REST API',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Vercel',
      'VS Code',
      'Figma',
      'Postman',
    ],
  },
];
