
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-accent/5"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="animate-fade-in mb-6 font-bold tracking-tight text-balance">
            Exchange Skills,<br />
            <span className="text-primary">Not Money</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl animate-slide-up animation-delay-100 text-balance">
            SkillSwap connects talented people for mutual growth and collaboration. Trade what you know for what you want to learn.
          </p>
          
          <div className="animate-slide-up animation-delay-200">
            <SearchBar />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-300">
            <Link 
              to="/browse" 
              className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Skills
            </Link>
            <Link 
              to="/how-it-works" 
              className="border border-border bg-secondary/50 text-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors flex items-center"
            >
              How It Works <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-500">
          <div className="bg-card p-4 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary">2,800+</div>
            <div className="text-sm text-muted-foreground mt-1">Active Users</div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary">5,400+</div>
            <div className="text-sm text-muted-foreground mt-1">Skills Listed</div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary">3,200+</div>
            <div className="text-sm text-muted-foreground mt-1">Swaps Completed</div>
          </div>
          <div className="bg-card p-4 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary">4.8/5</div>
            <div className="text-sm text-muted-foreground mt-1">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
