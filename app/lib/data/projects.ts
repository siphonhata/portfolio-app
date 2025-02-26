import { IProject } from "@/app/types";

const mockProjects: IProject[] = [

  {
    id: '019543a4-08ba-784a-9eaa-48cb5b96de6b',
    title: 'Financial Dashboard',
    description: 'A financial dashboard for managing invoices and customers.',
    thumbnail: '/assets/fin-dash.png',
    technologies: ['TypeScript', 'CCS', 'Tailwind', 'PostgreSQL'],
    category: ['Full Stack', 'Admin Dashboard'],
    slug: 'financial-dashboard',
    liveUrl: 'www.nextjs-dashboard-liard-kappa.vercel.app',
    sourceUrl: 'https://github.com/siphonhata/nextjs-dashboard',
    featured: false,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '019543a3-ab3c-782a-a1ca-a54e11de374a',
    title: 'Smart WebSync Web App',
    description: 'A responsive portfolio web application built with Next.js and Tailwind CSS.',
    thumbnail: '/assets/smart-websync.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: ['Frontend', 'UI/UX'],
    slug: 'smart-websync-app',
    liveUrl: 'www.smartwebsync.online',
    sourceUrl: 'https://github.com/siphonhata/dashboard-site',
    featured: false,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '019543ad-7cca-77f0-996a-845e34b96375',
    title: 'E-Commerce Store',
    description: 'An e-commerce store web application.',
    thumbnail: '/assets/ecommerce.png',
    technologies: ['.Net', 'Redux', 'React', 'CSS'],
    category: ['Full Stack', 'Frontend'],
    slug: 'ecommerce store',
    liveUrl: 'https://github.com/siphonhata/eCommerce',
    sourceUrl: 'https://github.com/siphonhata/eCommerce',
    featured: false,
    createdAt: '',
    updatedAt: ''
  },
 ];

export default mockProjects;
