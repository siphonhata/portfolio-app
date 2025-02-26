'use client'
import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ISocialLink } from '@/app/types';

const socialLinks: ISocialLink[] = [
  {
    id: '1',
    platform: 'github',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    id: '2',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: '3',
    platform: 'twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <FiGithub />;
      case 'linkedin':
        return <FiLinkedin />;
      case 'twitter':
        return <FiTwitter />;
      default:
        return <FiMail />;
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-600 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary-600">Portfolio</span>
            </Link>
            <p className="mt-4 text-dark-300 dark:text-dark-200">
              A portfolio showcasing my skills, projects, and experiences as a developer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-dark-300 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-dark-300 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-dark-300 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-dark-300 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-500 flex items-center justify-center text-dark-500 dark:text-white hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                    aria-label={`Visit my ${link.platform} profile`}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-100 dark:border-dark-500 mt-8 pt-8 text-center text-dark-300 dark:text-dark-200">
          <p>© {currentYear} Sipho Ndlalane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;