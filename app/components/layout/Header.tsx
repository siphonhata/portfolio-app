'use client'
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
  { id: '2', label: 'Projects', path: '/projects' },
  { id: '3', label: 'Blog', path: '/blog' },
  { id: '4', label: 'Contact', path: '/#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    pathname === item.path ? 'text-primary-600' : ''
                  }`}
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
                    className={`block font-medium transition-colors hover:text-primary-600 ${
                      pathname === item.path ? 'text-primary-600' : ''
                    }`}
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