
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillCard, { Skill } from './SkillCard';

// Mock data for featured skills
const featuredSkills: Skill[] = [
  {
    id: '1',
    title: 'Professional Web Development with React',
    category: 'Programming',
    description: 'I'll teach you React basics to advanced concepts including hooks, context API, and Redux.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Jason Wong',
    ownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
    rating: 4.9,
    reviewCount: 42,
    duration: '10-12 hours',
    slug: 'professional-web-development-with-react'
  },
  {
    id: '2',
    title: 'Digital Marketing Strategy & SEO',
    category: 'Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and improve SEO rankings.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Emma Rodriguez',
    ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 36,
    duration: '8-10 hours',
    slug: 'digital-marketing-strategy-seo'
  },
  {
    id: '3',
    title: 'Interior Design Consultation',
    category: 'Design',
    description: 'I can help you transform your space with professional interior design guidance and tips.',
    imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Sarah Kim',
    ownerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Boston, MA',
    rating: 4.9,
    reviewCount: 28,
    duration: '3-5 hours',
    slug: 'interior-design-consultation'
  },
  {
    id: '4',
    title: 'Professional Portrait Photography',
    category: 'Photography',
    description: 'High-quality portrait photography session including retouching and digital delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Michael Johnson',
    ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'New York, NY',
    rating: 4.7,
    reviewCount: 52,
    duration: '2-3 hours',
    slug: 'professional-portrait-photography'
  },
];

const FeaturedSkills = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Skills</h2>
            <p className="text-muted-foreground max-w-2xl">Discover the most popular skills available for exchange on our platform.</p>
          </div>
          <Link 
            to="/browse" 
            className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View all skills
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSkills.map((skill, index) => (
            <SkillCard 
              key={skill.id} 
              skill={skill} 
              featured 
              className={`opacity-0 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;
