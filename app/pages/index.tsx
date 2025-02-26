import { GetStaticProps } from 'next';
import Layout from '@/app/components/layout/Layout';
import Hero from '@/app/components/sections/Hero';
import Projects from '@/app/components/sections/Projects';
import Skills from '@/app/components/sections/Skills';
import Testimonials from '@/app/components/sections/Testimonials';
import Blog from '@/app/components/sections/Blog';
import Contact from '@/app/components/sections/Contact';
import { IProject, ISkill, ITestimonial, IBlogArticle, ISeoProps } from '@/app/types';

// Import your mock data - uncomment these
import mockProjects from '@/app/lib/data/projects';
import mockSkills from '@/app/lib/data/skills';
import mockTestimonials from '@/app/lib/data/testimonials';
import mockBlogArticles from '@/app/lib/data/articles';

interface HomeProps {
  projects: IProject[];
  skills: ISkill[];
  testimonials: ITestimonial[];
  articles: IBlogArticle[];
}

export default function Home({ projects, skills, testimonials, articles }: HomeProps) {
  const seo: ISeoProps = {
    title: 'Sipho Ndlalane - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications with React, Node.js, and more.',
  };

  return (
    <Layout seo={seo}>
      <Hero />
      <Projects projects={projects} limit={6} />
      <Skills skills={skills} />
      <Testimonials testimonials={testimonials} />
      <Blog articles={articles} limit={3} />
      <Contact />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real app, you would fetch data from an API or CMS
  return {
    props: {
      projects: mockProjects,
      skills: mockSkills,
      testimonials: mockTestimonials,
      articles: mockBlogArticles,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
};