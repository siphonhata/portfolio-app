'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="section pt-28 md:pt-36 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-2">
                <motion.div variants={itemVariants}>
                  <span className="text-primary-600 dark:text-primary-400 text-lg md:text-xl font-medium">
                    Hello, I'm
                  </span>
                </motion.div>
              </div>

              <div className="mb-4 leading-tight">
                <motion.h1 variants={itemVariants}>
                  <span className="block">Sipho Ndlalane</span>
                  <span className="text-primary-600 dark:text-primary-400">Software Engineer</span>
                </motion.h1>
              </div>

              <div className="text-lg md:text-xl mb-8 text-dark-400 dark:text-dark-200 max-w-xl">
                <motion.p variants={itemVariants}>
                  Strong foundation in full-stack development, experienced in Python, C#, and JavaScript-based frameworks like React and Node.js.
                </motion.p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div variants={itemVariants}>
                  <Link href="#projects" className="btn btn-primary px-6 py-3 rounded-lg">
                    <span>View My Work</span>
                    <FiArrowRight className="ml-2" />
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a
                    href="/Sipho-Ndlalane.pdf"
                    download
                    className="btn btn-outline px-6 py-3 rounded-lg"
                  >
                    <span>Download CV</span>
                    <FiDownload className="ml-2" />
                  </a>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-8">
                <motion.div variants={itemVariants}>
                  <span className="text-dark-400 dark:text-dark-200">Connect with me:</span>
                </motion.div>
                <div className="flex space-x-3">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://github.com/siphonhata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-500 flex items-center justify-center text-dark-500 dark:text-white hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/sipho-ndlalane-802534187/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-500 flex items-center justify-center text-dark-500 dark:text-white hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiLinkedin size={20} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Sipho Ndlalane"
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-500/10 rounded-full filter blur-3xl" />
    </section>
  );
};

export default Hero;