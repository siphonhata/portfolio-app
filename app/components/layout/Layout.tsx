
'use client'
import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { ISeoProps } from '@/app/types';

interface LayoutProps {
  children: React.ReactNode;
  seo?: ISeoProps;
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  const defaultSeo: ISeoProps = {
    title: 'Sipho Ndlalane - Portfolio',
    description: 'Personal portfolio showcasing my skills, projects, and experiences',
  };

  const mergedSeo = { ...defaultSeo, ...seo };

  return (
    <>
      <Head>
        <title>{mergedSeo.title}</title>
        <meta name="description" content={mergedSeo.description} />
        {mergedSeo.canonical && <link rel="canonical" href={mergedSeo.canonical} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={mergedSeo.openGraph?.title || mergedSeo.title} />
        <meta
          property="og:description"
          content={mergedSeo.openGraph?.description || mergedSeo.description}
        />
        <meta property="og:type" content="website" />
        {mergedSeo.openGraph?.url && <meta property="og:url" content={mergedSeo.openGraph.url} />}
        {mergedSeo.openGraph?.image && (
          <meta property="og:image" content={mergedSeo.openGraph.image} />
        )}
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <div className="flex-grow pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Layout;