import { IBlogArticle } from '@/app/types';

const mockBlogArticles: IBlogArticle[] = [
  {
      id: '1',
      title: 'Why Every Beginner Programmer Should Learn Git and Version Control',
      excerpt: 'Learn the basics of Git and how to use it.',
      coverImage: '/git.png',
      publishedAt: '2025-04-06',
      readTime: 3,
      tags: ['Git', 'Version-Control', 'Web Development'],
      slug: 'http://shorturl.at/jxSeB',
      content: ''
  },
  // Add more articles...
];

export default mockBlogArticles;