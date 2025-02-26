// app/types/projects/page.tsx

import Layout from '@/app/components/layout/Layout';
import Projects from '@/app/components/sections/Projects';
import { IProject, ISeoProps } from '@/app/types';
import mockProjects from '@/app/lib/data/projects';

export default async function ProjectsPage() {
  const projects: IProject[] = mockProjects;

  const seo: ISeoProps = {
    title: 'Projects - Sipho Ndlalane',
    description: 'Explore my portfolio of web development and design projects.',
  };

  return (
    <Layout seo={seo}>
      <section className="section pt-28 md:pt-36">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h1>
          <p className="text-dark-400 dark:text-dark-200 text-lg max-w-2xl mx-auto text-center mb-12">
            A comprehensive collection of my work, showcasing a diverse range of skills and technologies.
          </p>
        </div>
      </section>
      <Projects projects={projects} />
    </Layout>
  );
}
