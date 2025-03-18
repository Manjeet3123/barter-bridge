
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedSkills from '@/components/FeaturedSkills';
import SkillCategories from '@/components/SkillCategories';
import HowItWorks from '@/components/HowItWorks';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Initialize animations on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on mount
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Show welcome toast
    toast({
      title: "Welcome to SkillSwap!",
      description: "Exchange skills without spending money.",
      duration: 5000,
    });
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [toast]);

  // Animation observer for scroll animations
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
          observer.unobserve(element);
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSkills />
      <SkillCategories />
      <HowItWorks />
      
      {/* Testimonials section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from people who have successfully exchanged skills on our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card p-6 rounded-xl border border-border animate-on-scroll">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="James Wilson" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium">James Wilson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Professional</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "I needed help with my website and exchanged my marketing expertise for web development skills. 
                The process was smooth and I got exactly what I needed without spending a dime!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-card p-6 rounded-xl border border-border animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Emily Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium">Emily Chen</h4>
                  <p className="text-sm text-muted-foreground">Photographer</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "As a photographer, I traded product photos for Spanish lessons. It's amazing how 
                this platform helps you grow your skills while sharing what you're already good at."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-card p-6 rounded-xl border border-border animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Daniel Lopez" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium">Daniel Lopez</h4>
                  <p className="text-sm text-muted-foreground">Music Teacher</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "I've been teaching guitar for years, but needed help with digital marketing. 
                Thanks to SkillSwap, I exchanged music lessons for marketing advice that grew my business!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-accent/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Swapping?</h2>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Join thousands of people exchanging skills and growing together. Sign up today and list your first skill.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/auth" 
                      className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Join Now
                    </Link>
                    <Link 
                      to="/browse" 
                      className="border border-border bg-background/80 text-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Browse Skills
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="People collaborating" 
                  className="absolute inset-0 h-full w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
