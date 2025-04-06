'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ISkill } from '@/app/types';

interface SkillsProps {
  skills: ISkill[];
}
 
const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Other'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter skills based on category
  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-800">
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">My <span className="text-primary-600 dark:text-primary-400">Skills</span></h2>
            <p className="max-w-2xl mx-auto text-dark-400 dark:text-dark-200">
              Technologies and tools I'm proficient in, continuously expanding my expertise to stay current with industry trends.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
  <AnimatePresence mode="wait">
    {filteredSkills.map((skill) => (
      <motion.div
        style={{
          backgroundColor: '#e2e8f0',
          padding: '0.5rem',
          width: '100%'
        }}
        key={skill.id}
        variants={itemVariants}
        layout
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-3 relative w-10 h-10">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                sizes="2.5rem"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-dark-500 rounded-full h-2.5 mb-2">
            <div className="h-2.5 rounded-full bg-primary-600">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                // className="h-full rounded-full"
                style={{ 
                  height: '100%', 
                  borderRadius: '9999px',
                  backgroundColor: 'currentColor' 
                }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-dark-400 dark:text-dark-200">
            <span>Proficiency</span>
            <span>{skill.proficiency}%</span>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>
      </div>
    </section>
  );
};

export default Skills;