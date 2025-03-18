
import React, { useState, useEffect } from 'react';
import { Sliders, Filter, X } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import SkillCard, { Skill } from '@/components/SkillCard';

// Mock data for all skills
const allSkills: Skill[] = [
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
  {
    id: '5',
    title: 'Video Editing & Post-Production',
    category: 'Video',
    description: 'Professional video editing services including color grading, effects, and audio mixing.',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'David Lee',
    ownerAvatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviewCount: 39,
    duration: '5-10 hours',
    slug: 'video-editing-post-production'
  },
  {
    id: '6',
    title: 'Personal Fitness Training',
    category: 'Fitness',
    description: 'Customized workout plans and training sessions tailored to your fitness goals.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Aisha Johnson',
    ownerAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Chicago, IL',
    rating: 4.9,
    reviewCount: 47,
    duration: '1-2 hours per session',
    slug: 'personal-fitness-training'
  },
  {
    id: '7',
    title: 'Spanish Language Lessons',
    category: 'Languages',
    description: 'Conversational Spanish lessons for beginners and intermediate learners. Flexible scheduling.',
    imageUrl: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Carlos Mendez',
    ownerAvatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Remote',
    rating: 4.7,
    reviewCount: 31,
    duration: '1 hour per session',
    slug: 'spanish-language-lessons'
  },
  {
    id: '8',
    title: 'Financial Planning & Investment Advice',
    category: 'Finance',
    description: 'Personal finance planning, investment strategies, and budget optimization services.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerName: 'Mark Williams',
    ownerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Seattle, WA',
    rating: 4.9,
    reviewCount: 24,
    duration: '2-3 hours',
    slug: 'financial-planning-investment-advice'
  },
];

// Categories for filtering
const categories = [
  'All Categories',
  'Programming',
  'Marketing',
  'Design',
  'Photography',
  'Video',
  'Fitness',
  'Languages',
  'Finance',
];

// Locations for filtering
const locations = [
  'All Locations',
  'Remote',
  'New York, NY',
  'San Francisco, CA',
  'Los Angeles, CA',
  'Chicago, IL',
  'Boston, MA',
  'Seattle, WA',
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(allSkills);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Apply filters
  useEffect(() => {
    let results = allSkills;
    
    // Apply search filter
    if (searchQuery) {
      results = results.filter(skill => 
        skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      results = results.filter(skill => skill.category === selectedCategory);
    }
    
    // Apply location filter
    if (selectedLocation !== 'All Locations') {
      results = results.filter(skill => skill.location === selectedLocation);
    }
    
    setFilteredSkills(results);
  }, [searchQuery, selectedCategory, selectedLocation]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedLocation('All Locations');
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Browse Skills</h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover skills from our community members. Filter by category, location, or search for specific skills.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Search for skills, categories, or keywords..."
            showFilters={false}
            className="mb-4"
          />
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md border border-border hover:bg-secondary/70 transition-colors"
            >
              <Sliders size={18} />
              <span>Filters</span>
            </button>
            
            {(selectedCategory !== 'All Categories' || selectedLocation !== 'All Locations') && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-md hover:bg-destructive/20 transition-colors"
              >
                <X size={18} />
                <span>Clear Filters</span>
              </button>
            )}
            
            {selectedCategory !== 'All Categories' && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 text-sm rounded-full">
                <span>{selectedCategory}</span>
                <button
                  onClick={() => setSelectedCategory('All Categories')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            
            {selectedLocation !== 'All Locations' && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 text-sm rounded-full">
                <span>{selectedLocation}</span>
                <button
                  onClick={() => setSelectedLocation('All Locations')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
          
          {/* Filter panel */}
          {isFilterOpen && (
            <div className="mt-4 p-6 bg-card rounded-lg border border-border animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <Filter size={18} />
                    <span>Categories</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="form-radio text-primary h-4 w-4"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Locations */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <Filter size={18} />
                    <span>Locations</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="location"
                          value={location}
                          checked={selectedLocation === location}
                          onChange={() => setSelectedLocation(location)}
                          className="form-radio text-primary h-4 w-4"
                        />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="mb-4">
          <h2 className="text-xl font-medium">
            {filteredSkills.length} {filteredSkills.length === 1 ? 'Result' : 'Results'}
          </h2>
        </div>
        
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-muted-foreground mb-4">No skills match your search criteria</div>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
