import { ISkill } from '@/app/types';
import { v7 as uuidv7 } from 'uuid'; 

const mockSkills: ISkill[] = [
  {
    id: uuidv7(), // Generating UUIDv7 for each skill
    name: 'React',
    icon: '/react.png',
    category: 'frontend',
    proficiency: 90,
  },
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
  {
    id: uuidv7(),
    name: 'Git',
    icon: '/git.png',
    category: 'version-control',
    proficiency: 95,
  },
  // Add more skills as needed
];

export default mockSkills;
