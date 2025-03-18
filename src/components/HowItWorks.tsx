
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageSquare, 
  Handshake, 
  Star, 
  ArrowRight 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find a Skill',
    description: 'Browse and search for skills that interest you. Filter by category, location, or keyword.',
    icon: Search,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 2,
    title: 'Connect & Discuss',
    description: 'Message the skill provider to discuss details, timing, and what you'll offer in exchange.',
    icon: MessageSquare,
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 3,
    title: 'Make the Swap',
    description: 'Agree on terms and exchange skills. SkillSwap helps facilitate the process and scheduling.',
    icon: Handshake,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 4,
    title: 'Rate & Review',
    description: 'After the swap, leave feedback and ratings to help build trust in the community.',
    icon: Star,
    color: 'bg-amber-100 text-amber-700'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/70 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/70 rounded-tr-full opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">How SkillSwap Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exchange your skills with others in just a few simple steps. No money involved, just pure value exchange.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="bg-card rounded-xl p-6 border border-border relative group hover-scale opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center font-bold text-primary">
                {step.id}
              </div>
              
              {/* Step icon */}
              <div className={`p-4 rounded-lg mb-4 ${step.color}`}>
                <step.icon size={24} />
              </div>
              
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Connector line for all except the last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/how-it-works" 
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors group"
          >
            Learn More
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
