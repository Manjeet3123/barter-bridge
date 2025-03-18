
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Camera, 
  Music, 
  BookOpen, 
  Globe, 
  Briefcase, 
  BarChart, 
  Utensils 
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the category type
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  count: number;
  slug: string;
}

// Mock data for categories
const categories: Category[] = [
  { 
    id: '1', 
    name: 'Programming & Development', 
    icon: Code, 
    color: 'bg-blue-100 text-blue-700', 
    count: 487,
    slug: 'programming-development'
  },
  { 
    id: '2', 
    name: 'Design & Creative', 
    icon: Palette, 
    color: 'bg-purple-100 text-purple-700', 
    count: 352,
    slug: 'design-creative'
  },
  { 
    id: '3', 
    name: 'Photography & Video', 
    icon: Camera, 
    color: 'bg-amber-100 text-amber-700', 
    count: 258,
    slug: 'photography-video'
  },
  { 
    id: '4', 
    name: 'Music & Audio', 
    icon: Music, 
    color: 'bg-emerald-100 text-emerald-700', 
    count: 194,
    slug: 'music-audio'
  },
  { 
    id: '5', 
    name: 'Education & Tutoring', 
    icon: BookOpen, 
    color: 'bg-sky-100 text-sky-700', 
    count: 315,
    slug: 'education-tutoring'
  },
  { 
    id: '6', 
    name: 'Languages & Translation', 
    icon: Globe, 
    color: 'bg-indigo-100 text-indigo-700', 
    count: 178,
    slug: 'languages-translation'
  },
  { 
    id: '7', 
    name: 'Business & Consulting', 
    icon: Briefcase, 
    color: 'bg-neutral-100 text-neutral-700', 
    count: 246,
    slug: 'business-consulting'
  },
  { 
    id: '8', 
    name: 'Marketing & Analytics', 
    icon: BarChart, 
    color: 'bg-rose-100 text-rose-700', 
    count: 204,
    slug: 'marketing-analytics'
  },
  { 
    id: '9', 
    name: 'Cooking & Culinary', 
    icon: Utensils, 
    color: 'bg-orange-100 text-orange-700', 
    count: 132,
    slug: 'cooking-culinary'
  },
];

const SkillCategories = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore skills across different categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/browse/${category.slug}`}
              className={cn(
                "flex items-center p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className={cn("p-3 rounded-lg mr-4", category.color)}>
                <category.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} skills available</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCategories;
