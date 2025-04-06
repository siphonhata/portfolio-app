import { ISkill } from '@/app/types';
import { v7 as uuidv7 } from 'uuid'; 

const mockSkills: ISkill[] = [
  {
    id: uuidv7(),
    name: 'Object-oriented programming',
    icon: '/oop.png',  // Icon class string
    category: 'Programming',
    proficiency: 85,
  },
  {
    id: uuidv7(),
    name: 'Version control systems (Git/SVN)',
    icon: '/git.png',  // Icon class string
    category: 'version-control',
    proficiency: 90,
  },
  {
    id: uuidv7(),
    name: 'Systems architecture and design',
    icon: '/design.jpeg',  // Icon class string
    category: 'design',
    proficiency: 80,
  },
  {
    id: uuidv7(),
    name: 'Linux',
    icon: '/linux.jpeg',  // Icon class string
    category: 'Operating Systems',
    proficiency: 95,
  },
  {
    id: uuidv7(),
    name: 'Networking/distributed systems',
    icon: '/network.png',  // Icon class string
    category: 'Networking',
    proficiency: 75,
  },
  {
    id: uuidv7(),
    name: 'Agile methodology',
    icon: '/agile.png',  // Icon class string
    category: 'Project Management',
    proficiency: 80,
  },
  {
    id: uuidv7(),
    name: 'Elixir/Phoenix',
    icon: '/elixir.jpeg',  // Icon class string
    category: 'backend',
    proficiency: 90,
  },
  {
    id: uuidv7(),
    name: 'Database management (PostgreSQL/MySQL)',
    icon: '/db.png',  // Icon class string
    category: 'database',
    proficiency: 85,
  },
  {
    id: uuidv7(),
    name: 'API design and development',
    icon: '/api.jpeg',  // Icon class string
    category: 'API Development',
    proficiency: 90,
  },
  {
    id: uuidv7(),
    name: 'Monitoring & Alerting Tools',
    icon: '/monitor.png',  // Icon class string
    category: 'Monitoring',
    proficiency: 80,
  },
  {
    id: uuidv7(),
    name: 'Containerization Technologies (Docker, Kubernetes)',
    icon: '/container.png',  // Icon class string
    category: 'DevOps',
    proficiency: 85,
  },
  {
    id: uuidv7(),
    name: 'CI/CD Pipelines',
    icon: '/cicd.png',  // Icon class string
    category: 'DevOps',
    proficiency: 85,
  },
  // {
  //   id: uuidv7(), // Generating UUIDv7 for each skill
  //   name: 'React',
  //   icon: '/react.png',
  //   category: 'frontend',
  //   proficiency: 90,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'Node.js',
  //   icon: '/assets/images/skills/node.svg',
  //   category: 'backend',
  //   proficiency: 80,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'Python',
  //   icon: '/assets/images/skills/python.svg',
  //   category: 'backend',
  //   proficiency: 75,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'SQL',
  //   icon: '/assets/images/skills/sql.svg',
  //   category: 'database',
  //   proficiency: 90,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'Git',
  //   icon: '/git.png',
  //   category: 'version-control',
  //   proficiency: 95,
  // },
  // Add more skills as needed
];

export default mockSkills;
