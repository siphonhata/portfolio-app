import { IBlogArticle } from '@/app/types';

const mockBlogArticles: IBlogArticle[] = [
  {
      id: '1',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js and how to build your first application.',
      coverImage: '/assets/images/blog/article1.jpg',
      publishedAt: '2023-01-15',
      readTime: 5,
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'getting-started-with-nextjs',
      content: ''
  },
  // Add more articles...
];

export default mockBlogArticles;