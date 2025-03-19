'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useThemeContext } from '@/app/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isLoaded } = useThemeContext();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use placeholder during SSR and initial hydration
  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        aria-hidden="true"
      />
    );
  }
  
  // Only determine theme after client-side mounting
  const isDark = theme === 'dark';

  return (
    <button
      className="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun className="text-yellow-400" size={20} />
        ) : (
          <FiMoon className="text-primary-600" size={20} />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;