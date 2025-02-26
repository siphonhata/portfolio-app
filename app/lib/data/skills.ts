import { ISkill } from '@/app/types';
import { v7 as uuidv7 } from 'uuid'; // Importing UUIDv7

const mockSkills: ISkill[] = [
  {
    id: uuidv7(), // Generating UUIDv7 for each skill
    name: 'React',
    icon: '/assets/react.png',
    category: 'frontend',
    proficiency: 90,
  },
  // {
  //   id: uuidv7(),
  //   name: 'Vue.js',
  //   icon: '/assets/images/skills/vue.svg',
  //   category: 'frontend',
  //   proficiency: 85,
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
  //   name: 'Express.js',
  //   icon: '/assets/images/skills/express.svg',
  //   category: 'backend',
  //   proficiency: 85,
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
  //   name: 'JavaScript',
  //   icon: '/assets/images/skills/javascript.svg',
  //   category: 'frontend',
  //   proficiency: 95,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'TypeScript',
  //   icon: '/assets/images/skills/typescript.svg',
  //   category: 'frontend',
  //   proficiency: 85,
  // },
  // {
  //   id: uuidv7(),
  //   name: 'MongoDB',
  //   icon: '/assets/images/skills/mongodb.svg',
  //   category: 'database',
  //   proficiency: 80,
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
  //   icon: '/assets/images/skills/git.svg',
  //   category: 'version-control',
  //   proficiency: 95,
  // },
  // Add more skills as needed
];

export default mockSkills;
