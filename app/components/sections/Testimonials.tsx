'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { ITestimonial } from '@/app/types';

interface TestimonialsProps {
  testimonials: ITestimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!paused && testimonials.length > 1) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, paused, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handlePause = () => {
    setPaused(true);
  };

  const handleResume = () => {
    setPaused(false);
  };

  // Generate star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FiStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
        size={16}
      />
    ));
  };

  // Empty state
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Client <span className="text-primary-600 dark:text-primary-400">Testimonials</span></h2>
            <p className="max-w-2xl mx-auto text-dark-400 dark:text-dark-200">
              Feedback from clients and collaborators about their experience working with me.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto px-4 pb-12"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          <div className="bg-white dark:bg-dark-600 rounded-xl shadow-lg p-2 md:p-8">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <div className="flex flex-col md:flex-row items-center text-center md:text-left p-4 md:p-6">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Testimonial Avatar */}
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
                      {testimonials[currentIndex].avatar ? (
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          fill
                          sizes="(max-width: 768px) 6rem, 8rem"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-4xl font-bold">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div>
                    <div className="flex justify-center md:justify-start mb-3">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <blockquote className="text-lg italic mb-6">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-dark-400 dark:text-dark-200">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white dark:bg-dark-500 shadow-md flex items-center justify-center text-primary-600 dark:text-primary-400 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white dark:bg-dark-500 shadow-md flex items-center justify-center text-primary-600 dark:text-primary-400 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary-600 dark:bg-primary-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 dark:hover:bg-primary-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;