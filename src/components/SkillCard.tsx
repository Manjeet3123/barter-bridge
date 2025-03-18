
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the Skill type
export interface Skill {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  ownerName: string;
  ownerAvatar: string;
  location: string;
  rating: number;
  reviewCount: number;
  duration: string;
  slug: string;
}

interface SkillCardProps {
  skill: Skill;
  featured?: boolean;
  className?: string;
}

const SkillCard = ({ skill, featured = false, className }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border hover-scale",
        featured ? "shadow-md" : "shadow-sm",
        className
      )}
    >
      {/* Bookmark button */}
      <button 
        className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5 text-foreground/80 backdrop-blur-sm transition-all hover:bg-white hover:text-primary focus-ring"
        aria-label="Bookmark skill"
      >
        <Bookmark size={16} />
      </button>
      
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={skill.imageUrl} 
          alt={skill.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category tag */}
        <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {skill.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={skill.ownerAvatar} 
              alt={skill.ownerName} 
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm text-muted-foreground">{skill.ownerName}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Star size={16} className="fill-amber-500 text-amber-500" />
            <span className="ml-1 text-xs font-medium text-foreground">{skill.rating} ({skill.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="mt-2 font-medium leading-tight tracking-tight hover:text-primary transition-colors">
          <Link to={`/skills/${skill.slug}`}>{skill.title}</Link>
        </h3>
        
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
        
        <div className="mt-3 flex items-center space-x-3 text-xs text-muted-foreground">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>{skill.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{skill.duration}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Link 
            to={`/skills/${skill.slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
