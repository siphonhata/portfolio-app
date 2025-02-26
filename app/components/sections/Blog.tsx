'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { IBlogArticle } from '@/app/types';

interface BlogProps {
  articles: IBlogArticle[];
  limit?: number;
}

const Blog: React.FC<BlogProps> = ({ articles, limit = 3 }) => {
  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Apply limit
  const displayedArticles = limit > 0 ? sortedArticles.slice(0, limit) : sortedArticles;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="blog" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Latest <span className="text-primary-600 dark:text-primary-400">Articles</span></h2>
            <p className="max-w-2xl mx-auto text-dark-400 dark:text-dark-200">
              Sharing my knowledge, experiences, and insights about web development and design.
            </p>
          </motion.div>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="card group h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div variants={itemVariants}>
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs py-1 px-2 bg-primary-500 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs py-1 px-2 bg-dark-500 text-white rounded-full">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Metadata */}
                    <div className="flex items-center text-sm text-dark-400 dark:text-dark-200 mb-3">
                      <div className="flex items-center mr-4">
                        <FiCalendar className="mr-1" size={14} />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-1" size={14} />
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-dark-400 dark:text-dark-200 text-sm mb-4 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-auto text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center text-sm font-medium"
                    >
                      Read More
                      <FiArrowRight className="ml-1" size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View All Articles Button */}
        {limit > 0 && articles.length > limit && (
          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-outline px-8 py-3 rounded-lg">
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;