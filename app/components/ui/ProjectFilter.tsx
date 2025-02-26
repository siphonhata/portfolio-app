'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-dark-100 dark:bg-dark-600 text-dark-500 dark:text-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900/30'
          }`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block', width: '100%' }}
          >
            {category}
          </motion.span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;