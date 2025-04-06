'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '@/app/types';
import ProjectFilter from '@/app/components/ui/ProjectFilter';

interface ProjectsProps {
  projects: IProject[];
  limit?: number;
  showFilter?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({
  projects,
  limit = 0,
  showFilter = true
}) => {
  const allCategories = ['All', ...Array.from(new Set(projects.flatMap(project => project.category)))];
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects);
  const [activeCategory, setActiveCategory] = useState('All');

  const displayedProjects = limit > 0 ? filteredProjects.slice(0, limit) : filteredProjects;

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

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.category.includes(activeCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">My <span className="text-primary-600 dark:text-primary-400">Projects</span></h2>
            <p className="max-w-2xl mx-auto text-dark-400 dark:text-dark-200">
              A showcase of my best work, ranging from web applications to design projects.
            </p>
          </motion.div>
        </div>

        {/* Project Filter */}
        {showFilter && (
          <ProjectFilter
            categories={allCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}

        {/* Projects Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project) => (
              <motion.div
                style={{
                  backgroundColor: '#e2e8f0',
                  padding: '0.5rem',
                  width: '100%'
                }}
                key={project.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
              >
                {/* Project Thumbnail */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-500 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <FiExternalLink size={18} />
                        </Link>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-500 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                          aria-label={`View ${project.title} source code`}
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs py-1 px-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs py-1 px-2 bg-dark-100 dark:bg-dark-500 text-dark-500 dark:text-dark-100 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-dark-400 dark:text-dark-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={`https:${project.liveUrl}`}
                    className="mt-auto text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center text-sm font-medium"
                  >
                    Visit Site
                    <FiExternalLink className="ml-1" size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button (shown when limit is applied) */}
        {limit > 0 && projects.length > limit && (
          <div className="text-center mt-12">
            <Link href="/projects" className="btn btn-outline px-8 py-3 rounded-lg">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section >
  );
};

export default Projects;
