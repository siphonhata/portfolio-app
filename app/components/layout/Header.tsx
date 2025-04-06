'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useThemeContext } from '@/app/context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import { IMenuItem } from '@/app/types';

const menuItems: IMenuItem[] = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'Projects', path: '#projects' },
  { id: '3', label: 'Skills', path: '#skills' },
  { id: '4', label: 'Blog', path: '#blog' },
  { id: '5', label: 'Contact', path: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('/');
  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionIds = ['projects', 'skills', 'blog', 'contact'];
      let foundSection = '/'; // default to home

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = `#${id}`;
            break;
          }
        }
      }

      setCurrentSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClasses = (itemPath: string) => {
    return `font-medium transition-colors hover:text-primary-600 ${
      (itemPath === '/' && pathname === '/' && currentSection === '/')
        ? 'text-primary-600'
        : (itemPath !== '/' && currentSection === itemPath)
          ? 'text-primary-600'
          : 'text-black dark:text-white'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600">Portfolio</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={getLinkClasses(item.path)}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {isLoaded && <ThemeToggle />}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          {isLoaded && <ThemeToggle />}
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <nav className="bg-white dark:bg-dark-600 py-5 px-4 shadow-lg">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={getLinkClasses(item.path)}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
