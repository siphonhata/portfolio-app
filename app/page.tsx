import React from 'react';
import Layout from '@/app/components/layout/Layout';
import Hero from '@/app/components/sections/Hero';
import Projects from '@/app/components/sections/Projects';
import Skills from '@/app/components/sections/Skills';
import Testimonials from '@/app/components/sections/Testimonials';
import Blog from '@/app/components/sections/Blog';
import Contact from '@/app/components/sections/Contact';
import { ISeoProps } from '@/app/types';

// Import your mock data
import mockProjects from '@/app/lib/data/projects';
import mockSkills from '@/app/lib/data/skills';
import mockTestimonials from '@/app/lib/data/testimonials';
import mockBlogArticles from '@/app/lib/data/articles';

export default function Home() {
  const seo: ISeoProps = {
    title: 'Sipho Ndlalane - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications with React, Node.js, and more.',
  };

  return (
    <Layout seo={seo}>
      <Hero />
      <Projects projects={mockProjects} limit={6} />
      {/* <Skills skills={mockSkills} /> */}
      {/* <Testimonials testimonials={mockTestimonials} />
      <Blog articles={mockBlogArticles} limit={3} /> */}
      <Contact />
    </Layout>
  );
}