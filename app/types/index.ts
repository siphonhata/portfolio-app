import { JSX } from "react";

// Theme type
export type Theme = 'light' | 'dark' | 'system';

// Project type
export interface IProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  thumbnail: string;
  images?: string[];
  technologies: string[];
  category: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Skill type
export interface ISkill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'other' | 'database' | 'version-control' | 'Programming' | 'Operating Systems' | 'API Development' | 'Monitoring' | 'DevOps' | 'Project Management' | 'Networking';
  proficiency: number; // 1-100
}

// Testimonial type
export interface ITestimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  text: string;
  rating: number; // 1-5
}

// Blog article type
export interface IBlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  readTime: number; // In minutes
  publishedAt: string;
  updatedAt?: string;
}

// Contact form data type
export interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social media link type
export interface ISocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'youtube' | 'other';
  url: string;
  icon: string;
}

// Menu item type
export interface IMenuItem {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean;
}

// Section types for homepage
export type SectionId = 'hero' | 'about' | 'projects' | 'skills' | 'testimonials' | 'blog' | 'contact';

// Animation variants
export interface IAnimationVariants {
  hidden: object;
  visible: object;
}

// API response type
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// SEO props type
export interface ISeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
  };
}