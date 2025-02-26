import { IProject } from '@/app/types';

const mockProjects: IProject[] = [
  {
      id: '1',
      title: 'Modern Portfolio Website',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
      thumbnail: '/assets/images/projects/project1.jpg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      category: ['Frontend', 'UI/UX'],
      slug: 'modern-portfolio-website',
      liveUrl: 'https://example.com',
      sourceUrl: 'https://github.com/yourusername/project1',
      featured: false,
      createdAt: '',
      updatedAt: ''
  },
  // Add more projects...
];

export default mockProjects;